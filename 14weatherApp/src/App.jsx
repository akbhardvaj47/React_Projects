import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherDetails, setWeatherDetails] = useState(null); // Initialize with null
  const [loading, setLoading] = useState(false);
  const [counter,setCounter]=useState(1)

  const getData = (event) => {
    event.preventDefault();

    const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
    setLoading(true);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((res) => res.json())
      .then((finalRes) => {
        console.log(finalRes);
        setWeatherDetails(finalRes);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        setWeatherDetails(null); // Handle error case
        setLoading(false); // Set loading to false if there's an error
      });

      setCity(''); // Reset the city input after form submission
    };
    let changeCounter=()=>{
      // alert("Clicked")
      setCounter(counter+1)
    }
    // useEffect(()=>{
    //   console.log('Welcome')
    // })  this will Call all useState when any state become change
    useEffect(()=>{
      console.log('Welcome')
    },[counter,city]) //This will only Call counter and city useState

  return (
    <div className='w-full h-screen bg-blue-300'>
      <div className="max-w-[1320px] mx-auto">
        <div className='text-[40px] font-bold py-[50px] text-white'>
        {counter}
        <button onClick={changeCounter} className='bg-red-500 px-3 rounded'>Counter</button>
          <form onSubmit={getData}>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City Name"
              className='w-[300px] h-[40px] pl-3 mb-4'
            />
            <button className='bg-blue-500 text-white font-bold px-3 py-2 rounded'>
              Submit
            </button>
          </form>

          <div className='w-[500px] mx-auto bg-white text-slate-950 shadow-lg mt-[40px] p-[25px] relative'>
            {/* Loading Spinner */}
            {loading && (
              <img
                className="absolute w-[50px] m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                src="https://cdn1.iconfinder.com/data/icons/operating-systems-2/100/Loading_spinner-512.png"
                alt="Loading"
              />
            )}

            {/* Weather Data */}
            {weatherDetails ? (
              <>
                <h1>
                  City: {weatherDetails.name} <span> Country: {weatherDetails.sys.country}</span>
                </h1>
                <h2>
                  Temperature: {weatherDetails.main.temp}
                  <sup>°</sup>C
                </h2>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}.png`}
                  alt="Weather Icon"
                  className='w-[200px] m-auto'
                />
                <p>{weatherDetails.weather[0].description}</p>
                <p>Wind Speed: {Math.round(weatherDetails.wind.speed * 3.6)} km/h</p> {/* Convert m/s to km/h */}
                <p>Humidity: {weatherDetails.main.humidity}%</p>
              </>
            ) : (
              !loading && <p>No Data Found</p> // Show "No Data Found" only if not loading
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
