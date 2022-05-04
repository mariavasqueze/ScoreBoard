import React, { PureComponent } from 'react'; //use PureComponent to avoid unecessary re-rendering
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {  
  
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired, //gives an alert is there's no name
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  }
  
  render () {
    const {
      name,
      id,
      score,
      index,
      changeScore,
      removePlayer,
      isHighScore
    } = this.props;

    return (
        <div className="player">
          <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
            <Icon isHighScore={isHighScore} />
            { name }
          </span>
    
          <Counter 
              score={score} 
              index={index}
              changeScore={changeScore}
          />
        </div>
      );
  };
}

export default Player;