const API_KEY='d5165e99e652a6133d83cb9f878c3fd4';
const weather = document.querySelector("#weather")
const form = document.querySelector("form")
const searchBox = document.querySelector(".search-box");



form.addEventListener('submit',function(e){
    let date=new Date();
    getWeather(searchBox.value,date)
    e.preventDefault()
    searchBox.value=''
})



const getWeather=(city,date)=>{
    weather.innerHTML=''
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res=>res.json())
    .then(res=>showWeather(res,date))
 
}

function showWeather(data,date){
    console.log(data,date)
    weather.innerHTML =`<div>
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                         </div>
                        <div>
                            <h2>${data.main.temp} ℃</h2>
                            <h4> ${data.weather[0].description} </h4>
                            <h4>${date.toString().split('G')[0]}</h4>
                        </div>`
}












