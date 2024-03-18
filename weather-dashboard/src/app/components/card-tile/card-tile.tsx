import React, { ReactElement } from 'react';
import { CardContainer, CardTitle, CardSubTitle } from './card-tile.styled';

type CardTileProps = {
  children?: ReactElement | ReactElement[];
  title?: string;
  subTitle?: string;
}
const CardTile = ({children, title, subTitle}: CardTileProps) => {
  return (
    <CardContainer>
      {title && (<CardTitle>{title}</CardTitle>)}
      {subTitle && (<CardSubTitle>{subTitle}</CardSubTitle>)}
      {children}
    </CardContainer>
  );
}

export default CardTile;
