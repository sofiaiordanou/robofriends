import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App () {
    /*constructor () {
        super ();
        this.state = {
            robots: [], //robots,
            searchfield: ""
        }
    }*/
    //το robots είναι το state & 
    //το setRobots το function που αλλάζει το state
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
/*
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { return response.json(); })
        .then(users => { this.setState({ robots: users });})
        
    }
*/  
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { return response.json(); })
        .then(users => { setRobots(users)})
    }, []) // run this until thia '[]' changes

    const onSearchChange = (event) => { 
        setSearchfield(event.target.value);  
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(robots.length===0) {
        return <h1>Loading</h1>
    }else {
        return (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    } 
}  

export default App;