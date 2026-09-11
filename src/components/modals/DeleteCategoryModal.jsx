import { Modal, Button, Flex, Text } from '@mantine/core';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { categoriesService } from '../../services/categoriesService';

export function DeleteCategoryModal({ disclosure, category }) {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: categoriesService.delete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] }); // Hace refetch de categories
            disclosure.close(); // Cierra el modal
        }
    })

    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title="Eliminar categoría"
            centered
        >
            <Text size="sm" textWrap="balance">
                ¿Estás seguro que querés eliminar esta categoría?
                Después no podrás deshacer esta acción.
            </Text>

            <Flex justify="end" mt="16px">
                <Button
                    variant="filled"
                    color="red"
                    onClick={() => mutation.mutate(category.id)}
                    loading={mutation.isPending}
                >
                    Eliminar
                </Button>
            </Flex>
        </Modal>
    );
}
