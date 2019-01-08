import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Grid extends React.Component {
	render() {
		const width = this.props.cols * 14;
		let rowsArr = [];

		let boxClass ='';
		for(let i=0;i < this.props.rows; i++) {
			for(let j=0; j < this.props.cols; i++) {
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
				)
			}
		}

		return(
			<div className ='grid' style={{width:width}}>
				{{rowsArr}}
			</div>
		)
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
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
	}
	render() {
		return(
			//should be always one top div(or other element)
			<div>
				<h1>The Game of Life</h1>
				<Grid 
					gridFull = {this.state.gridFull}
					row = {this.row}
					cols = {this.cols}
				/>
				<h2>Generations:{this.state.gener ations}</h2>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
