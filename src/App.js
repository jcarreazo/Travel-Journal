import React from 'react';
import './style.css';
import Section from './Section.js';
import Header from './Header.js';
import Data from './Data.js';
var i = 0;
const render = Data().map(function (item) {
  i++;
  console.log(i === Data().length);
  if (i === Data().length) {
    return <Section item={item} Line={0} />;
  } else return <Section item={item} Line={1} />;
});
export default function App() {
  return (
    <div>
      <Header />
      <div>{render}</div>
    </div>
  );
}
