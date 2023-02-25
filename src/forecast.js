const key = '70f566babfaeba2aed1f815841f6d2d8';

export const getForecast = async (city) => {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=` + key);
    const data = await response.json();
    const date = new Date();
    const stringDate = date.toDateString();
    const stringTime = date.toTimeString();
    const bestStringTime = stringTime.slice(0,5);
    let lessData = {
        city: `${data.name}`,
        high: `${data.main.temp_max}`,
        current: `${data.main.temp}`,
        low: `${data.main.temp_min}`,
        mainCondition: `${data.weather[0].main}`,
        condition: `${data.weather[0].description}`,
        wind: `${data.wind.speed}`,
        date: `${stringDate}`,
        time: `${bestStringTime}`
    };
    return lessData;
}

getForecast('miami').then(data => {
    console.log(data);
}).catch(err => console.log(err));