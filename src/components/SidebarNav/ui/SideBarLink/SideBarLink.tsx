import { NavLink, useMatch } from 'react-router-dom';
import SideBarAnchorSublink from '@src/components/SidebarNav/ui/SideBarAnchorSublink/SideBarAnchorSublink';
import classes from './SideBarLink.module.scss';

interface PT {
  text: string;
  to: string;
  submenu?: any;
}

function SideBarLink({ to, text, submenu }: PT) {
  return (
    <>
      <div className={classes.root}>
        <NavLink
          to={to}
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? '#A85809' : '',
            };
          }}
        >
          {text}
        </NavLink>
      </div>
      {/*{submenu && match*/}
      {/*  ? submenu.map((el, i) => (*/}
      {/*      <SideBarAnchorSublink key={`${i}-sub`} text={el.title} to={el.href} />*/}
      {/*    ))*/}
      {/*  : undefined}*/}
    </>
  );
}

export default SideBarLink;
