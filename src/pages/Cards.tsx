import React from 'react';
import { Button } from '../components/global/Button';
import Card from '../components/global/Card';
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
        {iterator.map((item, index) => <Card itemNumber={item} key={index} />)}
      </div>
      <div>
        <Button>Animate Cards</Button>
      </div>
    </>
  )
}

export default Cards;