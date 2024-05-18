import { Theme } from '~/enums';

const isDark = usePreferredDark();
const theme = computed(() => (isDark.value ? Theme.DARK : Theme.LIGHT));

export const useTheme = () =>
  useCookie('theme', { default: () => theme.value, sameSite: 'strict', watch: 'shallow' });
