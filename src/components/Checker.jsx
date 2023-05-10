import { currentDate, nextSunday, nextSundayStr, isItSunday } from "../logic/date";
import { Button } from 'antd';
import isTradeSunday from "../logic/isTradeSunday";
import { useState } from 'react'
import "../App.css"
import NieButton from "./NieButton";
import TakButton from "./TakButton";
import 'antd/dist/reset.css';


function Checker(){
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
    }
  
    // const today = new Date();
  
    return (
      <>
       
        {!isShown && 
    <div >
    <div className="button-container">

        <Button 
        onClick={handleClick} 
        type="primary" 
        shape="circle"
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} 
       
        className="red-button"
      >
        <h1>Czy w tym tygodniu <br/> jest niedziela <br/> handlowa?</h1>
        </Button>
        </div>
     

        </div>
        }
        <div className="card">
          {isShown && (
            <div>
              <p>
              {!isItSunday() ? (
    <>
      {isTradeSunday(nextSunday()) ? (
        <>
        
        <TakButton/>
          <p>Nadchodząca niedziela:<span className="hacker-green"> {nextSundayStr()}</span> jest niedziela handlowa.</p>
        </>
      ) : (
        <>
          <NieButton/>
          <p>Nadchodząca niedziela:<span className="hacker-green"> {nextSundayStr()} </span>nie jest niedziela handlowa.</p>
        </>
      )}
    </>
                ) : (
                  <>
                    {isTradeSunday(nextSunday()) ? 
                      (
  <>
                         <TakButton/>
                         <p>{nextSundayStr()} jest niedziela handlowa.</p>
                         </>
                         ) : (
                          <>
                          <NieButton/>
                          <p>{nextSundayStr()} nie jest niedziela handlowa.</p>
                          </>
                      )
                    }
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </>
    )
  }

export default Checker;