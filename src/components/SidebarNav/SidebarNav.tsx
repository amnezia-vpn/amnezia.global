import { ReactNode } from 'react';
import { ScrollArea } from '@mantine/core';
import styles from './SidebarNav.module.scss';

interface SidebarNavProps {
  children: ReactNode;
}

const SidebarNav = ({ children }: SidebarNavProps) => {
  return (
    <div className={styles.root}>
      <ScrollArea.Autosize
        type="always"
        // mah="calc(100vh - 70px)"
        h="100vh"
        scrollbarSize={14}
        offsetScrollbars
        styles={(theme) => ({
          scrollbar: {
            '&, &:hover': {
              '.mantine-ScrollArea-thumb': {
                backgroundColor: '#2C2D30',
              },
              background: 'transparent',
            },
            '&[data-orientation="horizontal"]': {
              display: 'none',
            },
          },

          corner: {
            background: 'transparent',
          },
        })}
      >
        <div className={styles.linksContainer}>{children}</div>
      </ScrollArea.Autosize>
    </div>
  );
};

export default SidebarNav;
