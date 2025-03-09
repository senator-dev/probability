import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import AppShellLayout from './components/AppShellLayout/AppShellLayout';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShellLayout>
        <Router />
      </AppShellLayout>
    </MantineProvider>
  );
}
