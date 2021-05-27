import { AppStorage } from "./AppStorage";

export class App {
    appStorage:AppStorage;
    noteArray : any= [];
    noteContainer: HTMLElement;
    counter:number= 0;
   

    constructor() {
        localStorage.clear();
        this.bindEventAddNewNote();
        this.appStorage = new AppStorage();
    }
    bindEventAddNewNote() : void {
        const addNoteButton = document.getElementById('addNoteButton') as HTMLButtonElement;
        addNoteButton.addEventListener('click',(event:MouseEvent) => {
            event.preventDefault();
            this.createNewNote(this.noteValue());
        });
    }
    noteValue() : object {
        const titleNoteValue : HTMLInputElement= document.querySelector('.inputTitle');
        const textAreaValue : HTMLTextAreaElement = document.querySelector('.textArea');
        const textArea = textAreaValue.value;
        const titleNote = titleNoteValue.value;
        this.counter++;
        const newNote : object = {
            id : this.counter,
            title: titleNote,
            text: textArea, 
            pinned:false,
            noteDate:this.getDayNotes(),
        }
        console.log(newNote);
        return newNote
    }
    getDayNotes() : string {
        const now : Date = new Date();
        const noteDate : string = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`;
        return noteDate;
    }
    createDiv():HTMLDivElement{
        return document.createElement('div');
    }

    createNewNote(newNote:any){
            const renderHere : HTMLElement = document.querySelector('.renderHere');
            const newNoteContainer : HTMLDivElement = this.createDiv();
            const newNoteTop : HTMLDivElement = this.createDiv();
            const newNoteTitle : HTMLDivElement = this.createDiv();
            const newNoteArea: HTMLDivElement = this.createDiv();
            const newNoteDate : HTMLDivElement = this.createDiv();
            const pinnedButton : HTMLButtonElement = document.createElement('button');
            const pinnedIcon : HTMLImageElement = document.createElement('img');
                pinnedIcon.src = './media/pinned.png';
                pinnedButton.id = newNote.id;
                pinnedButton.addEventListener('click',(event) => {
                    newNote.pinned=true;
                    this.appStorage.getNoteToSaveData(newNote);
                    this.render2Notes(this.appStorage.getData());
                    console.log(newNote);
                });
            const removeButton : HTMLButtonElement = document.createElement('button');
            const removeIcon : HTMLImageElement = document.createElement('img');
                removeButton.id = newNote.id;
                removeIcon.src = './media/remove.png';
                removeButton.addEventListener('click',(event:any) =>{
                    this.appStorage.removeNote(event.currentTarget.id);
                    this.createNotes(this.appStorage.getData());
            });
            const changeColorButton: HTMLButtonElement = document.createElement('button');
            const changeColorImg: HTMLImageElement = document.createElement('img');
                changeColorImg.src='./media/change.png';
                changeColorButton.id=newNote.id;
                changeColorButton.addEventListener('click', (event)=>{
                    newNoteArea.style.backgroundColor = `hsl(${Math.random()*360}, 90%, 70%)`;
            });
            newNoteContainer.className="newNotes";
            newNoteTop.className="newNoteTop";
            newNoteTitle.className="newNotesTitle";
            newNoteTitle.innerHTML = newNote.title;
            newNoteArea.className="newNotesArea";
            newNoteArea.innerHTML = newNote.text;
            newNoteDate.className= "newNotesDate";
            newNoteDate.innerHTML= newNote.noteDate;


            renderHere.append(newNoteContainer); // kontener na wszystko
            newNoteContainer.append(newNoteTop,newNoteTitle,newNoteArea,newNoteDate,);
            newNoteTop.append(pinnedButton,removeButton,changeColorButton);
            pinnedButton.append(pinnedIcon);
            removeButton.append(removeIcon);
            changeColorButton.append(changeColorImg);

            this.noteArray.push(newNote);
            return newNote;
    }




    // renderowanie notatek z localstrage
    createNotes(dataNotes :any){
        const renderList : HTMLElement = document.querySelector('.render-list');
        renderList.innerHTML="";
        dataNotes.forEach((element:any) => {
            if(element.pinned == false){
                
            }else{
                console.log(element.pinned == false);
                const newNoteContainer : HTMLDivElement = this.createDiv();
                const newNoteTop : HTMLDivElement = this.createDiv();
                const newNoteTitle : HTMLDivElement = this.createDiv();
                const newNoteArea: HTMLDivElement = this.createDiv();
                const newNoteDate : HTMLDivElement = this.createDiv();
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
            }
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
