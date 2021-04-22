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
        //console.log(this.getInputValue()); // tu wyświelta nazwę z inputa
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
        //console.log(weatherData); wyświetla cały obiekt pogody pobrany z inputa
        return weatherData;
    }

    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
        //console.log(data);  // wyświetla zapisany obiek w state
        this.show(this.arrayWeather);
    }

    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }

    }

    show(arrayWeather : any) : void{
        let pogoda: any = arrayWeather[0];
            console.log(pogoda.main);
            console.log("Cord " + pogoda.cord);
            console.log("Country " + pogoda.sys.country);
        
        // coś tu nie działa bo, pobiera to samo miasto i nie wyświetla poprawnie
        //console.log("Cześć");
       /*console.log(arrayWeather[0].name,arrayWeather[0].main);
       console.log();*/
    }
}