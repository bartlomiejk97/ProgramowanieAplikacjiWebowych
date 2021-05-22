import { App } from './App';
export class AppStorage{
    localStorageArray : any = [];
    App: object;
    constructor(){
       
    }
    getNoteToSaveData(newNote:any){
        this.localStorageArray.push(newNote);
        this.saveData(this.localStorageArray);
    }
    saveData(localStorageArray:any){
        localStorage.setItem('localStorageArray', JSON.stringify(localStorageArray));
    }

    getData(): any {
        const dataNotes = localStorage.getItem('localStorageArray');
        if (dataNotes) {
            console.log(dataNotes);
            return JSON.parse(dataNotes);
        } else {
            return [];
        }
    }
    removeNote(e:any){
      console.log("Delete");
      const dataRemove: any[] = this.getData();
9
      dataRemove.filter((item) => {
        return item.id.toString() !== e.target.id;
      })

    }
}

    // zrobić tablicę, pakować do tej tablicy newNota; // zrobione
    // zapisać tablice do localStorage // zrobione
    // pobrać dane z localStorage 
    // przekazać dane do funkcji która wyświetla.
    // odpalac tablicę i wyświetlać tak mi sie wydaje


// dropCity(e: any) {
//     //console.log("before",this.arrayWeather);
//     this.arrayWeather = this.arrayWeather.filter((item) => {
//         console.log(item.name, item.id.toString() !== e.target.id);
//         return item.id.toString() !== e.target.id;
//     })
//     // console.log("after",this.arrayWeather);

//     this.saveData(this.arrayWeather);
//     this.show();
//     //console.log(this.arrayWeather);