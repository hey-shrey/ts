import React from 'react';
import styled from 'styled-components';
import { pxToRem, arrayToPx } from '../utils';
import { eFontWeight } from './Font';

export interface IStyledInterface extends React.HTMLAttributes<HTMLElement> {
  size: number;
  padding?: number[];
  weight?: eFontWeight | number;
}

const StyledText = styled.p`
  padding: ${(props: IStyledInterface) => `${arrayToPx(props.padding)}`};
  font-size: ${(props: IStyledInterface) => `${pxToRem(props.size)}`};
  font-weight: ${(props: IStyledInterface) => `${props.weight}`};
`;

export interface IText {
  children?: string;
  size?: number;
  padding?: number[];
  weight?: eFontWeight | number;
}

const Text = (props: IText) => {
  const { children, size = 16, weight, ...otherProps } = props;
  return (
    <StyledText size={size} weight={weight} {...otherProps}>
      {children}
    </StyledText>
  );
};

export default Text;
