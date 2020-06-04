import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {

  state = {
    u1 : 'aakarshsak',
    u2 : 'amandeep',
    u3 : 'rudrapradap'
  }


  userNameChangeHandler = (event) =>{
    this.setState({
      u2 : event.target.value
    })
  }

  render() {



    return (
      <div className='App'>    
        <UserOutput name={this.state.u1} />
        <UserOutput name={this.state.u2} >
          <UserInput changed={this.userNameChangeHandler} name={this.state.u2}/>
        </UserOutput>
        <UserOutput name={this.state.u3} />
      </div>
    );
  }
}

export default App;
