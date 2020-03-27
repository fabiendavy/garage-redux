import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{backgroundImage: "url('https://raw.githubusercontent.com/lewagon/garage-redux/master/assets/images/mechanic.jpg')"}}></div>
      <img className="logo" src="https://raw.githubusercontent.com/lewagon/garage-redux/master/assets/images/mechanic.jpg" alt="logo" />
      <h1>{props.garage}</h1>
      <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).</p>
      {props.children}
    </div>
  );
}

export default Aside;
