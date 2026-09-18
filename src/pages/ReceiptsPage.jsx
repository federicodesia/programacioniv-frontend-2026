import { Button, Center, Flex, Loader, Select, TextInput, Title } from "@mantine/core";
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { CreateEditReceiptModal } from "../components/modals/CreateEditReceiptModal";
import { ReceiptCard } from "../components/cards/ReceiptCard";
import { useModalDisclosure } from "../hooks/useModalDisclosure";
import { useQuery } from "@tanstack/react-query";
import { receiptsService } from "../services/receiptsService";
import { categoriesService } from "../services/categoriesService";
import { tagsService } from "../services/tagsService";

export function ReceiptsPage() {
    const createReceiptDisclosure = useModalDisclosure();

    const receiptsQuery = useQuery({
        queryFn: receiptsService.getAll,
        queryKey: ["receipts"]
    })

    const categoriesQuery = useQuery({
        queryKey: ["categories"],
        queryFn: categoriesService.getAll
    })

    const tagsQuery = useQuery({
        queryKey: ["tags"],
        queryFn: tagsService.getAll
    })

    return (
        <>
            <Flex direction="column" gap="32px">
                <Title>Mis recibos</Title>

                <Flex justify="space-between" gap="12px">
                    <Flex gap="12px">
                        <TextInput
                            placeholder="Buscar un recibo.."
                            style={{ flex: 1, maxWidth: "250px" }}
                            leftSectionPointerEvents="none"
                            leftSection={<IconSearch size={16} />}
                        />

                        <Select
                            placeholder="Categoría"
                            data={categoriesQuery.data?.map(category => category.name)}
                            loading={categoriesQuery.isLoading}
                        />

                        <Select
                            placeholder="Etiqueta"
                            data={tagsQuery.data?.map(tag => tag.name)}
                            loading={tagsQuery.isLoading}
                        />
                    </Flex>

                    <Button
                        variant="filled"
                        leftSection={<IconPlus size={18} />}
                        onClick={createReceiptDisclosure.open}
                    >
                        Nuevo recibo
                    </Button>
                </Flex>

                {
                    receiptsQuery.isPending
                        ? <Center>
                            <Loader type="dots" />
                        </Center>
                        : null
                }

                {
                    receiptsQuery.isSuccess
                        ? <Flex direction="column" gap="16px">
                            {
                                receiptsQuery.data.map((receipt) => (
                                    <ReceiptCard receipt={receipt} />
                                ))
                            }
                        </Flex>
                        : null
                }
            </Flex>

            <CreateEditReceiptModal disclosure={createReceiptDisclosure} />
        </>
    )
}