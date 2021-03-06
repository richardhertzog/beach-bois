import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { times } from 'underscore';

const FoodContainer = styled.div`
width: 60px;
align-items: flex-end;
img {
  height: 15px;
  width: 15px;
}
.disabled {
  opacity: .3;
}
`;

const Food = ({ startingWeight, currentWeight, food = 'burger' }) => ( // eslint-disable-line
  <FoodContainer>
    {times((Math.floor(startingWeight - currentWeight) / 2), () => (<img src={`/food/${food}.svg`} alt="burger" key={Math.random()} className="disabled" />))}
    {times(Math.floor(currentWeight / 2), () => (<img src={`/food/${food}.svg`} alt="burger" key={Math.random()} />))}

  </FoodContainer>
);

Food.propTypes = {
  startingWeight: PropTypes.number.isRequired,
  currentWeight: PropTypes.number.isRequired,
  food: PropTypes.string.isRequired,
};

export default Food;
