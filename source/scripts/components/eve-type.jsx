import React from 'react';

class EveType extends React.Component {
	constructor(props) {
		super(props);
		this.state = { type: this.props.defaultValue };
		console.log(this.state);
	}

	updateType() {
		this.props.onUpdate(this.state.type);
	}

	updateInput(event) {
		this.setState({ type: event.target.value });
	}



	render() {
		return (
			<div>
				<input type="text" name="type_id" value={this.state.type} onChange={this.updateInput.bind(this)} /><button onClick={this.updateType.bind(this)}>Load</button>
			</div>
		);
	}
}

export default EveType;
