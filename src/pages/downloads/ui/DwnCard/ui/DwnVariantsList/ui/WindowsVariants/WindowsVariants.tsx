import { useEffect, useState } from 'react';
import DwnVariantsDropdown from '@src/pages/downloads/ui/DwnCard/ui/DwnVariantsList/ui/DwnVariantsDropdown/DwnVariantsDropdown';
import PrimaryLinkButton from '@src/components/PrimaryLinkButton/PrimaryLinkButton';
import { useTranslation } from 'react-i18next';
import downloadLinks from '@src/shared/config/downloadLinks';
import styles from './WindowsVariants.module.scss';

const WindowsVariants = () => {
  const { t, i18n } = useTranslation(['translation', 'downloads-page']);
  const [selectedValue, setSelectedValue] = useState({
    value: downloadLinks.win64,
    label: t('dwnCard.forWin64', { ns: 'downloads-page' }),
  });

  useEffect(() => {
    setSelectedValue({
      value: downloadLinks.win64,
      label: t('dwnCard.forWin64', { ns: 'downloads-page' }),
    });
  }, [i18n.resolvedLanguage]);

  const values = [
    {
      value: downloadLinks.win64,
      label: t('dwnCard.forWin64', { ns: 'downloads-page' }),
    },
    {
      value: downloadLinks.win32,
      label: t('dwnCard.forWin32', { ns: 'downloads-page' }),
    },
  ];

  return (
    <div className={styles.root}>
      <DwnVariantsDropdown
        values={values}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <PrimaryLinkButton text={t('download')} link={selectedValue.value} />
    </div>
  );
};

export default WindowsVariants;
