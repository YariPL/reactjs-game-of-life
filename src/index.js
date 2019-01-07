import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component {
	render() {
		return(
			<div>
				Grid
			</div>
		)
	}
}

//main tag for the whole game
class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			generations:0,
		}
	}
	render() {
		return(
			//should be always one top div(or other element)
			<div>
				<h1>The Game of Life</h1>
				<Grid />
				<h2>Generations:{this.state.generations}</h2>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
