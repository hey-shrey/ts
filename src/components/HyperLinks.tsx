import React from 'react';

export interface IHyperLink {
  link?: string;
  newTab?: boolean;
  children: React.ReactChild;
}

const HyperLink = ({ link, newTab = true, children }: IHyperLink) => {
  return (
    <a href={link} target={newTab ? `_blank` : ''}>
      {children}
    </a>
  );
};

export default HyperLink;
