import { Tabs } from '@mantine/core';
import { useEffect, useState } from 'react';
import WindowsVariants from '@src/pages/downloads/ui/DwnCard/ui/DwnVariantsList/ui/WindowsVariants/WindowsVariants';
import { useOs } from '@mantine/hooks';
import DownloadBadge from '@src/components/DownloadBadge/DownloadBadge';
import PrimaryLinkButton from '@src/components/PrimaryLinkButton/PrimaryLinkButton';
import { useTranslation } from 'react-i18next';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import downloadLinks from '@src/shared/config/downloadLinks';
import styles from './DwnVariantsList.module.scss';
import { ReactComponent as WindowsLogo } from './assets/windows.svg';
import { ReactComponent as MacLogo } from './assets/mac-os.svg';
import { ReactComponent as IOSLogo } from './assets/ios.svg';
import { ReactComponent as AndroidLogo } from './assets/android.svg';
import { ReactComponent as LinuxLogo } from './assets/linux.svg';
// import { ReactComponent as RouterLogo } from './assets/router.svg';
import { ReactComponent as GithubLogo } from './assets/github.svg';

const DwnVariantsList = () => {
  const { t } = useTranslation(['translation', 'downloads-page']);
  const os = useOs();

  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const osSwitcher = () => {
      switch (os) {
        case 'windows':
          return 'win';
        case 'linux':
          return 'linux';
        case 'macos':
          return 'mac';
        case 'android':
          return 'android';
        case 'ios':
          return 'ios';
        default:
          return 'win';
      }
    };

    setActiveTab(osSwitcher());
  }, [os]);

  return (
    <div className={styles.root}>
      <Tabs
        unstyled
        value={activeTab}
        onTabChange={setActiveTab}
        classNames={{
          root: styles.root,
          tabsList: styles.tabsList,
          tab: styles.tab,
          panel: styles.panel,
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="win" icon={<WindowsLogo />}>
            Windows
          </Tabs.Tab>
          <Tabs.Tab value="mac" icon={<MacLogo />}>
            MacOS
          </Tabs.Tab>
          <Tabs.Tab value="ios" icon={<IOSLogo />}>
            iOS
          </Tabs.Tab>
          <Tabs.Tab value="android" icon={<AndroidLogo />}>
            Android
          </Tabs.Tab>
          <Tabs.Tab value="linux" icon={<LinuxLogo />}>
            Linux
          </Tabs.Tab>
          {/* <Tabs.Tab value="router" icon={<RouterLogo />}> */}
          {/*  Router */}
          {/* </Tabs.Tab> */}
          <Tabs.Tab value="github" icon={<GithubLogo />}>
            Source code
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="win">
          <div className={styles.downloadBtnContainer}>
            <PrimaryLinkButton text={t('download')} link={downloadLinks.win64} />
            {/*<WindowsVariants />*/}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="mac">
          <div className={styles.downloadBtnContainer}>
            <PrimaryLinkButton text={t('download')} link={downloadLinks.mac} />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="ios">
          <div className={styles.downloadBtnContainer}>
            <DownloadBadge variant="appStore" />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="android">
          <div className={styles.downloadBtnContainer}>
            <DownloadBadge variant="googlePlay" />
            <TextLink
              variant="light"
              openInNewTab
              text={t('dwnCard.downloadFromSite', { ns: 'downloads-page' })}
              to={downloadLinks.android}
              className={styles.link}
            />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="linux">
          <div className={styles.downloadBtnContainer}>
            <PrimaryLinkButton text={t('download')} link={downloadLinks.linux} />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="github">
          <div className={styles.downloadBtnContainer}>
            <PrimaryLinkButton
              text={t('dwnCard.downloadFromGithub', { ns: 'downloads-page' })}
              link={downloadLinks.githubLatest}
              openInNewTab
            />
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default DwnVariantsList;
