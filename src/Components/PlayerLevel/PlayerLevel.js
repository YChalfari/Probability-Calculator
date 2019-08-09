import React from 'react';

const PlayerLevel = ({pLevelChange , testMath}) => {
	return (
		<div className='flex flex-column items-center justify-center'>
			<h1 className='f1'> What is Players Level? </h1>
			<div className="flex flex-row items-center justify-center" >
              <label className='pa2 relative flex items-center mv2'><input onChange={pLevelChange} type="radio" name="plvl" value="1" className="k-radio" /><span className='yellow pa3 f3'>1</span></label>                                      
              <label className='pa2 relative flex items-center mv2'><input onChange={pLevelChange} type="radio" name="plvl" value="2" className="k-radio" /><span className='yellow pa3 f3'>2</span></label>
              <label className='pa2 relative flex items-center mv2'><input onChange={pLevelChange} type="radio" name="plvl" value="3" className="k-radio" /><span className='yellow pa3 f3'>3</span></label>
              <label className='pa2 relative flex items-center mv2'><input onChange={pLevelChange} type="radio" name="plvl" value="4" className="k-radio" /><span className='yellow pa3 f3'>4</span></label>
              <label className='pa2 relative flex items-center mv2'><input onChange={pLevelChange} type="radio" name="plvl" value="5" className="k-radio" /><span className='yellow pa3 f3'>5</span></label>
              <label className='pa2 relative flex items-center mv2'><input onChange={pLevelChange} type="radio" name="plvl" value="6" className="k-radio" /><span className='yellow pa3 f3'>6</span></label>
              <label className='pa2 relative flex items-center mv2'><input onChange={pLevelChange} type="radio" name="plvl" value="7" className="k-radio" /><span className='yellow pa3 f3'>7</span></label>
              <label className='pa2 relative flex items-center mv2'><input onChange={pLevelChange} type="radio" name="plvl" value="8" className="k-radio" /><span className='yellow pa3 f3'>8</span></label>
              <label className='pa2 relative flex items-center mv2'><input onChange={pLevelChange} type="radio" name="plvl" value="9" className="k-radio" /><span className='yellow pa3 f3'>9</span></label>
              <label className='pa2 relative flex items-center mv2'><input onChange={pLevelChange} type="radio" name="plvl" value="10" className="k-radio" /><span className='yellow pa3 f3'>10</span></label>
            </div>

		</div>

		);
}


export default PlayerLevel; 