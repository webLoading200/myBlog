import React from "react";

export default class About extends React.Component {
	render() {
		return <h1>我是about</h1>;
	}
	componentDidMount() {
		//console.log(this.props.match.params);
		console.log(this.props.history);
	}
}
