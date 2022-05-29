import React, {Component} from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state = {hasError: false};
	}

	//compoentDidCatch is like try catch and it accepts two parameters
	componentDidCatch(error, info){
		this.setState({hasError: true});
	}

	render(){
		if(this.state.hasError){
			return (<h1>Oops.. This is not good</h1>)
		}
		else{
			return (this.props.children);
		}
	}
}

export default ErrorBoundary;