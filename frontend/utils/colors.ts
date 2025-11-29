/**
 * Centralized color constants for UnitTCMS
 * Source of truth - synced with tailwind.config.js and globals.css
 */

export const FOLDER_COLORS = {
  primary: '#F7C24E',
} as const;

export const PRIORITY_COLORS = {
  critical: '#bb3e03',
  high: '#ca6702',
  medium: '#ee9b00',
  low: '#94d2bd',
} as const;

export const STATUS_COLORS = {
  untested: '#3ac6e1',
  passed: '#6ea56c',
  failed: '#f15f47',
  retest: '#fba91e',
  skipped: '#805aab',
} as const;

export const STATUS_ICON_COLORS = {
  untested: '#d4d4d8',
  passed: '#17c964',
  failed: '#f31260',
  retest: '#f5a524',
  skipped: '#52525b',
} as const;

export const CHART_CATEGORICAL_PALETTE = [
  '#fba91e', // 1
  '#6ea56c', // 2
  '#3ac6e1', // 3
  '#feda2f', // 4
  '#f15f47', // 5
  '#244470', // 6
  '#9c80bb', // 7
  '#f595a6', // 8
] as const;

export const FEATURE_COLORS = {
  highlight: '#52e280',
} as const;

export const AVATAR_GRADIENT_COLORS = [
  '#0A0310',
  '#49007E',
  '#FF005B',
  '#FF7D10',
  '#FFB238',
] as const;
