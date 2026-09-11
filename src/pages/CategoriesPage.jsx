import { Button, Flex, Title, TextInput, SimpleGrid, Center, Loader } from "@mantine/core";
import { CategoryCard } from "../components/cards/CategoryCard";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { CreateUpdateCategoryModal } from "../components/modals/CreateUpdateCategoryModal";
import { useModalDisclosure } from "../hooks/useModalDisclosure";
import { useQuery } from "@tanstack/react-query";
import { categoriesService } from "../services/categoriesService";

export function CategoriesPage() {
    const createDisclosure = useModalDisclosure();

    const query = useQuery({
        queryKey: ["categories"],
        queryFn: categoriesService.getAll
    })

    return (
        <>
            <Flex direction="column" gap="32px">
                <Title>Categorías</Title>

                <Flex justify="space-between" align="center" gap="12px">
                    <TextInput
                        placeholder="Buscar una categoría.."
                        style={{ flex: 1, maxWidth: "250px" }}
                        leftSectionPointerEvents="none"
                        leftSection={<IconSearch size={16} />}
                    />

                    <Button
                        variant="filled"
                        leftSection={<IconPlus size={18} />}
                        onClick={createDisclosure.open}
                    >
                        Nueva categoría
                    </Button>
                </Flex>

                {
                    query.isPending
                        ? <Center>
                            <Loader type="dots" />
                        </Center>
                        : null
                }

                {
                    query.isSuccess
                        ? <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
                            {query.data.map((category) => (
                                <CategoryCard
                                    key={category.id}
                                    category={category}
                                />
                            ))}
                        </SimpleGrid>
                        : null
                }
            </Flex>

            <CreateUpdateCategoryModal disclosure={createDisclosure} />
        </>
    );
}
