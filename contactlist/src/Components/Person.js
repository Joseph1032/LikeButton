import React from 'react';
import data from './data.json'


export default React.createClass({
	getInitialState() { 
		return {
			data: data.filter(person=>{
				return Number(person.id) === Number(this.props.match.params.personId)
				})[0]
		} 
	},
	handleBack(e) {
		e.preventDefault()
		this.props.history.goBack()
	},
	render() {
		return(
			<div>
				<div className="photo">
					<button id="back" onClick={this.handleBack}><img alt='' src="back.png"/></button>
					<img id="profilepic" alt={this.state.data.name.first + this.state.data.name.last} src={this.state.data.picture.medium} />
				</div>
				<ul id="users">
					<li>{this.state.data.name.first} {this.state.data.name.last}</li>	
					<li>{this.state.data.email}</li>
					<li>{this.state.data.phone}</li>
					<li>{this.state.data.location.city}, {this.state.data.location.state}</li>
				</ul>
			</div>
		)
	}
})