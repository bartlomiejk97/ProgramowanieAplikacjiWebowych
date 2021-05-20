import { AppStorage } from "./AppStorage";



export class App {
    noteArray : any= [];
    noteContainer: HTMLElement;
    appStorage:AppStorage;
    counter:number= 0;
    

    constructor() {
        this.bindEventAddNewNote();
        this.appStorage = new AppStorage()
        
    }
    bindEventAddNewNote() : void {
        const addNoteButton = document.getElementById('addNoteButton') as HTMLButtonElement;
        addNoteButton.addEventListener('click',(event:MouseEvent) => {
            event.preventDefault();
            this.getNoteValue();
        });
    }
    getNoteValue() : object {
        const titleNoteValue : HTMLInputElement= document.querySelector('.inputTitle');
        const textAreaValue : HTMLTextAreaElement = document.querySelector('.textArea');
        const textArea = textAreaValue.value;
        const titleNote = titleNoteValue.value;
        this.counter++;

        const newNote : object = {
            id : this.counter,
            title: titleNote,
            text: textArea, 
            noteDate:this.getDayNotes()
        }
        
        
        this.createNewNote(newNote);
        return newNote;
    }


    getDayNotes() : string {
        const now : Date = new Date();
        const noteDate : string = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`;
        return noteDate;
    }
    /////////////////////////////////////////// utworzenie danych notatki 


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

            // deklaracje buttonów trzeba stąd wywalić 
            // pinned
            const pinnedButton : HTMLButtonElement = document.createElement('button');
            const pinnedIcon : HTMLImageElement = document.createElement('img');
                pinnedIcon.src = './media/pinned.png';
                pinnedButton.id = newNote.id;
                pinnedButton.addEventListener('click',(event) => {
                    console.log("Pinned");
                    this.appStorage.getNoteToSaveData(newNote);
                });

            /// reeemmove
            const removeButton : HTMLButtonElement = document.createElement('button');
            const removeIcon : HTMLImageElement = document.createElement('img');
            removeButton.id = newNote.id;
            removeIcon.src = './media/remove.png';
            pinnedButton.addEventListener('click',(event) =>{
                
            })
            // change color 
            const changeColorButton: HTMLButtonElement = document.createElement('button');
            const changeColorImg: HTMLImageElement = document.createElement('img');
            changeColorImg.src='./media/change.png';
            changeColorButton.id=newNote.id;
            changeColorButton.addEventListener('click', (event)=>{
                newNoteArea.style.backgroundColor = `hsl(${Math.random()*360}, 90%, 70%)`;
            });
          
            /// masakra co tu sie dzieje xD
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
            console.log(newNote);
            return newNote;
    }
}


