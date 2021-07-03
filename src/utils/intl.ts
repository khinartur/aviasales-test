type TPluralMapKey = 'one' | 'few' | 'many' | 'other';

export type TPluralMap = Record<TPluralMapKey, string>;

type TLanguage = 'ru';

const ruPluralRules = new Intl.PluralRules('ru-RU');

export function pluralize(
  number: number,
  pluralMap: TPluralMap,
  language: TLanguage = 'ru',
): string {
  if (language === 'ru') {
    return pluralMap[ruPluralRules.select(number) as TPluralMapKey];
  }
  return '';
}
