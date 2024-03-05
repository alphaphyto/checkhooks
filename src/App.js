import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Alpha Diallo",
        bio: "Vise toujours la Reussite et Oublie le succes.",
        imgSrc: "https://www.rollingstone.com/wp-content/uploads/2022/11/GettyImages-1439440252.jpg?w=1581&h=1054&crop=1",
        profession: "Developer"
      },
      show: false,
      elapsedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;
    return (
      <div className='App'>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Elapsed Time: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;

