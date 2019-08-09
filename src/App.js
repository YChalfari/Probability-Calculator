import React, { Component } from 'react';
import tachyons from 'tachyons';
import Nav from "./Components/Nav/Nav.js";
import UnitRarity from "./Components/UnitRarity/UnitRarity.js";
import PlayerLevel from "./Components/PlayerLevel/PlayerLevel.js";
import PoolNumber from "./Components/PoolNumber/PoolNumber.js";
import FlatResult from "./Components/FlatResult/FlatResult.js";
import RerollResult from "./Components/RerollResult/RerollResult.js";


class App extends Component {
  constructor(){
    super();
    this.state ={
      unitCost: '',
      pLevel:'',
      totalPool:'',
      unitPool:''
   }
  }
  
 uCostChange =(event)=> {
    this.setState({unitCost: event.target.value});
    console.log(event.target.value);
}

 pLevelChange =(event)=> {
    this.setState({pLevel: event.target.value});
    console.log(event.target.value);
}

 uPoolChange =(event)=> {
    this.setState({unitPool: event.target.value});
    console.log(event.target.value);
}

testMath = () => {
  const prob = this.state.unitCost + this.state.pLevel;
  console.log(prob);
} 

  render() {
    return(
      <div className="App">
        <Nav />
         <div className='main'>
          <div className='forms'>
           <UnitRarity uCostChange={this.uCostChange} testMath={this.testMath}/>
           <PlayerLevel pLevelChange={this.pLevelChange} testMath={this.testMath}/>
           <PoolNumber uPoolChange={this.uPoolChange}/>
          </div>
          <div className='results'>
           <FlatResult />
           <RerollResult />
          </div>
         </div>

      </div>

      )
  }
}


export default App;
