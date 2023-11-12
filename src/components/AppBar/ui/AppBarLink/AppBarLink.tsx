import { NavLink } from 'react-router-dom';
import classes from './AppBarLink.module.scss';

interface PT {
  text: string;
  to: string;
}

function AppBarLink({ to, text }: PT) {
  return (
    <div className={classes.root}>
      <NavLink
        to={to}
        style={({ isActive, isPending }) => {
          return {
            backgroundColor: isActive ? 'rgba(255, 255, 255, 0.12' : '',
          };
        }}
      >
        {text}
      </NavLink>
    </div>
  );
}

export default AppBarLink;
