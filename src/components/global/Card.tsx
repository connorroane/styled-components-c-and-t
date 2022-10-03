import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Text } from './Text';

interface CardProps {
  className?: string;
  itemNumber: number;
}

const Card: React.FC<CardProps> = ({ className, itemNumber }: CardProps) => {
  return (
    <div className={className} >
      <div className='card-title' >
        <Text fontSize='large' color='navy'> this is a card </Text>
      </div>
      <CardContent>
        this is item number {itemNumber}
      </CardContent>
    </div>
  )
}


const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 8rem;
`
const StyledCard = styled(Card)<{ itemNumber: number; animate: boolean}>`
  width: 10rem;
  border: 0.125rem solid ${({ theme }) => theme.colors.navy};
  margin: 0.25rem;
  border-radius: 0.5rem;
  .card-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover ${CardContent} {
    background: rgba(0, 0, 0, 0.4);
  }
  transition: transform ${({ itemNumber }) => Math.sqrt(itemNumber)}s ease-in;
  /* &.animate {
    transform: translateX(6rem);
  } */
  ${({ itemNumber, animate }) => (
    animate ? `
      transform: translateX(6rem);
    ` : `
      
    `
  )}
`
export default StyledCard;