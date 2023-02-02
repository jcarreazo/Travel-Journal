import React from 'react';

export default function Section(props) {
  return (
    <div>
      <div>
        <img src={props.item.Image} alt={props.item.Alt} />
        <div className="SectionContent">
          <div className="UpperWrapper">
            <i class="fa-solid fa-location-dot"></i>
            <p className="Country">{props.item.Country}</p>
            <a href="#" className="GoogleInfo">
              View on Google Maps
            </a>
          </div>
          <h2 className="Destination"></h2>
          <div className="LowerWrapper">
            <p className="Date">{props.item.Date}</p>
            <p className="Description">{props.item.Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
