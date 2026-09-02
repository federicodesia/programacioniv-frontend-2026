import { useDisclosure } from '@mantine/hooks';

export function useModalDisclosure() {
    const [isOpen, { open, close }] = useDisclosure();

    return {
        isOpen,
        open,
        close
    };
}