import { NavLink } from 'react-router-dom';
import styles from './DrawerNavLink.module.scss';

interface PT {
  text: string;
  to: string;
}

function DrawerNavLink({ to, text }: PT) {
  return (
    <NavLink
      to={to}
      className={styles.navLink}
      style={({ isActive, isPending }) => {
        return {
          backgroundColor: isActive ? 'rgba(255, 255, 255, 0.12)' : '',
        };
      }}
    >
      {text}
    </NavLink>
  );
}

export default DrawerNavLink;
