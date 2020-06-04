import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{
  
  state = {
    persons : [
      { id : '#id01', name : "Aakarsh", age : 22 },
      { id : '#id02', name : "Aman" , age : 33 },
      { id : '#id03', name : "Avarsh", age : 24 }
    ],
    otherperson : 'Some other value',
    personShow : false
  };

  nameChangeHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return ( person.id === personId);
    });

    console.log(personIndex);

    let person = this.state.persons[personIndex];

    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  deleteHandler = (index) => {
    
    let per = [...this.state.persons];
    per.splice(index, 1);
    this.setState({persons : per});
  }

  showPersonHandler = (event) => {
    let ps = this.state.personShow;
    this.setState({personShow : !ps});
  }
  
  render() {
    const style = {
      backgroundColor : 'white',
      color : 'black',
      border : '1px solid black',
      padding : '5px'
    }
    
    let persons=null;


    if(this.state.personShow){
      persons = (
        <div>{
          this.state.persons.map( (person, index) => {
            return (
              <Person 
                name={person.name} 
                age={person.age} 
                key={person.id}
                input={(event) => this.nameChangeHandler(event, person.id)}
                click={() => this.deleteHandler(index)}
                />
            );
          })
        }
        </div>
      );
    } 


    return (
      <div className="App">
        <h2>Person</h2>
        {persons}
        <button 
          style={style}
          onClick={this.showPersonHandler}>Show Persons</button>
      </div>
    );
  }   
}
    
export default App;
    