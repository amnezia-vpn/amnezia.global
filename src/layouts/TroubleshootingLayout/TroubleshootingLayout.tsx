import TextLink from '@src/shared/ui/TextLink/TextLink';
import SidebarNav from '@src/components/SidebarNav/SidebarNav';
import SideBarLink from '@src/components/SidebarNav/ui/SideBarLink/SideBarLink';
import { Breadcrumbs } from '@mantine/core';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import DocsArticleMd from '@src/components/DocsArticleMd/DocsArticleMd';
import styles from './TroubleshootingLayout.module.scss';

const TroubleshootingLayout = () => {
  usePageDecoration('dark');
  const [tableOfContents, setTableOfContents] = useState<any[]>([]);
  const { i18n, t } = useTranslation();
  const { articleId } = useParams();

  useEffect(() => {
    const gitLink = `https://raw.githubusercontent.com/amnezia-vpn/amnezia.org-content/master/docs/${i18n.resolvedLanguage}/troubleshooting/tableOfContents.json`;

    const fetchData = async () => {
      const res = await fetch(gitLink);

      if (res.status === 200) {
        const data = await res.json();
        setTableOfContents(data);
      }
    };

    fetchData();
  }, [i18n.resolvedLanguage]);

  const items = [
    { title: t('navigation.support'), href: '../support' },
    { title: t('troubleshootingPage.header.text'), href: '../troubleshooting' },
  ].map((item, index) => <TextLink text={item.title} to={item.href} key={index} variant="light" />);

  return (
    <div className={styles.pageLayout}>
      <div className={styles.navCol}>
        <SidebarNav>
          {tableOfContents.map((el, i) => (
            <SideBarLink key={i} text={el.title} to={el.href} submenu={el.submenu} />
          ))}
        </SidebarNav>
      </div>
      <div className={styles.contentCol}>
        <Breadcrumbs separator={<ChevronRight size={18} strokeWidth={3} color="#494B50" />} mt="xs">
          {items}
        </Breadcrumbs>
        <div className={styles.instructionContent}>
          <DocsArticleMd
            docUrl={`https://raw.githubusercontent.com/amnezia-vpn/amnezia.org-content/master/docs/${i18n.resolvedLanguage}/troubleshooting/${articleId}/${articleId}.md`}
          />
        </div>
        <div className={styles.contactsCardWrapper}>
          <ContactsCard />
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingLayout;
