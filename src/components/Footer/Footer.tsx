import Divider from '@src/shared/ui/Divider/Divider';
import ContactsContainer from '@src/components/Footer/ui/ContactsContainer/ContactsContainer';
import BadgesContainer from '@src/components/Footer/ui/BadgesContainer/BadgesContainer';
import { useMediaQuery } from '@mantine/hooks';
import GraduateContainer from '@src/components/Footer/ui/GraduateContainer/GraduateContainer';
import styles from './Footer.module.scss';
import LogoContainer from './ui/LogoContainer/LogoContainer';

export default function Footer() {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439.98px)');
  const isMobile = useMediaQuery('(max-width: 679.98px)');

  const mobileLayout = () => (
    <>
      <Divider />
      <section className={styles.logoSection}>
        <LogoContainer />
      </section>
      <Divider />
      <section className={styles.badgesSection}>
        <BadgesContainer />
      </section>
      <section className={styles.contactsSection}>
        <ContactsContainer />
      </section>
      <Divider />
      <section className={styles.bottomSection}>
        <GraduateContainer />
      </section>
    </>
  );

  const tabletLayout = () => (
    <>
      <Divider />
      <section className={styles.mainSection}>
        <LogoContainer />
        <BadgesContainer />
      </section>
      <Divider />
      <section className={styles.bottomSection}>
        <ContactsContainer />
        <GraduateContainer />
      </section>
    </>
  );

  const desktopLayout = () => (
    <>
      <Divider />
      <section className={styles.mainSection}>
        <div className={styles.mainSectionInner}>
          <LogoContainer />
          <BadgesContainer />
          <ContactsContainer />
        </div>
        <GraduateContainer />
      </section>
      <Divider />
    </>
  );

  const layoutSwitcher = () => {
    if (isMobile) return mobileLayout();
    if (isTablet) return tabletLayout();
    if (isDesktop) return desktopLayout();
    return mobileLayout();
  };

  return <div className={styles.footer}>{layoutSwitcher()}</div>;
}
