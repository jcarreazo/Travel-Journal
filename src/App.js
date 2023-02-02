import React from 'react';
import './style.css';
import Section from './Section.js';
var arrayTest = [1, 5, 6];
const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];

const render = arrayTest.map(function (item) {
  return <Section value={item} />;
});

export default function App() {
  return (
    <div>
      <div></div>
    </div>
  );
}
