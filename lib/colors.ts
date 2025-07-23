/**
 * AFC La Cisterna Brand Colors
 * Comprehensive color system for consistent theming across the application
 */

export const brandColors = {
  // Primary brand colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main brand blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  
  // Secondary brand colors
  secondary: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15', // Main brand yellow
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },
  
  // Accent colors
  accent: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e', // Success green
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  
  // Semantic colors
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444', // Error red
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b', // Warning orange
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  
  info: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9', // Info cyan
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
} as const;

/**
 * Color utility functions
 */
export const colorUtils = {
  /**
   * Get a color value by path (e.g., 'primary.500')
   */
  getColor: (path: string): string => {
    const keys = path.split('.');
    let value: any = brandColors;
    
    for (const key of keys) {
      value = value[key];
      if (!value) return '';
    }
    
    return value;
  },
  
  /**
   * Get all shades of a color family
   */
  getColorFamily: (family: keyof typeof brandColors) => {
    return brandColors[family];
  },
  
  /**
   * Generate CSS custom properties for a color family
   */
  generateCSSProperties: (family: keyof typeof brandColors, prefix: string = '') => {
    const colors = brandColors[family];
    const properties: Record<string, string> = {};
    
    Object.entries(colors).forEach(([shade, value]) => {
      const propertyName = prefix ? `--${prefix}-${family}-${shade}` : `--${family}-${shade}`;
      properties[propertyName] = value;
    });
    
    return properties;
  },
};

/**
 * Tailwind class name generators
 */
export const colorClasses = {
  /**
   * Generate text color classes
   */
  text: (color: string, shade: string | number = 500) => `text-brand-${color}-${shade}`,
  
  /**
   * Generate background color classes
   */
  bg: (color: string, shade: string | number = 500) => `bg-brand-${color}-${shade}`,
  
  /**
   * Generate border color classes
   */
  border: (color: string, shade: string | number = 500) => `border-brand-${color}-${shade}`,
  
  /**
   * Generate ring color classes
   */
  ring: (color: string, shade: string | number = 500) => `ring-brand-${color}-${shade}`,
  
  /**
   * Generate hover text color classes
   */
  hoverText: (color: string, shade: string | number = 500) => `hover:text-brand-${color}-${shade}`,
  
  /**
   * Generate hover background color classes
   */
  hoverBg: (color: string, shade: string | number = 500) => `hover:bg-brand-${color}-${shade}`,
};

/**
 * Pre-defined color combinations for common use cases
 */
export const colorCombinations = {
  // Primary button
  primaryButton: {
    base: 'bg-brand-primary-600 text-white',
    hover: 'hover:bg-brand-primary-700',
    focus: 'focus:ring-brand-primary-500',
    disabled: 'disabled:bg-brand-primary-300',
  },
  
  // Secondary button
  secondaryButton: {
    base: 'bg-brand-secondary-500 text-black',
    hover: 'hover:bg-brand-secondary-600',
    focus: 'focus:ring-brand-secondary-400',
    disabled: 'disabled:bg-brand-secondary-300',
  },
  
  // Success states
  success: {
    text: 'text-brand-accent-600 dark:text-brand-accent-400',
    bg: 'bg-brand-accent-50 dark:bg-brand-accent-900/20',
    border: 'border-brand-accent-200 dark:border-brand-accent-800',
  },
  
  // Error states
  error: {
    text: 'text-brand-danger-600 dark:text-brand-danger-400',
    bg: 'bg-brand-danger-50 dark:bg-brand-danger-900/20',
    border: 'border-brand-danger-200 dark:border-brand-danger-800',
  },
  
  // Warning states
  warning: {
    text: 'text-brand-warning-600 dark:text-brand-warning-400',
    bg: 'bg-brand-warning-50 dark:bg-brand-warning-900/20',
    border: 'border-brand-warning-200 dark:border-brand-warning-800',
  },
  
  // Info states
  info: {
    text: 'text-brand-info-600 dark:text-brand-info-400',
    bg: 'bg-brand-info-50 dark:bg-brand-info-900/20',
    border: 'border-brand-info-200 dark:border-brand-info-800',
  },
};

/**
 * Export default color palette for easy access
 */
export default brandColors;