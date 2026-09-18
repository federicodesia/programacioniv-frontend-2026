import { Button, Flex, Title, TextInput, SimpleGrid, Loader, Center } from "@mantine/core";
import { TagCard } from "../components/cards/TagCard";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { CreateUpdateTagModal } from "../components/modals/CreateUpdateTagModal";
import { useModalDisclosure } from "../hooks/useModalDisclosure";
import { useQuery } from "@tanstack/react-query";
import { tagsService } from "../services/tagsService";

export function TagsPage() {
    const createDisclosure = useModalDisclosure();

    const query = useQuery({
        queryKey: ["tags"],
        queryFn: tagsService.getAll
    })

    return (
        <>
            <Flex direction="column" gap="32px">
                <Title>Etiquetas</Title>

                <Flex justify="space-between" align="center" gap="12px">
                    <TextInput
                        placeholder="Buscar una etiqueta.."
                        style={{ flex: 1, maxWidth: "250px" }}
                        leftSectionPointerEvents="none"
                        leftSection={<IconSearch size={16} />}
                    />

                    <Button
                        variant="filled"
                        leftSection={<IconPlus size={18} />}
                        onClick={createDisclosure.open}
                    >
                        Nueva etiqueta
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
                            {
                                query.data.map((tag) => (
                                    <TagCard
                                        key={tag.id}
                                        tag={tag}
                                    />
                                ))
                            }
                        </SimpleGrid>
                        : null
                }
            </Flex>

            <CreateUpdateTagModal disclosure={createDisclosure} />
        </>
    );
}
