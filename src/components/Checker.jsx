import { currentDate, nextSunday, nextSundayStr, isItSunday } from "../logic/date";
import { useState } from 'react';
import "../App.css";
import isTradeSunday from "../logic/isTradeSunday";

function Checker() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  }

  const buttonProps = {
    key: '1',
    onClick: handleClick,
    type: 'primary',
    shape: 'circle',
    

    className: isShown ? isTradeSunday(nextSunday()) ? 'tak' : 'nie' : 'red-button',
    children: !isShown ? (
      <h1><br/>Czy w tym tygodniu <br /> jest niedziela <br /> handlowa?</h1>
    ) : (
      isTradeSunday(nextSunday()) ? <h1>Tak!</h1> : <h1>Nie!</h1>
    )
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="button-container">
        <button {...buttonProps} />
      </div>
      {!isShown && (
        <div className="card">
          <p style={{color:"transparent"}}>Kliknij Kółko .....................................</p>
        </div>
      )}

      {isShown && (
        <div className="card">
          <p>
            {!isItSunday() ? (
              <>
                {isTradeSunday(nextSunday()) ? (
                  <>
                    <p>Nadchodząca niedziela:<span className="hacker-green"> {nextSundayStr()}</span> jest niedzielą handlową.</p>
                  </>
                ) : (
                  <>
                    <p>Nadchodząca niedziela:<span className="hacker-green"> {nextSundayStr()} </span>nie jest niedzielą handlową.</p>
                  </>
                )}
              </>
            ) : (
              <>
                {isTradeSunday(nextSunday()) ?
                  (
                    <>
                      <p>Dziś<span className="hacker-green"> {nextSundayStr()}</span> jest niedziela handlowa.</p>
                    </>
                  ) : (
                    <>
                      <p>Dziś<span className="hacker-green"> {nextSundayStr()} </span>nie ma niedzieli handlowej.</p>
                    </>
                  )
                }
              </>
            )}
          </p>
        </div>
      )}
    </div>
  )

}

export default Checker;
