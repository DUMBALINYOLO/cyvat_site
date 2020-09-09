import React, {Component, Fragment} from 'react';


class DefaultPage extends Component {
	render(){
		return (
			<div className='notfound'>
		        <h1 className='notfound__heading'>404 Not Found</h1>
		        <p className='notfound__paragraph'>The link you requested does not exist on our website.</p>
		    </div>
		);
	}
}


export default DefaultPage;
