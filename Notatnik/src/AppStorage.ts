import { App } from './App';
export class AppStorage{
    localStorageArray : any = [];
    app:App;
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
            return JSON.parse(dataNotes);
        } else {
            return [];
        }
    }
    removeNote(id:any){
        const removeData = this.getData();
        console.log(removeData);
        const removedData =  removeData.filter((element : any) => {
            console.log(element.id,id);
           return element.id !== parseInt(id);
        });
        this.saveData(removedData);
    }
}
