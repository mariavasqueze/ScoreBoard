import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
    return (
      <header>
        <Stats 
          players={players}
        />
        <h1>{title}</h1>
        <Stopwatch />
      </header>
    );
  }

Header.protoTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object) //check if it's an array of objects
};

//Give default values:
Header.defaultProps = {
  title: 'Scoreboard'
  
}

export default Header;