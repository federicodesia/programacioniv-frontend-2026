import { Modal, Button, Flex, Text, Loader, Center, Image } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { receiptsService } from '../../services/receiptsService';

export function ReceiptImageModal({ disclosure, receipt }) {
    const query = useQuery({
        queryFn: () => receiptsService.getImageUrl(receipt.imageKey),
        queryKey: [`receipt-${receipt.id}`],
        enabled: disclosure.isOpen // Solo hace la query si el modal está abierto
    })

    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title="Recibo"
            size="lg"
            centered
        >
            {
                query.isSuccess
                    ? <Image
                        h="500px"
                        w="100%"
                        fit="contain"
                        src={query.data}
                        alt="Imagen del recibo"
                    />
                    : <Center>
                        <Loader />
                    </Center>
            }
        </Modal>
    );
}
