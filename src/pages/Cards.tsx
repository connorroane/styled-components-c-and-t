import React from 'react';
import {Page, PageProps } from '../components/global/Page';

interface CardsProps extends PageProps {
  className?: string;
}

const Cards: React.FC<CardsProps> = ({}: CardsProps) => {
  const iterator = [1, 2, 3, 4, 5];

  return (
    <>
      <div>
        this is the cards page
      </div>
      <div>
        {iterator.map((_, index) => <div key={index} >{_}</div>)}
      </div>
    </>
  )
}

export default Cards;