import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 800px;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    input {
      margin-top: 20px;
      font-size: 1.6rem;
      width: 50%;
      padding: 4px;
    }
    input:nth-of-type(1) {
      margin-top: 80px;
    }
    button {
      padding: 10px 30px;
      background-color: #62cdfd;
      border-radius: 10px;
      border: unset;
      margin-top: 20px;
      font-size: 1.8rem;
      color: #f2f7ff;
      text-transform: uppercase;
      box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
    button:active {
      box-shadow: unset;
      font-size: 1.6rem;
    }
    button:hover {
      background-color: #49b4e4;
    }
    button:focus {
      outline: 0;
    }
  }
`;

class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({ name: '', age: '', height: '' });
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            type='text'
            placeholder='Age'
            name='age'
            value={this.state.age}
            onChange={this.changeHandler}
          />
          <input
            type='text'
            placeholder='Height'
            name='height'
            value={this.state.height}
            onChange={this.changeHandler}
          />
          <button>Add Smurf</button>
        </form>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
