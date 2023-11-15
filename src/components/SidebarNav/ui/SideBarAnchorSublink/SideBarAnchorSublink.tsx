import { NavLink } from 'react-router-dom';
import classes from './SideBarAnchorSublink.module.scss';

interface PT {
  text: string;
  to: string;
}

function SideBarAnchorSublink({ to, text }: PT) {
  return (
    <div className={classes.root}>
      <a href={to}>{text}</a>
    </div>
  );
}

export default SideBarAnchorSublink;
