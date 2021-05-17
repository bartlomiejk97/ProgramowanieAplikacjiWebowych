export class App {
    noteArray : object[] = [];
    noteContainer: HTMLElement;

    constructor() {
        this.bindEventAddNewNote();
    }
    bindEventAddNewNote() : void {
        const addNoteButton = document.getElementById('AddNote') as HTMLButtonElement;
        addNoteButton.addEventListener('click',(event:MouseEvent) => {
            event.preventDefault();
            this.getNoteValue();
        });
    }
    getNoteValue() : void {
        
        const titleNoteValue : HTMLInputElement= document.querySelector('.title');
        const textAreaValue : HTMLTextAreaElement = document.querySelector('.textarea');
        const textArea = textAreaValue.value;
        const titleNote = titleNoteValue.value;
        const newNote : object = {
            title: titleNote,
            text: textArea,
            noteDate:this.getDayNotes()
        }
        this.noteArray.push(newNote);
        console.log(this.noteArray);
    }
    getDayNotes() : string {
        const now : Date = new Date();
        const noteDate : string = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`;
        return noteDate;
    }
    
    createNewNote(){
        tu stowrze nową notatkę 
        append child i creacte new element
    }
       
      
  


}


