import React from 'react';
import { connect } from 'react-redux';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import { setSearchField } from "../actions";
//props never change
//state is the description of th program, it is an object. It is able to change.
  
const mapStateToProps = state =>{
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
}
}
class App extends React.Component {
    constructor() {
      super()
      this.state = {
        robots: []
      }  
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users =>{this.setState({robots: users})});
    }  
    render(){
        const { robots } = this.state;
        const {searchField, onSearchChange} = this.props;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })     
         return !robots.length ?
         <h1>Loading</h1> :
          (
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <Searchbox searchChange={onSearchChange} />
        <Scroll>
        <Cardlist robots={filterRobots}/>
        </Scroll>
        </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);