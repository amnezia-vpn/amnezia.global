export default function getFallbackLangForRuEnOnlyContent(lang: string | undefined) {
  // return only Ru and EN
  // other Locales will fallback to EN
  if (lang === 'en' || lang === 'ru') return lang;
  return 'en';
}
