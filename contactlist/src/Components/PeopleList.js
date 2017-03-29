import React from 'react'
import data from './data.json'
import { Link } from 'react-router-dom'

export default React.createClass({
	
	render() {
		return(
			<div id="contactlist">
	            <h1>My Peeps</h1>
	            <ul>
	            {data.map(data=>(
	            	<Link key={'list' + data.id} to={'person/' + data.id}>
	                <li><img id="profile" alt={data.name.first + data.name.last} src={data.picture.thumbnail} />{data.name.first} {data.name.last}
	                </li>
	                </Link>
	                ))}
	            </ul>
	        </div>
		)
	}
})


		