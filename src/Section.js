import React from 'react';

export default function Section(props) {
  return (
    <div className="Content">
      <div className="SectionWrapper">
        <img src={props.item.Image} alt={props.item.Alt} />
        <div className="SectionContent">
          <div className="UpperWrapper">
            <i class="fa-solid fa-location-dot fa-sm"></i>
            <p className="Country">{props.item.Country}</p>
            <a href="#" className="GoogleInfo">
              View on Google Maps
            </a>
          </div>
          <h1 className="Destination">{props.item.Destination}</h1>
          <div className="LowerWrapper">
            <p className="Date">{props.item.Date}</p>
            <p className="Description">{props.item.Description}</p>
          </div>
        </div>
      </div>
     { props.Line===1 && <div class="line-1"></div>}
    </div>
  );
}
