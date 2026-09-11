import { Modal, Button, Flex, Text } from '@mantine/core';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { tagsService } from '../../services/tagsService';

export function DeleteTagModal({ disclosure, tag }) {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: tagsService.delete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tags"] }); // Hace refetch de tags
            disclosure.close(); // Cierra el modal
        }
    })

    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title="Eliminar etiqueta"
            centered
        >
            <Text size="sm" textWrap="balance">
                ¿Estás seguro que querés eliminar esta etiqueta?
                Después no podrás deshacer esta acción.
            </Text>

            <Flex justify="end" mt="16px">
                <Button
                    variant="filled"
                    color="red"
                    onClick={() => mutation.mutate(tag.id)}
                    loading={mutation.isPending}
                >
                    Eliminar
                </Button>
            </Flex>
        </Modal>
    );
}
