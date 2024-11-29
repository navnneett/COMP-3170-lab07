import React from 'react';
import '../src/App.css'

export default function Details({ country }) {
  return (
    <div className='cards-container'>
      <h1>{country.name.official}</h1>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <div className='country-info'>
        <p>
          <span><strong>Capital: </strong></span>
          <span>{country.capital}</span>
        </p>
        <p>
          <span><strong>Location in: </strong></span>
          <span className='borders'>{country.subregion}</span>
        </p>
      </div>
    </div>
  );
}
