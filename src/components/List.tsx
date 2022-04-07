import React from 'react';
import styled from 'styled-components';
import { eFontWeight } from './Font';
import HyperLink from './HyperLinks';
import Text from './Text';

export interface IList {
  title: string;
  subtitle: string;
  listLink?: string;
}

const ListWrapper = styled.li`
  display: flex;
`;

const List = ({ title, subtitle, listLink }: IList) => {
  return (
    <ListWrapper>
      <HyperLink link={listLink} newTab={true}>
        <>
          <div>{title}</div>
          <Text size={32} padding={[12, 0]} weight={eFontWeight.bold}>
            {subtitle}
          </Text>
        </>
      </HyperLink>
    </ListWrapper>
  );
};

export default List;
