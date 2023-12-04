import './Search.css';
import Convertcf from "./Convertcf";

function Weather(data) {
    const weatherData = data.dayData;
    const cf = data.unit;
    // console.log("data values from parent", data)
    // const [celsi,setCelesi]=useState("false")
    // const handleClick = (value) =>{
    //     console.log("vlaue in Weather ", value)
    //       data.onChildClick(value)
    // }

    return (
        <>
            <div className='col-5'>
                <div className='d-flex w-100 weatherCom'>
                    <div>
                        <div>
                            <div className='d-flex tempreture'>
                                <Convertcf celci={weatherData?.list[0]?.main?.temp} conv={cf}/>
                                {/*{cf === "F" ? `${weatherData?.list[0]?.main?.temp.toFixed(2)}°C` : ((weatherData?.list[0]?.main?.temp * 9/5) + 32).toFixed(2) + "°F"}*/}
                                {/*<div><p><span>{weatherData?.list[0]?.main?.temp}</span><span>&deg;*/}
                                {/*    <span>C</span></span></p></div>*/}
                                <div className='m-2'>
                                    <img className="mainImage"
                                         src={`http://openweathermap.org/img/w/${weatherData?.list[0].weather[0]?.icon}.png`}
                                         alt="Weather Icon"
                                    /></div>
                                <h5>{weatherData?.list[0]?.weather[0]?.main}</h5>
                            </div>
                        </div>
                        {/*<div>*/}
                        {/*    <div>*/}
                        {/*        <button type="button" className="convert-btn" name="convert"  value="Celcious" onClick={(value)=>{handleClick("C")}}>C</button>*/}
                        {/*        <button type="button" className="convert-btn" name="convert" value="Fernhit" onClick={(value)=>{handleClick("F")}}>F</button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div>
                            <span style={{fontSize: '3em'}}>{weatherData?.city?.name}</span>
                        </div>
                        <div>
                            <table className="table table-borderless bg-transparent justify-content-center">
                                <tbody>
                                <tr>
                                    <td>Population : {weatherData?.city?.population} Person</td>
                                    <td>Humidity : {weatherData?.list[0]?.main?.humidity}%</td>
                                </tr>
                                <tr>
                                    <td>Max_Temp : <Convertcf celci={weatherData?.list[0]?.main?.temp_max} conv={cf}/></td>
                                    <td>Min_Temp : <Convertcf celci={weatherData?.list[0]?.main?.temp_min} conv={cf}/></td>

                                    {/*<td>Temp_max : {cf === "F" ? `${weatherData?.list[0]?.main?.temp_max.toFixed(2)}°C` : ((weatherData?.list[0]?.main?.temp_max * 9/5) + 32).toFixed(2) + "°F"}</td>*/}
                                    {/*<td>Temp_max : {cf === "F" ? `${weatherData?.list[0]?.main?.temp_min.toFixed(2)}°C` : ((weatherData?.list[0]?.main?.temp_min * 9/5) + 32).toFixed(2) + "°F"}</td>*/}
                                </tr>
                                <tr>
                                    <td>WindSpeed : {weatherData?.list[0]?.wind?.speed} m/s</td>
                                    <td>Description : {weatherData?.list[0]?.weather[0]?.description}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;
