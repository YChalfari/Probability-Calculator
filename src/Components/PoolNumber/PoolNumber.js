import React from 'react';

const PoolNumber = ({uPoolChange}) => {
	return (
		<div className='flex flex-column items-center justify-center'>
			<h1 className='f1'> How many are missing from pool? </h1>
			
			 <label className='ml7 yellow f3 pa3 '>Number:  <input onChange={uPoolChange} className='w-20 ml5' type='number' max ='50' /></label>
			
		</div>

		);
}


export default PoolNumber; 