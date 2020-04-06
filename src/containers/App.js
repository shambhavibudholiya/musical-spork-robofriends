import React from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
//props never change
//state is the description of th program, it is an object. It is able to change.
  
class App extends React.Component {
    constructor() {
      super()
      this.state = {
        robots: [],
        searchfield: ''
      }  
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').
        then(Response => {
         return Response.json();
        })
        .then(users =>this.setState({robots: users}));
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }   
    render(){
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
     if (this.state.robots.length ===0){
         return <h1>Loading</h1>
     }
     else{
    return(
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
        <Cardlist robots={filterRobots}/>
        </Scroll>
        </div>
        );
    }
    }
}
export default App;