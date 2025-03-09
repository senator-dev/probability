
import { AppShell, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './AppShellLayout.module.css'
import { Icon } from "@iconify/react";
import { AppShellLayoutProps } from '../Interfaces'

const AppShellLayout: React.FC<AppShellLayoutProps> = ({ children }) => {

  const [navbarOpen, { toggle }] = useDisclosure(false);

  return (
      <AppShell
        header={{ height: 50 }}
        aside={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !navbarOpen, desktop: !navbarOpen } }}
        padding="md"
        >
        <AppShell.Header className={ classes.header }>
            <Group>
                <UnstyledButton className={ classes.fixedContainer }>
                  <Icon icon={ "simple-icons:pythonanywhere" } width={ 25 } height={ 25 }/>
                </UnstyledButton>
            </Group>
            <Group>
                <UnstyledButton className={ classes.fixedContainer } onClick={ toggle }>
                  <Icon 
                    icon={ 'mdi:chevron-left'} 
                    height={ 25 } 
                    width={ 25 } 
                    style={{ transform: navbarOpen ? "rotate(180deg)" : "rotate(0)", transition: "all 0.1s linear"  }} 
                  />
                </UnstyledButton>
            </Group>
        </AppShell.Header>
          <AppShell.Main className={ classes.main }>
            { children }
          </AppShell.Main>
          <AppShell.Aside>
            test
          </AppShell.Aside>
    </AppShell>
      
  );
}

export default AppShellLayout;