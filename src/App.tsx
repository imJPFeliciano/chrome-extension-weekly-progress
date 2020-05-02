import React from 'react';
import './App.css';
import Card from './components/card';
import './assets/main.scss';

function App() {
  const tags = [
    { name: 'lorem' },
    { name: 'ipsum' },
    { name: 'XD' },
  ];

  return (
    <Card
      title="Dolor eu deserunt commodo pariatur excepteur sit ipsum fugiat."
      description="Ut qui laboris quis aliqua amet incididunt esse sint sit occaecat. Amet in elit aliquip dolore aliquip cillum dolore voluptate ex dolore. Id anim labore deserunt non et. Deserunt cupidatat dolor aute cupidatat reprehenderit. Ipsum labore id aute ipsum aute culpa sunt amet exercitation esse nostrud aute sit minim. Nulla nisi nisi cupidatat esse laboris."
      tags={tags}
    />
  );
}

export default App;
