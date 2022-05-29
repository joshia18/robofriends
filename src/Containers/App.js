import React, {Component} from 'react';
import CardList from '../Components/CardList';
// import {robots} from './robots';
import './App.css';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	render(){
		const {robots, searchField} = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		if(robots.length === 0){
			return (<h1>Loading</h1>);
		}
		else{
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;