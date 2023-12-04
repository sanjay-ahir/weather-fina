import Convertcf from "./Convertcf";

function WeatherCard(card) {
    const fiveDay = card.fiveday;
    const cf = card.unit;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    console.log("props", card)
    return (
        <>
            <div className="wcard">
                <div className='d-flex justify-content-center h-100 align-items-center'>
                    <div className="card bg-transparent bg-gradient">
                        <div className="card-body">
                            <h4 className="card-title">Five day forcast</h4>
                            <hr className='m-0'></hr>
                            <table className="table table-borderless bg-transparent justify-content-center">
                                <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Icon</th>
                                    <th>Description</th>
                                    <th>Temp.</th>
                                    <th>Wind</th>
                                </tr>
                                </thead>
                                <tbody>
                                {fiveDay.map((value, index) => {
                                    return (<tr>
                                        <td>{days[new Date(value['dt_txt']).getDay()]}</td>
                                        <td><img
                                            src={`http://openweathermap.org/img/w/${value.weather[0]?.icon}.png`}
                                            alt="Weather Icon"
                                        /></td>
                                        <td>{value.weather[0]?.description}</td>
                                        <td><Convertcf celci={value.main?.temp} conv={cf}/></td>
                                        {/*<td>{cf === "F" ? `${value.main?.temp}°C` : ((value.main?.temp * 9/5) + 32).toFixed(2) + "°F"}</td>*/}
                                        <td>{value.wind?.speed} m/s</td>
                                    </tr>)
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeatherCard;