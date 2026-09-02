import { useState } from 'react';
import { Modal, Button, TextInput, Flex, SimpleGrid, Radio } from '@mantine/core';
import { TablerIcon } from '../TablerIcon';

const ICON_NAMES = [
    'IconCar', 'IconHome', 'IconShoppingCart', 'IconMeat', 'IconTools',
    'IconDeviceMobile', 'IconBriefcase', 'IconGift', 'IconPlane', 'IconHealthRecognition',
    'IconBolt', 'IconDroplet', 'IconBottle', 'IconPaw', 'IconDeviceGamepad',
    'IconCategory', 'IconTag', 'IconWallet', 'IconCreditCard', 'IconCoins',
];

export function CreateEditCategoryModal({ disclosure, action }) {
    return (
        <Modal
            opened={disclosure.isOpen}
            onClose={disclosure.close}
            title={action === "create" ? "Nueva categoría" : "Editar categoría"}
            centered
        >
            <form>
                <Flex direction="column" gap="12px">
                    <TextInput label="Nombre" />

                    <IconPicker />

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

function IconPicker() {
    const [selected, setSelected] = useState("IconCategory");

    return (
        <Radio.Group
            label="Icono"
            value={selected}
            onChange={setSelected}
        >
            <SimpleGrid minColWidth="48px" spacing="xs">
                {ICON_NAMES.map((iconName) => {
                    const isSelected = iconName === selected
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
                                border: isSelected ? "1px solid #228be6" : ""
                            }}
                        >
                            <TablerIcon
                                name={iconName}
                                size={22}
                                color={isSelected ? "#228be6" : "#333"}
                            />
                        </Radio.Card>
                    )
                })}
            </SimpleGrid>
        </Radio.Group>
    );
}
