export class App {
    arrayWeather: Object[] = [];
    opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';
    constructor(){
        this.inputsEvents();
        
    }


    
    inputsEvents(){
        const cityForm = document.getElementById('cityForm');
        const cityButton = document.getElementById('cityButton') as HTMLButtonElement;
        cityForm.addEventListener('submit', (e )=> this.onSubmit(e));
     }
     onSubmit(e :any){
        e.preventDefault();
        console.log(this.getInputValue());
        this.getCityInfo(this.getInputValue());
     }

    getInputValue(){
        const cityInput = document.getElementById('cityName') as HTMLInputElement;
        const cityName = cityInput.value;
        return cityName;
    }
    async getCityInfo(cityName: string) {
        const weather = await this.getWeather(cityName);
        this.arrayWeather.push(weather);
        this.saveData(this.arrayWeather);
    }

    async getWeather(cityName:string) : Promise<any>{
        const apiUrl : string = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(apiUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }

    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
        //console.log(data);
    }

    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }

    }

    show(data:Object){
        console.log("Cześć");
        
       console.log(data);
    }
}