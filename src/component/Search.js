import {useEffect, useState} from "react";
import axios from 'axios';
import Weather from "./Weather";
import WeatherCard from "./WeatherCard";
import './Search.css';

function Search(data) {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [fiveDay, setFiveDay] = useState([]);
    const [unit, setUnit] = useState("F")

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    console.log(position.coords);
                    try {
                        axios.get(
                            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${data.API_KEY}&units=metric`
                        ).then(response => {
                            setWeatherData(response.data);
                            setWeatherdetails(response.data);
                        });
                    } catch (err) {
                        console.log(err);
                        setError(err);
                    }
                },
                (error) => {
                    console.error(error);
                }
            );
        }
    }, []);
    function setWeatherdetails(data) {
        let array1 = data?.list;
        let startPosition = 0;
        let array = [];
        for (let i = 0; i < 5; i++) {
            array.push(array1[startPosition]);
            startPosition += 7;
        }
        setFiveDay(array);
        console.log("array", array)
        return array;
    }
    const handleSearch = () => {
        try {
            axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${data.API_KEY}&units=metric`
            ).then(response => {
                // console.log('API response:', response);
                setWeatherData(response.data)
                setWeatherdetails(response.data);
            });
        } catch (err) {
            console.log(error);
            setError(err)
        }
    };
    // const handleClick = (value)=> {
    //     console.log('value from parent to child' , value);
    // }
    return (
        <div>
            <div className='row' style={{height: '100vh', padding: '6rem'}}>
                {/*Today */}
                <Weather dayData={weatherData} unit={unit}/>
                {/*Search */}
                <div className='col-7'>
                    <div className="searfor">
                        <div className='searchbar w-100 d-flex justify-content-end'>
                            <div>
                                <form className="d-flex">
                                    <input
                                        className="form-control me-2" type="search" placeholder="Enter city"
                                        aria-label="Search"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                    <button type="button" className="btn btn-outline-success"
                                            onClick={handleSearch}>Search
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="w-100 d-flex mt-2 justify-content-end">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}
                            >
                                {unit === 'F' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
                            </button>
                        </div>
                    </div>
                    {/* 5 day  */}
                    <WeatherCard fiveday={fiveDay} unit={unit}/>
                </div>
            </div>
        </div>
    );
}

export default Search;
