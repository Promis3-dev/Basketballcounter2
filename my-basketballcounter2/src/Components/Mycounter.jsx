import { useState } from "react";

const Mycounter =() =>{
    // const [count , setCount] = useState(0)
    const [homeCount , setHomeCount] = useState(0)
    const [guestCount , setGuestCount] = useState(0)
    

return(
    <div className="counter-box">
        
        <h1>Basketball Counter</h1>

        <div className= 'score button for home'>
        <h2>Homescore board</h2>
        <p>Current Count: {homeCount}</p>

        <button onClick= {() => {setHomeCount(homeCount + 1)}}>+1 free throw</button>
        <button onClick= {() => {setHomeCount(homeCount + 2)}}>+2 inside court</button>
        <button onClick= {() => {setHomeCount(homeCount + 3)}}>+3 outside court</button>
        </div>

        <div className= 'score button for guest'>
        <h2>Guestscore board</h2>
        <p>Current Count: {guestCount}</p>
            <button onClick= {() => {setGuestCount(guestCount + 1)}}>+1 free throw</button>
            <button onClick= {() => {setGuestCount(guestCount + 2)}}>+2 inside arc</button>
            <button onClick= {() => {setGuestCount(guestCount + 3)}}>+3 outside arc</button>
        </div>
    </div>
);
};
export default Mycounter;