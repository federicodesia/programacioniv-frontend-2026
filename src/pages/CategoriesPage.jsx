import { Button, Flex, Title, TextInput, SimpleGrid } from "@mantine/core";
import { CategoryCard } from "../components/cards/CategoryCard";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { CreateEditCategoryModal } from "../components/modals/CreateEditCategoryModal";
import { useModalDisclosure } from "../hooks/useModalDisclosure";

const CATEGORIES = [
    { id: 1, name: "Servicios", icon: "IconBolt" },
    { id: 2, name: "Casa", icon: "IconHome" },
    { id: 3, name: "Comida", icon: "IconMeat" },
    { id: 4, name: "Auto", icon: "IconCar" },
    { id: 5, name: "Salud", icon: "IconHealthRecognition" },
    { id: 6, name: "Mascotas", icon: "IconPaw" },
];

export function CategoriesPage() {
    const createDisclosure = useModalDisclosure();

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

                <SimpleGrid cols={{ base: 1, md: 3 }}>
                    {CATEGORIES.map((category) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                        />
                    ))}
                </SimpleGrid>
            </Flex>

            <CreateEditCategoryModal disclosure={createDisclosure} action="create" />
        </>
    );
}
