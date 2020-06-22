import React, { useState } from 'react';
import DonutChart from '../DonutChart/DonutChart';
import BarChart from '../BarChart/BarChart';
import LineChart from '../LineChart/LineChart';
import './home.css';
function Home(props) {

    // React hooks with common state values for all components 
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [groupColour, setGroupColour] = useState('lightgrey');

  
  const updateBarChart = (group,colour)=>{
    setSelectedGroup(group);
    setGroupColour(colour);
  }


return(
  <div className="container">
  <div className="card-deck">
    <div className="card mt-5 bg-dark">
      <div className="card-body">
         <svg viewBox="-2 0 32 40" preserveAspectRatio="xMidYMid meet" > 
         <DonutChart x={15} y={20} onChangeGroup={updateBarChart}/>
        </svg>
      </div>
    </div>

    <div className="card mt-5 bg-dark">
      <div className="card-body">
         <svg viewBox="20 -5 70 70" preserveAspectRatio="xMidYMid meet" > 
         <BarChart positionX={35} positionY={50} width={85} height={105} selectedGroup={selectedGroup} barColour={groupColour}/>
        </svg>
      </div>
    </div>

    <div className="card mt-5 bg-dark">
        <div className="card-body">
         <svg viewBox="30 -30 60 80" preserveAspectRatio="xMidYMid meet" > 
         <LineChart positionX={35} positionY={4} selectedGroup={selectedGroup} lineColour={groupColour} />
         </svg>
      </div>
    </div>
  </div>
  </div>

    )
}

export default Home;