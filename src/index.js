import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Box extends React.Component {
	//must be arrow function to refer to good this
	selectBox = () => {
		this.props.selectBox(this.props.row, this.props.col)
	}
 
	render() {
		
		return(
			<div
				className={this.props.boxClass}
				id={this.props.id}
				onClick={this.selectBox}
			/>
		);
	}
}

class Grid extends React.Component {
	render() {
		const width = (this.props.cols * 16);
		let rowsArr = [];
					

		let boxClass ='';

		for(let i=0;i < this.props.rows; i++) {
			for(let j=0; j < this.props.cols; j++) {
				//create id for each box
				let boxId = i + '_' + j;
				//color or not the box element
				boxClass = this.props.gridFull[i][j] ? 'box on' : 'box off';
				rowsArr.push(
					<Box 
						boxClass={boxClass}
						key={boxId}
						boxId={boxId}
						row={i}
						col={j}
						selectBox={this.props.selectBox}
					/>
				);
			}
		}

		return(
			<div className='grid' style={{width: width}}>
				{rowsArr}
			</div>
		);
	}
}

//main tag for the whole game
class Main extends React.Component {
	constructor() {
		super();
		this.speed = 100;//speed of app
		this.rows = 30;//rows
		this.cols = 50;//columns
		this.state = {
			generations:0,
			//every box is false?
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
	}
	//arrow function to get good this
	selectBox = (row,col) => {
		//best practice to copy array
		let gridCopy = arrayClone(this.state.gridFull);
		//onclick set value (of the clicked box to opposite);
		gridCopy[row][col] = !gridCopy[row][col];
		this.setState({
			gridFull: gridCopy
		})
	}

	seed = () => {
		//best practice to copy array
		let gridCopy = arrayClone(this.state.gridFull);
		//loop threw all the boxes
		for(let i=0;i < this.props.rows; i++) {
			for(let j=0; j < this.props.cols; j++) {
				if(Math.floor(Math.random() * 4 === 1)) {
					gridCopy[i][j] = true;
				};
			}
		}
		this.setState({
			gridFull: gridCopy
		})
	}
	render() {
		return(
			//should be always one top div(or other element)
			<div>
				<h1>The Game of Life</h1>
				<Grid 
					gridFull = {this.state.gridFull}
					rows = {this.rows}
					cols = {this.cols}
					selectBox={this.selectBox}
				/>
				<h2>Generations:{this.state.generations}</h2>
			</div>
		);
	}
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}
ReactDOM.render(<Main />, document.getElementById('root'));
