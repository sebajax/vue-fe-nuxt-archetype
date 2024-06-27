// [Imports]
// - Interface
import {
  EnumThemeTranslation,
  type TypeThemeTranslationKeys,
} from '~/interfaces/theme.interface';

// Get translation keys
const getThemeTranslation = (key: string): string => {
  return EnumThemeTranslation[key.toUpperCase() as TypeThemeTranslationKeys];
};

export { getThemeTranslation };
