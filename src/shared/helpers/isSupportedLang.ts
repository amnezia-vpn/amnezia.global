import localesList from '@src/shared/config/i18n/localesList';

export default function isSupportedLang(lang: string) {
  let result = false;
  localesList.forEach((el) => {
    if (el.code === lang) result = true;
  });
  return result;
}
