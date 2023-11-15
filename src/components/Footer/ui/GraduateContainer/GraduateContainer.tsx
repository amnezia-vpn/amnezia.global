import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import getFallbackLangForRuEnOnlyContent from '@src/shared/helpers/getFallbackLangForRuEnOnlyContent';
import styles from './GraduateContainer.module.scss';

const GraduateContainer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classNames(styles.root)}>
      <a target="_blank" href="https://privacyaccelerator.org/" rel="noreferrer">
        <img src={`/img/${getFallbackLangForRuEnOnlyContent(i18n.language)}/graduate.png`} alt="" />
      </a>
    </div>
  );
};

export default GraduateContainer;
