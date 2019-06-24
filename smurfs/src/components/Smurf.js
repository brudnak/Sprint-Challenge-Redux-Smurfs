import React from 'react';
import styled from 'styled-components';

const SmurfCard = styled.div`
  display: flex;
  background-color: #62cdfd;
  color: #f2f7ff;
  margin: 20px;
  width: 300px;
  padding: 14px;
  border-radius: 10px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
  h3 {
    font-size: 1.6rem;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    margin-top: 6%;
  }
`;

const MainContent = styled.div`
  width: 70%;
`;

const Smurf = props => {
  return (
    <SmurfCard>
      <MainContent>
        <h3>{props.name}</h3>
        <p>{props.height} tall</p>
        <p>{props.age} smurf years old</p>
      </MainContent>
    </SmurfCard>
  );
};

export default Smurf;
