import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ index, score, changeScore }) => {

    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
      </div>
    );
  }

//Validate inputs
Counter.propTypes = {
  index: PropTypes.number, //checks if it's a number
  score: PropTypes.number,
  changeScore: PropTypes.func  //checks if it's a function
};
export default Counter;