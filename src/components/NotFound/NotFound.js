import React from 'react';
import '../../Style.css';

export default function NotFound() {
	const idk = '¯\\_ (ツ)_/¯';
	const tfo = '(╯°□°）╯︵ ┻━┻';
	return (
		<section className='NotFound'>
			<h1>404 - NotFound</h1>
			<h2>{idk}</h2>
			<h2>{tfo}</h2>
		</section>
	);
}
