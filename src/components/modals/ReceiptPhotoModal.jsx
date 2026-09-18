import { Modal, Button, Flex, Text, Loader, Center } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { receiptsService } from '../../services/receiptsService';

export function ReceiptPhotoModal({ disclosure, receipt }) {
    const query = useQuery({
        queryFn: () => receiptsService.getImageUrl(receipt.imageKey),
        queryKey: ["receipt-" + receipt.id],
        enabled: disclosure.isOpen
    })

    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title="Recibo"
            size="xl"
            centered
        >
            {
                query.isSuccess
                    ? <img src={query.data} alt="Imagen del recibo" />
                    : <Center>
                        <Loader />
                    </Center>
            }
        </Modal>
    );
}
