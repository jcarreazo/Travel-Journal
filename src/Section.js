import React from 'react';

export default function Section(props) {
  return (
    <div>
      <div>
        <img src={props.Image} alt={props.Alt} />
        <div className="SectionContent">
          
        </div>
      </div>
    </div>
  );
}
