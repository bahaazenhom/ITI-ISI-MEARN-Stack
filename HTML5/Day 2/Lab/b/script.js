var playPauseButton = document.getElementById('playPuase');
playPauseButton.addEventListener('click', playPause);
var video = document.querySelector('video');
function playPause() {
    
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<img src="pause.png" width="10px" height="15px">';
    } else {
        video.pause();
        playPauseButton.innerHTML = '<img src="play-button-arrowhead.png" width="10px" height="15px">';
    }
}
var muteUnmuteButton = document.getElementById('muteUnmute');
muteUnmuteButton.addEventListener('click', muteUnmute);
function muteUnmute() {
    if (video.muted) {
        video.muted = false;
        muteUnmuteButton.innerHTML = '<img src="volume-up.png" width="15px" height="15px">';
    } else {
        video.muted = true;
        muteUnmuteButton.innerHTML = '<img src="volume-mute.png" width="15px" height="15px">';
    }
}

var volumeControl = document.getElementById('volume');
volumeControl.addEventListener('input', changeVolume);
function changeVolume() {
    console.log(volumeControl.value/100);
    video.volume = volumeControl.value / 100; 
}

var progressBar = document.getElementById('vid-progress');
video.addEventListener('timeupdate', updateProgress);
function updateProgress() {
    progressBar.max = video.duration;
    var percentage = video.currentTime
    progressBar.value = percentage;
}
progressBar.addEventListener('input', newValue);
function newValue() {
    video.currentTime = progressBar.value;
}

var videoList = [];
var videoListElement = document.getElementById('list');

function addVideoToList() {
    console.log("test");
    var request = new XMLHttpRequest();
    request.open('GET', 'list.json');
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var videoData = JSON.parse(request.responseText);
            console.log(videoData);
        
            videoData.forEach(video => {
                
                var item = document.createElement('li');
                item.className = 'video-item';
                item.innerHTML = `
                        ${video.title}
                        <br>
                        <img src="${video.thumbnailUrl}" alt="${video.title}" width="100" height="75">
                        <hr>
                `;
                
                item.addEventListener('click', () => {
                    var vid = document.querySelector('video');
                    vid.src = video.videoUrl;
                    vid.poster = video.thumbnailUrl;
                });
                
                videoListElement.appendChild(item);
                videoList.push(video);
            });
            
        } else {
            console.error('Error loading video list');
        }
    };
    request.send();
}

addVideoToList();

