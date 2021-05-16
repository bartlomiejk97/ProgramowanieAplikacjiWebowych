
export class App {
    
    containerBox: HTMLElement;
    constructor() {
         /*this.arrayWeather = this.getData();
        this.inputsEvents();
        this.containerBox = document.getElementById("weatherBox");
        this.show();
        localStorage.clear();*/
        this.addNewNote();
    }
    addNewNote(){
        const AddNoteButton = document.getElementById('AddNote') as HTMLButtonElement;
        AddNoteButton.addEventListener('submit',(e) => this.onSubmit(e));
    }
    onSubmit(e: any){
        e = 0;
        e ++;
        console.log(e);
    }

    /*inputsEvents(): void {
        const cityForm = document.getElementById('cityForm');
        const cityButton = document.getElementById('cityButton') as HTMLButtonElement;
        cityForm.addEventListener('submit', (e) => this.onSubmit(e));
    }
    onSubmit(e: any) {
        e.preventDefault();
        //console.log(this.getInputValue()); // tu wyświelta nazwę z inputa
        const cityName = this.getInputValue().trim();
        if(cityName !=="")
        {
            this.getCityInfo(cityName);
        }
    }
    getInputValue(): string {
        const cityInput = document.getElementById('cityName') as HTMLInputElement;
        const cityName = cityInput.value;
        return cityName || "";
    }
    async getCityInfo(cityName: string): Promise<void> {
        const weather = await this.getWeather(cityName);
        this.arrayWeather.push(weather);
        this.saveData(this.arrayWeather);
        //console.log(this.arrayWeather); // wyświetla tablice

    }

    async getWeather(cityName: string): Promise<any> {
        const apiUrl: string = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.opwApiKey}&&units=metric`;
        const weatherResponse = await fetch(apiUrl);
        const weatherData = await weatherResponse.json();
        // console.log(weatherData); 
        return weatherData;
    }

    saveData(data: any): void {
        localStorage.setItem('weatherData', JSON.stringify(data));
        this.show();
    }
    getData(): any {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return [];
        }

    }
    show() {
        this.printWeatherBox(this.arrayWeather);
    }

    printWeatherBox(weatherData: any) {
        console.log(weatherData);
        let weatherItems = "";
        weatherData.forEach((element: any) => {
            //console.log(element.main);
            weatherItems += `
                <div class="create">
                    <p> Nazwa : ${element.name}</p>
                    <p> Temperatura : ${element.main.temp}°C</p>
                    <p> Wilgotność : ${element.main.humidity}%</p>
                    <button id=${element.id} class="remove"> Usuń </button>
                </div>
            `;
        });
        this.containerBox.innerHTML = weatherItems;
        document.querySelectorAll(`.remove`)?.forEach((element: any) => element.addEventListener(`click`, (e: any) => this.dropCity(e)));
    }
    dropCity(e: any) {
        //console.log("before",this.arrayWeather);
        this.arrayWeather = this.arrayWeather.filter((item) => {
            console.log(item.name, item.id.toString() !== e.target.id);
            return item.id.toString() !== e.target.id;
        })
        // console.log("after",this.arrayWeather);

        this.saveData(this.arrayWeather);
        this.show();
        //console.log(this.arrayWeather);
    }*/
}
