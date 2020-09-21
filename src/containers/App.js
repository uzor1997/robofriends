import React, { Component } from 'react';
import CardList from '../CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
   state = {
      robots: [],
      searchfield: ''
   }

   componentDidMount() {
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robots => this.setState({robots}))
   }

   onSearchChange = (event) => {
      this.setState({searchfield: event.target.value});
   }

   render () {
      const { robots, searchfield } = this.state;
      const filteredRobots = robots.filter(robot =>
         robot.name.toLowerCase().includes(searchfield.toLowerCase())
      )

      return !robots.length 
         ?
         <h1 className='f1 tc'>Loading<span className='f-subheadline lh-title'>...</span></h1>
         :
         <div className="tc">
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
               <ErrorBoundary>
                  <CardList robots={filteredRobots}/>
               </ErrorBoundary> 
            </Scroll>
         </div>  
   }
}

export default App;