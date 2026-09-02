import { icons } from '@tabler/icons-react';

export function TablerIcon({ name, ...props }) {
    const IconComponent = icons?.[name] || icons?.IconCategory;
    if (!IconComponent) return null;
    return <IconComponent {...props} />;
}
