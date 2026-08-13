import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Button } from '@mantine/core';

export default function App() {
  return <MantineProvider>
    <Button variant="filled" size="md" radius="lg">
      Button
    </Button>
  </MantineProvider>;
}