import { Button, Flex, Select, TextInput, Title } from "@mantine/core";
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { CreateEditReceiptModal } from "../components/modals/CreateEditReceiptModal";
import { ReceiptCard } from "../components/cards/ReceiptCard";
import { useModalDisclosure } from "../hooks/useModalDisclosure";

export function ReceiptsPage() {
    const createReceiptDisclosure = useModalDisclosure();

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
                            data={['Impuestos', 'Servicios', 'Alquiler', 'Comida']}
                        />

                        <Select
                            placeholder="Etiqueta"
                            data={['Casa', 'Auto', 'Moto']}
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

                <Flex direction="column" gap="16px">
                    <ReceiptCard />
                    <ReceiptCard />
                    <ReceiptCard />
                </Flex>
            </Flex>

            <CreateEditReceiptModal disclosure={createReceiptDisclosure} action="create" />
        </>
    )
}