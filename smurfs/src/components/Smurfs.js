import React from 'react';
import styled from 'styled-components';
import Smurf from './Smurf';

const Wrapper = styled.div`
  width: 800px;
  margin: auto;
  img {
    width: 800px;
  }
  h1 {
    text-align: center;
    margin: 2% 0%;
    font-size: 3rem;
    color: #292b2d;
  }
  section {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Smurfs = props => {
  return (
    <Wrapper>
      <h1>Smurf Village</h1>
      <img
        src={'https://www.smurf.com/images/homepage/mainhouses-slider/bg.png'}
        alt=''
      />
      <section>
        {props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
            />
          );
        })}
      </section>
    </Wrapper>
  );
};

export default Smurfs;
