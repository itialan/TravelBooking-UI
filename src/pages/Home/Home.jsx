import React from 'react';

import Header from '../../components/Home/Header/Header';
import Hero from '../../components/Home/Hero/Hero';
import Destination from '../../components/Home/Destination/Destination';
import Place from '../../components/Home/Place/Place';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Destination />
      <Place />
    </div>
  );
};

export default Home;
