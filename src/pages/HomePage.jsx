import { Button, Container, Flex, Select, TextInput, Title } from "@mantine/core";
import { Header } from "../components/Header";
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { NewEditReceiptModal } from "../components/modals/NewEditReceiptModal";
import { ReceiptCard } from "../components/cards/ReceiptCard";

export function HomePage() {
    return (
        <>
            <Header />

            <Container style={{
                marginTop: "64px"
            }} >
                <Title>Mis recibos</Title>

                <Flex justify="space-between" mt="32px" >
                    <Flex gap="12px">
                        <TextInput
                            placeholder="Buscar un recibo.."
                            leftSectionPointerEvents="none"
                            leftSection={<IconSearch size={16} />}
                        />

                        <Select
                            placeholder="Categoría"
                            data={['Impuestos', 'Servicios', 'Alquiler', 'Comida']}
                        />
                    </Flex>

                    <NewEditReceiptModal
                        action="create"
                        button={(open) =>
                            <Button
                                variant="filled"
                                leftSection={<IconPlus size={18} />}
                                onClick={open}
                            >
                                Nuevo recibo
                            </Button>
                        }
                    />
                </Flex>

                <Flex direction="column" gap="16px" mt="32px" >
                    <ReceiptCard />
                    <ReceiptCard />
                    <ReceiptCard />
                </Flex>


            </Container>
        </>
    )
}