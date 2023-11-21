
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPLay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'))

// Songs List
let songs = [
    { songName: "Barbaadiyan", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Jhoome Jo Pathaan", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "Beshram Rang", filePath: "3.mp3", coverPath: "3.jpg" },
    { songName: "Maan Meri Jaan", filePath: "4.mp3", coverPath: "4.jpg" },
    { songName: "Jai Veeru", filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: "Thumakeshwari", filePath: "6.mp3", coverPath: "6.jpg" },
    { songName: "Jungle Me Kaand", filePath: "7.mp3", coverPath: "7.jpg" },
    { songName: "Kesariya", filePath: "8.mp3", coverPath: "8.jpg" },
    { songName: "Deva Deva", filePath: "9.mp3", coverPath: "9.jpg" },
    { songName: "Malhari", filePath: "10.mp3", coverPath: "10.jpg" },
    { songName: "Rasiya", filePath: "11.mp3", coverPath: "11.jpg" },
    { songName: "Jawani Teri Aafat", filePath: "12.mp3", coverPath: "12.jpg" },
    { songName: "Apna Bana Le", filePath: "13.mp3", coverPath: "13.jpg" },
    { songName: "Khali Bali", filePath: "14.mp3", coverPath: "14.jpg" },
    { songName: "Khairiyat", filePath: "15.mp3", coverPath: "15.jpg" },
    { songName: "Mere Dil Ye Pukare", filePath: "16.mp3", coverPath: "16.jpg" },
    { songName: "Ra Ra Rakkamma Hindi", filePath: "17.mp3", coverPath: "17.jpg" },
    { songName: "Ra Ra Rakkamma Tamil", filePath: "18.mp3", coverPath: "18.jpg" },
    { songName: "Bazigar O Divine", filePath: "19.mp3", coverPath: "17.jpg" },
    { songName: "Chamma X Go Down", filePath: "20.mp3", coverPath: "17.jpg" },
    { songName: "Mashup Remix 1", filePath: "21.mp3", coverPath: "17.jpg" },
    { songName: "Mashup Remix 2", filePath: "22.mp3", coverPath: "17.jpg" },
    { songName: "Non Stop Music 1", filePath: "23.mp3", coverPath: "17.jpg" },
    { songName: "Non Stop Music 2", filePath: "24.mp3", coverPath: "17.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


// Handle Play/Pause Click
masterPLay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPLay.classList.remove('fa-circle-play');
        masterPLay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPLay.classList.remove('fa-circle-pause');
        masterPLay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {   // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex-1].songName
        audioElement.src = `${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPLay.classList.remove('fa-circle-play');
        masterPLay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex == 1) {
        songIndex = 18;
    }
    else {
        songIndex = songIndex - 1;
    }
    masterSongName.innerText = songs[songIndex-1].songName
    audioElement.src = `${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPLay.classList.remove('fa-circle-play');
    masterPLay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})


document.getElementById('next').addEventListener('click', () => {
    if (songIndex ==18) {
        songIndex = 0;
    }
    else {
        songIndex = songIndex + 1;
    }
    masterSongName.innerText = songs[songIndex-1].songName
    audioElement.src = `${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPLay.classList.remove('fa-circle-play');
    masterPLay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})