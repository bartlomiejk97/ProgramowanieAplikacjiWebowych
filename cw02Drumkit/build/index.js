var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var pianoKeys = [
    {
        key: "1",
        soundName: "clap",
        audio: undefined
    },
    {
        key: "2",
        soundName: "boom",
        audio: undefined
    },
    {
        key: "3",
        soundName: "hihat",
        audio: undefined
    },
    {
        key: "4",
        soundName: "kick",
        audio: undefined
    },
    {
        key: "5",
        soundName: "openhat",
        audio: undefined
    },
    {
        key: "6",
        soundName: "ride",
        audio: undefined
    },
    {
        key: "7",
        soundName: "snare",
        audio: undefined
    },
    {
        key: "8",
        soundName: "tink",
        audio: undefined
    },
    {
        key: "9",
        soundName: "tom",
        audio: undefined
    },
    {
        key: "0",
        soundName: "boom",
        audio: undefined
    }
];
var pressTimeBtnRecording = 0;
var recordMode = false;
var recordedSounds = [];
var playBtn = document.querySelector("#play");
var stopRecordingBtn = document.querySelector("#stopRecording");
var recordingBtn = document.querySelector("#recording");
var cleanRecordingBtn = document.querySelector("#cleanRecording");
document.body.addEventListener('keypress', playSoundWithKeybord);
function playSoundWithKeybord(ev) {
    var clap = document.querySelector('data-sound="clap"');
    clap.currentTime = 0;
    clap.play();
}
function startRecording(ev) {
    recordMode = true;
    pressTimeBtnRecording = ev.timeStamp;
    console.log(ev.timeStamp);
}
function recordingSound(ev) {
    if (!recordMode) {
        return;
    }
    var key = ev.key;
    var time = ev.timeStamp;
    var foundKey = pianoKeys.find(function (item) { return item.key === key; });
    if (foundKey) {
        recordedSounds.push(__assign(__assign({}, foundKey), { time: time }));
        console.log("Nagrałeś dzwięk!");
    }
}
initializeAudioElements(pianoKeys);
initializeEvents();
function playSound(audio) {
    audio.currentTime = 0;
    console.log("Puściłeś audio!");
    audio.play();
}
function onSoundRecords() {
    recordSounds();
}
function recordSounds() {
    recordedSounds.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.audio); }, sound.time - pressTimeBtnRecording);
    });
}
function initializeAudioElements(array) {
    array.forEach(function (item) {
        item.audio = document.querySelector("[data-sound=\"" + item.soundName + "\"");
    });
}
function initializeEvents() {
    document.body.addEventListener('keypress', recordingSound);
    playBtn === null || playBtn === void 0 ? void 0 : playBtn.addEventListener('click', onSoundRecords);
    recordingBtn === null || recordingBtn === void 0 ? void 0 : recordingBtn.addEventListener('click', startRecording);
    stopRecordingBtn === null || stopRecordingBtn === void 0 ? void 0 : stopRecordingBtn.addEventListener('click', stopRecording);
    cleanRecordingBtn === null || cleanRecordingBtn === void 0 ? void 0 : cleanRecordingBtn.addEventListener('click', cleanRecording);
}
function stopRecording() {
    recordMode = false;
    console.log("Zatrzymałeś nagrywanie!");
}
function cleanRecording() {
    recordedSounds = [];
    console.log("Wyczyściłeś nagranie!");
}
