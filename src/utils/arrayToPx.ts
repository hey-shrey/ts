import { pxToRem } from './pxToRem';

export const arrayToPx = (values: number[] = [0, 0]): string => {
  return values.map((v) => `${pxToRem(v)}`).join(' ');
};
