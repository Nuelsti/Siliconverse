// eslint-disable-next-line no-unused-vars
import React from 'react';
// import Card from '..card/Card.jx';
import Card from '../card/card';
import Image from '../img/Ellipse 6.svg';

function Magazine() {
  return (
    <div className="magazine__main">
      <Card image={Image} title="Siliconverse Magazine" description="Get First hand tech news and stay up to date with siliconverse magazine" link="/magazine" />
      <Card image={Image} title="Siliconverse Magazine" description="Get First hand tech news and stay up to date with siliconverse magazine" link="/magazine" />
      <Card image={Image} title="Siliconverse Magazine" description="Get First hand tech news and stay up to date with siliconverse magazine" link="/magazine" />
    </div>
  );
}

export default Magazine;