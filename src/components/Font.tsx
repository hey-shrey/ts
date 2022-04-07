export enum eFontWeight {
  bold = 'bold',
  medium = 'medium',
  regular = 'regular',
}

export type tFontWeight = {
  [key in eFontWeight]: number;
};

export const fontWeight: tFontWeight = {
  [eFontWeight.bold]: 800,
  [eFontWeight.medium]: 600,
  [eFontWeight.regular]: 400,
};

export enum eFontSize {
  xxl = 'xxl',
  xl = 'xl',
  l = 'l',
  m = 'm',
  s = 's',
  xs = 'xs',
  xxs = 'xxs',
}

export type tFontSize = {
  [key in eFontSize]: number;
};

export const fontSize: tFontSize = {
  [eFontSize.xxl]: 24,
  [eFontSize.xl]: 20,
  [eFontSize.l]: 18,
  [eFontSize.m]: 16,
  [eFontSize.s]: 14,
  [eFontSize.xs]: 12,
  [eFontSize.xxs]: 10,
};
