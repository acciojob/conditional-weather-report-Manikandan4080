import React ,{useState, useEffect} from 'react';

const App = () => {
  const [weatherInput, setWeatherInput] =useState({ temperature: 25, conditions: "Sunny" });
  const [textColor, setTextColor] = useState("blue");
  useEffect(() => {
    // Set text color based on temperature threshold
    if (weatherInput.temperature > 20) {
      setTextColor("red");
    } else {
      setTextColor("blue");
    }
  }, [weatherInput.temperature]);
 
  return (
    <div>
      <p style={{color:textColor}}>Temperature: <span>{weatherInput.temperature}</span> </p>
      <p style={{color:textColor}}>Conditions: <span>{weatherInput.conditions}</span></p>
    </div>
  )
}


export default App