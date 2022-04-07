const initialValue = 16;

export const pxToRem = (valueInPx: number): string => {
  return `${valueInPx / initialValue}rem`;
};
