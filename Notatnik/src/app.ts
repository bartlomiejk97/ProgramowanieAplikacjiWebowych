export class App {
    noteArray : any= [];
    noteContainer: HTMLElement;
    constructor() {
        this.bindEventAddNewNote();
    }
    bindEventAddNewNote() : void {
        const addNoteButton = document.getElementById('addNoteButton') as HTMLButtonElement;
        addNoteButton.addEventListener('click',(event:MouseEvent) => {
            event.preventDefault();
            this.getNoteValue();
        });
    }
    getNoteValue() : void {
        
        const titleNoteValue : HTMLInputElement= document.querySelector('.inputTitle');
        const textAreaValue : HTMLTextAreaElement = document.querySelector('.textArea');
        const textArea = textAreaValue.value;
        const titleNote = titleNoteValue.value;
        const newNote : object = {
            title: titleNote,
            text: textArea,
            noteDate:this.getDayNotes()
        }
        this.noteArray.push(newNote);
        console.log(this.noteArray);

        this.createNewNote(this.noteArray);
    }
    getDayNotes() : string {
        const now : Date = new Date();
        const noteDate : string = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`;
        return noteDate;
    }
    
    createNewNote(noteArray:any){
        const renderHere : HTMLElement = document.querySelector('.renderHere');
        renderHere.innerHTML="";
        noteArray.forEach((element: any) => {
            const newNoteContainer : HTMLDivElement = document.createElement('div');
            newNoteContainer.className="newNotes";
            const newNoteTop : HTMLDivElement = document.createElement('div');
            newNoteTop.className="newNoteTop";
            const newNoteTitle : HTMLDivElement = document.createElement('div');
            newNoteTitle.className="newNotesTitle";
            newNoteTitle.innerHTML = element.title;
            const newNoteArea: HTMLDivElement = document.createElement('div');
            newNoteArea.className="newNotesArea";
            newNoteArea.innerHTML = element.text;
            const newNoteDate : HTMLDivElement = document.createElement('div');
            newNoteDate.innerHTML=element.noteDate;
            renderHere.append(newNoteContainer); // kontener na wszystko
            newNoteContainer.append(newNoteTop,newNoteTitle,newNoteArea);
        });
    }
}


