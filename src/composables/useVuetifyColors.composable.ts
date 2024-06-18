// [Imports]
import { useTheme } from 'vuetify';

// Theme definition

// Colors
function useColors() {
  const theme = useTheme();

  // Computed colors reactive to theme changes
  // Primary color
  const primaryColor = computed(() => {
    return theme.global.current.value.colors.primary;
  });
  // Secondary color
  const secondaryColor = computed(() => {
    return theme.global.current.value.colors.secondary;
  });
  // Dark text color
  const darkTextColor = computed(() => {
    return theme.global.current.value.colors['dark-text'];
  });
  // Light gray color
  const lightGrayColor = computed(() => {
    return theme.global.current.value.colors['light-gray'];
  });
  return { primaryColor, secondaryColor, darkTextColor, lightGrayColor };
}

export { useColors };
