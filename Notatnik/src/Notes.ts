import {App} from './app';
import { AppStorage } from './AppStorage';
export class Notes{

    app:App;
    appStorage:AppStorage;

    constructor(){
        
    }
    createNotes(dataNotes :any){
        const renderList : HTMLElement = document.querySelector('.render-list');
        renderList.innerHTML="";
        dataNotes.forEach((element:any) => {
            const newNoteContainer : HTMLDivElement = this.app.createDiv();
            const newNoteTop : HTMLDivElement = this.app.createDiv();
            const newNoteTitle : HTMLDivElement = this.app.createDiv();
            const newNoteArea: HTMLDivElement = this.app.createDiv();
            const newNoteDate : HTMLDivElement = this.app.createDiv();
            newNoteContainer.className="newNotes";
            newNoteTop.className="newNoteTop";
            newNoteTitle.className="newNotesTitle";
            newNoteTitle.innerHTML = element.title;
            newNoteArea.className="newNotesArea";
            newNoteArea.innerHTML = element.text;
            newNoteDate.className= "newNotesDate";
            newNoteDate.innerHTML= element.noteDate;
            renderList.append(newNoteContainer); 
            newNoteContainer.append(newNoteTop,newNoteTitle,newNoteArea,newNoteDate,);
        });
    }


    renderNotes(){
        const dataNotes:any[]= this.appStorage.getData();
        return dataNotes;
    }

    render2Notes(dataNotes: any){
        this.createNotes(dataNotes);
        }
}