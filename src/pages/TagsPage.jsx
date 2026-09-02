import { Button, Flex, Title, TextInput, SimpleGrid } from "@mantine/core";
import { TagCard } from "../components/cards/TagCard";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { CreateEditTagModal } from "../components/modals/CreateEditTagModal";
import { useModalDisclosure } from "../hooks/useModalDisclosure";

const TAGS = [
    { id: 1, name: "Casa" },
    { id: 2, name: "Auto" },
    { id: 3, name: "Moto" },
    { id: 4, name: "Viaje" },
    { id: 5, name: "Trabajo" },
    { id: 6, name: "Personal" },
];

export function TagsPage() {
    const createDisclosure = useModalDisclosure();

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

                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
                    {TAGS.map((tag) => (
                        <TagCard
                            key={tag.id}
                            tag={tag}
                        />
                    ))}
                </SimpleGrid>
            </Flex>

            <CreateEditTagModal disclosure={createDisclosure} action="create" />
        </>
    );
}
