import React from 'react';

function Header (props) {
	return (
		<div className="py-5 text-center">
			<img className="d-block mx-auto mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
				<h2>Checkout form yo</h2>
				<h1>The problem of the future - today!</h1>
				<ul className="list-unstyled">
					<li>post1</li>
					<li>post2</li>
					<li>post3</li>
					<li>post4</li>
				</ul>
				<p className="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
				</p>
		</div>	
	);
}
Header(props);


export default Header;


