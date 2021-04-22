const pianoKeys: any[] = [
    {
        key: "1",
        soundName: "clap",
        audio: undefined,
    },
    {
        key: "2",
        soundName: "boom",
        audio: undefined,
    },
    {
        key: "3",
        soundName: "hihat",
        audio: undefined,
    },
    {
        key: "4",
        soundName: "kick",
        audio: undefined,
    },
    {
        key: "5",
        soundName: "openhat",
        audio: undefined,
    },
    {
        key: "6",
        soundName: "ride",
        audio: undefined,
    },
    {
        key: "7",
        soundName: "snare",
        audio: undefined,
    },
    {
        key: "8",
        soundName: "tink",
        audio: undefined,
    },
    {
        key: "9",
        soundName: "tom",
        audio: undefined,
    },
    {
        key: "0",
        soundName: "boom",
        audio: undefined,
    }
];


let pressTimeBtnRecording = 0;
let recordMode = false;
let recordedSounds: any[] = [];


const playBtn: HTMLButtonElement | null = document.querySelector("#play");
const stopRecordingBtn: HTMLButtonElement | null = document.querySelector("#stopRecording");
const recordingBtn : HTMLButtonElement | null = document.querySelector("#recording");
const cleanRecordingBtn : HTMLButtonElement | null = document.querySelector("#cleanRecording");







function startRecording(ev : MouseEvent){
    recordMode = true;
    pressTimeBtnRecording = ev.timeStamp;


    console.log(ev.timeStamp);
}

function recordingSound(ev:KeyboardEvent): void{
    if(!recordMode)
    {
        return
    }
    const key = ev.key;
    const time = ev.timeStamp;
    const foundKey = pianoKeys.find((item) => item.key === key);

    if(foundKey){
        recordedSounds.push({
            ...foundKey,
            time,
        })
        console.log("Nagrałeś dzwięk!");
    }
    
}

initializeAudioElements(pianoKeys);
initializeEvents();

function playSound(audio: any) {
    audio.currentTime = 0;
    console.log("Puściłeś audio!");
    audio.play();
    
}

function onSoundRecords(): void {
   recordSounds();
}

function recordSounds(): void {

    recordedSounds.forEach(sound => {
        setTimeout(() => playSound(sound.audio),sound.time - pressTimeBtnRecording);
    });
}

function initializeAudioElements(array:any) {
    array.forEach((item:any) => {
        item.audio = document.querySelector(`[data-sound="${item.soundName}"`);
    });
}

function initializeEvents(){
    
    document.body.addEventListener('keypress', recordingSound);
    playBtn?.addEventListener('click', onSoundRecords);
    recordingBtn?.addEventListener('click',startRecording);
    stopRecordingBtn?.addEventListener('click',stopRecording);
    cleanRecordingBtn?.addEventListener('click',cleanRecording);
    
}

function stopRecording(){
    recordMode = false;
    console.log("Zatrzymałeś nagrywanie!");
}
function cleanRecording()
{
    recordedSounds = [];
    console.log("Wyczyściłeś nagranie!");
}
