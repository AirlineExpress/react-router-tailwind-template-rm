import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams();
  const menuItems = [
    { id: 1, name: '寿司', description: 'Delicious sushi', details: 'A good mix of seafood, rice, and crunch!' },
    { id: 2, name: 'ラーメン', description: 'Tasty ramen', details: 'A delicious flavorfull bowl of Ramen!' },
    { id: 3, name: '酒', description: 'Smooth Sake', details: 'This is dangerously smooth Sake!' },
    { id: 4, name: '水', description: 'Fine water', details: 'The best there was, and the best there ever will be!'},
    { id: 5, name: '桐生一馬', description: 'Dragon Of Dojima', details: 'Kiryu Kazuma, known for fighting ability, and the Ex Fourth Chairman of the Tojo Clan.'},
    { id: 6, name: '真島吾朗', description: 'Mad Dog Of Shimano', details: 'Majima Goro, known for a mad crazy style, former lieutenant of the Shimano Family, Patriarch of the Majima Family.'},
  ];

  const item = menuItems.find(item => item.id === parseInt(id));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
      <p>{item.details}</p>
    </div>
  );
};

export default ItemDetail;
