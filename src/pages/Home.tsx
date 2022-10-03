import React from 'react';
import { Page, PageProps } from '../components/global/Page';


interface HomeProps extends PageProps {
  className?: string;
}
const Home: React.FC<HomeProps> = ({}: HomeProps) => {
  return (
    <>
      <div>React child</div>
      <div>antoher child</div>
    </>
  )
}

export default Home;