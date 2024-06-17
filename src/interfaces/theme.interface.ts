// Enum Theme Types
enum EnumTheme {
  LIGHT = 'light',
  DARK = 'dark',
}
enum EnumThemeTranslation {
  LIGHT = 'Claro',
  DARK = 'Oscuro',
}

// Type Theme Types
type TypeTheme = 'light' | 'dark';
type TypeThemeTranslationKeys = keyof typeof EnumThemeTranslation;

export { EnumTheme, EnumThemeTranslation };
export type { TypeTheme, TypeThemeTranslationKeys };
