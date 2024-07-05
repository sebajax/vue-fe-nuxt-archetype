// [Imports]
// - Modules
import { useTheme } from 'vuetify';

// Colors theme definition
export const useColors = () => {
  // Vuetify composable theme
  const theme = useTheme();

  // Computed colors reactive to theme changes
  // Primary color
  const primary = computed(() => {
    return theme.global.current.value.colors.primary;
  });
  // Secondary color
  const secondary = computed(() => {
    return theme.global.current.value.colors.secondary;
  });
  // Dark text color
  const darkText = computed(() => {
    return theme.global.current.value.colors['dark-text'];
  });
  // Light gray color
  const lightGray = computed(() => {
    return theme.global.current.value.colors['light-gray'];
  });

  return {
    primary,
    secondary,
    darkText,
    lightGray,
  };
};
