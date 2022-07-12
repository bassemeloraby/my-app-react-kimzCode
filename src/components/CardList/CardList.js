import React from 'react';
import Card from '../Card/Card';

const CardList = ({ namesList, deletefunc }) => {
  const cards = namesList.map(({ id,...otherProps }) => (
    <Card key={id} {...otherProps} id={id} deletefunc={deletefunc}/>
  ));
  return <div>{cards}</div>;
};

export default CardList;
