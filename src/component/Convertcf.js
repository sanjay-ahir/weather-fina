
function Convertcf(data) {
    const celci = data.celci;
    const cf = data.conv;

    return (
            <>
                {/*{cf === "F" ? `${weatherData?.list[0]?.main?.temp.toFixed(2)}°C` : ((weatherData?.list[0]?.main?.temp * 9/5) + 32).toFixed(2) + "°F"};*/}
                {cf === "F" ? `${celci}°C` : ((celci * 9/5) + 32).toFixed(2) + "°F"}
                </>
         );
}

export default Convertcf;
