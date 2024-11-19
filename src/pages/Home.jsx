import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const menuItems = [
    { id: 1, name: '寿司', description: 'Delicious sushi' },
    { id: 2, name: 'ラーメン', description: 'Tasty ramen' },
    { id: 3, name: '酒', description: 'Smooth Sake' },
    { id: 4, name: '水', description: 'Fine water'},
    { id: 5, name: '桐生一馬', description: 'Dragon Of Dojima'},
    { id: 6, name: '真島吾朗', description: 'Mad Dog Of Shimano'},
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">メニュー</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {menuItems.map(item => (
          <Link to={`/item/${item.id}`} key={item.id} className="bg-gray-200 p-4 rounded-lg hover:bg-gray-300 transition">
            <div className="text-center">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
