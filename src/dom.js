import {getForecast} from "./forecast";

const location = document.querySelector('.location');
const high = document.querySelector('.high');
const current = document.querySelector('.current');
const low = document.querySelector('.low');
const wind = document.querySelector('.wind');
const conditionText = document.querySelector('.condition-text');
const conditionIcon = document.querySelector('.condition-icon');
const background = document.querySelector('main');
const date = document.querySelector('.date');
const time = document.querySelector('.time');

export function changeDom() {
    const search = document.querySelector('form');
    search.addEventListener('submit', e => {
        e.preventDefault();
        const city = search.search.value;
        getForecast(city).then(data => {
            location.innerText = data.city;
            date.innerText = data.date;
            time.innerText = data.time;
            high.innerHTML = parseInt(data.high) + `&deg`;
            current.innerHTML = parseInt(data.current) + `&deg`;
            low.innerHTML = parseInt(data.low) + `&deg`;
            wind.innerHTML = 'Wind: ' + parseInt(data.wind) + 'mph';
            conditionText.innerText = data.condition;

            if (data.mainCondition === "Clear") {
                conditionIcon.src = './sunny.svg';
                background.style.backgroundImage = "url('./sun.jpg')";
            } else if (data.mainCondition === "Clouds") {
                conditionIcon.src = './cloudy.svg';
                background.style.backgroundImage = "url('./sun.jpg')";
            } else if (data.mainCondition === "Snow") {
                conditionIcon.src = './snow.svg';
                background.style.backgroundImage = "url('./snow.jpg')";
            } else if (data.mainCondition === "Rain" || data.mainCondition === "Drizzle") {
                conditionIcon.src = './rainy.svg';
                background.style.backgroundImage = "url('./rain.jpg')";
            }
            
        }).catch(err => console.log(err));
        search.reset();
        
    })
}