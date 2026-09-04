import { Modal, Button, TextInput, Flex, SimpleGrid, Radio } from '@mantine/core';
import { TablerIcon } from '../TablerIcon';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CategorySchema } from '../../schemas/CategorySchema';

const ICON_NAMES = [
    'IconCar', 'IconHome', 'IconShoppingCart', 'IconMeat', 'IconTools',
    'IconDeviceMobile', 'IconBriefcase', 'IconGift', 'IconPlane', 'IconHealthRecognition',
    'IconBolt', 'IconDroplet', 'IconBottle', 'IconPaw', 'IconDeviceGamepad',
    'IconCategory', 'IconTag', 'IconWallet', 'IconCreditCard', 'IconCoins',
];

export function CreateEditCategoryModal({ disclosure, action }) {
    const form = useForm({
        resolver: zodResolver(CategorySchema)
    })

    // Se ejecuta si todo está correcto
    function onSubmit(data) {
        console.log("Formulario validado! Datos:", data)
    }

    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title={action === "create" ? "Nueva categoría" : "Editar categoría"}
            centered
        >
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Flex direction="column" gap="12px">
                    <TextInput
                        label="Nombre"
                        error={form.formState.errors.name?.message}
                        {...form.register("name")}
                    />

                    <IconPicker form={form} />

                    <Flex justify="end" mt="8px">
                        <Button type="submit" variant="filled">
                            {action === "create" ? "Crear" : "Guardar"}
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Modal>
    );
}

function IconPicker({ form }) {
    return (
        <Controller
            control={form.control}
            name="iconName"
            render={({ field, fieldState }) => (
                <Radio.Group
                    label="Icono"
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                >
                    <SimpleGrid minColWidth="48px" spacing="xs">
                        {ICON_NAMES.map((iconName) => {
                            const isSelected = iconName === field.value;

                            return (
                                <Radio.Card
                                    key={iconName}
                                    value={iconName}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "48px",
                                        width: "48px",
                                        border: isSelected
                                            ? "1px solid #228be6"
                                            : "1px solid #ddd",
                                    }}
                                >
                                    <TablerIcon
                                        name={iconName}
                                        size={22}
                                        color={isSelected ? "#228be6" : "#333"}
                                    />
                                </Radio.Card>
                            );
                        })}
                    </SimpleGrid>
                </Radio.Group>
            )}
        />
    );
}

