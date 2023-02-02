import React from 'react';
import './style.css';
import Section from './Section.js';
import Header from './Header.js';
import Data from './Data.js';

const render = Data().map(function (item) {
  return <Section item={item} />;
});

export default function App() {
  return (
    <div>
      <div>{render}</div>
    </div>
  );
}
