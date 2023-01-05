
console.log("this is video")
window.onload = function(){ 
    const body = document.querySelector('body');
const playerContainer = document.querySelector('.player-container');
const media = document.querySelector('.video-selector');
const playerProgressbar = document.querySelector('.range-container')
const playerProgressbarUpper = document.querySelector('.range-container .upper')
const playerProgressbarLower = document.querySelector('.range-container .lower')
const playerProgressbarInput = document.querySelector('.range-container input')
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const rwd = document.querySelector('.rwd');
const stopMedia = document.querySelector('.stop');
const fwd = document.querySelector('.fwd');
const runningTime = document.querySelectorAll('.digital-timer span')[0];
const totalTime = document.querySelectorAll('.digital-timer span')[1];
const fullscreenSpan = document.querySelector('.fullscreen span')
const fullscreen = document.querySelectorAll('.fullscreen svg')[0]
const exitFullscreen = document.querySelectorAll('.fullscreen svg')[1]
const picInPicMode = document.querySelector('.pic-in-pic-mode')
const vol_100 = document.querySelectorAll('.volume svg')[0]
const vol_60 = document.querySelectorAll('.volume svg')[1]
const vol_30 = document.querySelectorAll('.volume svg')[2]
const vol_0 = document.querySelectorAll('.volume svg')[3]
const vol_input = document.querySelector('.volume input')
const previewProgress = document.querySelector('.preview-progress')
const previewArea = document.querySelector('.player-controls .preview-area')
const previewAreaSpan = document.querySelector('.player-controls .preview-area span')
const previewAreaImg = document.querySelector('.player-controls .preview-area img')
const loadedProgress = document.querySelector('.range-container .loaded-progress')

playerProgressbarLower.onmousemove = (e) => progressbarMouseMove(e)
playerProgressbarInput.oninput = () => progressbarInput(true)
playerProgressbar.onclick = () => progressbarClick()
playerProgressbar.onmouseover = (e) => progressbarMouseover(e)
playerProgressbar.onmousemove = (e) => progressbarMouseover(e)
playerProgressbar.onmouseout = (e) => progressbarMouseout(e)
playerProgressbar.onmousedown = () => updatePlayerTime()
playerProgressbarInput.onchange = () => updatePlayerTime()
playBtn.onclick = () => playMedia()
pauseBtn.onclick = () => pauseMedia()
rwd.onclick = () => timeBackward()
stopMedia.onclick = () => stopPlayer()
fwd.onclick = () => timeForward()
media.onloadeddata = () => playerLoadedData()
media.ontimeupdate = () => playerProgressData()
media.onended = () => stopPlayer()
media.onprogress = () => playerLoadedProgress()
media.oncanplay = () => playerLoadedProgress()
console.log("this is video")
// player progressbar
setTimeout(()=>{
    progressbarMouseout();
    setTimeout(()=>playerProgressbarUpper.style.setProperty('--thumb-opacity', '1'), 300)
}, 1000)
function progressbarMouseMove(e) {
    const rect = playerProgressbarLower.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
    playerProgressbarInput.value = percent*100
}
function progressbarInput(v){
    playerProgressbarUpper.style.width = playerProgressbarInput.value + '%'
    if(v){media.setAttribute('data-changing', 'true')}
    pauseMedia(true)
}
function progressbarClick(){
    if(media.getAttribute('data-pause') !== 'true'){
        playMedia()
        media.setAttribute('data-pause', 'false')
    }
}
function progressbarMouseover(event){
    const rect = playerProgressbar.getBoundingClientRect()
    var x = event.clientX;
    if(x < rect.right-7 && x > rect.left+7){
        playerProgressbarUpper.style.setProperty('--thumb-width', '15px');
        playerProgressbarUpper.style.setProperty('--thumb-height', '15px');
        playerProgressbar.style.setProperty('--slider-height', '8px');
        previewProgress.style.opacity = '1';
    }else{
        progressbarMouseout(event)
    }
}
function progressbarMouseout(event){
    playerProgressbarUpper.style.setProperty('--thumb-width', '0px');
    playerProgressbarUpper.style.setProperty('--thumb-height', '0px');
    playerProgressbar.style.setProperty('--slider-height', '4px');
    previewProgress.style.opacity = '0';
    previewArea.style.display = 'none'
}

// basic player controls
function updatePlayerTime(){
    media.currentTime = (playerProgressbarInput.value*media.duration)/100
    playerProgressbarUpper.style.width = playerProgressbarInput.value + '%'
    media.setAttribute('data-changing', 'false')
}
function playMedia() {
	media.play();
	playBtn.classList.add('hide-controls')
	pauseBtn.classList.remove('hide-controls')
    media.setAttribute('data-pause', 'false')
}
function pauseMedia(v) {
    media.pause();
	pauseBtn.classList.add('hide-controls')
	playBtn.classList.remove('hide-controls')
    if(!v){media.setAttribute('data-pause', 'true')}
}
function timeBackward() {
	media.currentTime -= 5;
}
function stopPlayer() {
    pauseMedia();
    media.currentTime = 0
}
function timeForward() {
	media.currentTime += 5;
}
// for full screen
fullscreenSpan.onmouseover = () => {
    fullscreen.classList.add('hover-effect')
    setTimeout(()=>fullscreen.classList.remove('hover-effect'), 200)
}
fullscreenSpan.onclick = () => goFullScreen(true)
window.onresize = () => goFullScreen(false)
function goFullScreen(v){
    var state = document.webkitIsFullScreen;
    if (state == false && v == true) {
        playerContainer.requestFullscreen()
        document.documentElement.style.setProperty('--player-width', window.innerWidth + 'px');
        media.classList.add('goes-full')
        fullscreen.classList.add('hide-fullscreen')
        exitFullscreen.classList.remove('hide-fullscreen')
        body.style.overflowX = 'hidden'
        setTimeout(()=>fullscreen.setAttribute('data-fullscreen', 'true'), 200)
    }else if(state == true &&  v == true){
        document.exitFullscreen();
    }else if(state == true && v == false){
        document.documentElement.style.setProperty('--player-width', window.innerWidth + 'px');
    }
}
playerContainer.onfullscreenchange = () => {
    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    if(state == false){
        if(fullscreen.getAttribute('data-fullscreen') == 'true'){
            media.classList.remove('goes-full')
            fullscreen.classList.remove('hide-fullscreen')
            exitFullscreen.classList.add('hide-fullscreen')
            fullscreen.setAttribute('data-fullscreen', 'false')
            document.documentElement.style.setProperty('--player-width', '800px');
            setTimeout(()=>body.style.overflowX = 'auto', 200)
        }
    }
};
// for picture in picture mode
picInPicMode.onclick = () => {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else {
      if (document.pictureInPictureEnabled) {
        media.requestPictureInPicture();
      }
    }
}
media.onleavepictureinpicture = e => {
    const was_playing = !media.paused
    if(was_playing){
        setTimeout(()=>playMedia(), 0)
    }else{
        setTimeout(()=>pauseMedia(), 0)
    }

}
// for volume controls
function showVolumeIcons(v){
    if(Boolean(media.webkitAudioDecodedByteCount)){
        if(v >= 0.6){
            volumeIconDecider(0)
        }else if(v >= 0.3){
            volumeIconDecider(1)
        }else if(v > 0){
            volumeIconDecider(2)
        }else{
            volumeIconDecider(3)
        }
    }else{
        volumeIconDecider(3)
        vol_input.style.display = 'none'
        vol_0.style.fill = '#afafaf'
    }
}
function volumeIconDecider(v){
    var iconsList = ['100', '60', '30', '0']
    for(var i = 0; i < 4; i++){
        if(i == v){
            document.querySelector('.volume .vol-' + iconsList[i]).style.display = 'block'
        }else{
            document.querySelector('.volume .vol-' + iconsList[i]).style.display = 'none'
        }
    }
}
vol_input.oninput = () => {
    media.volume = vol_input.value;
    showVolumeIcons(vol_input.value)
}
// preview
playerProgressbarInput.onmouseover = (e) => showPreviewProgress(e)
playerProgressbarInput.onmousemove = (e) => showPreviewProgress(e)
function showPreviewProgress(e){
    const rect = playerProgressbarLower.getBoundingClientRect()
    const percent = (Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width)*100;
    previewProgress.style.setProperty('--preview-progress-width', percent + '%')
    previewArea.style.display = 'block'
    var w = Number(window.getComputedStyle(playerProgressbarLower).width.replace(/[^0-9]/g, ''))
    if((percent*w)/100 <= 85){
        previewArea.style.left = '0px'
    }else if((percent*w)/100 >= w-85){
        previewArea.style.left = w-170 + 'px'
    }else{
        previewArea.style.left = ((percent*w)/100)-85 + 'px'
    }
    var sortedTime = timeSorter((percent*media.duration)/100);
    if(sortedTime.charAt(0) == 0){
        sortedTime = sortedTime.substring(1, sortedTime.length);
    }
    previewAreaSpan.innerHTML = sortedTime;
    var previewImageNumber = (Math.floor((percent-0.01)/4))+1;
    if(previewImageNumber > 0){ previewAreaImg.src = `frames/frame-${previewImageNumber}.png` }
}
// for loaded data progress
function playerLoadedProgress() {
    var duration = media.duration;
    for (var i = 0; i <= duration; i++) {
        try { var totalBuffered = media.buffered.end(i) }catch {}
        var percentBuffered = (totalBuffered / duration) * 100;
        loadedProgress.style.width = percentBuffered + '%'
    }
}
// give currentTime on timeupdate
function playerProgressData(){
    var sortedTime = timeSorter(media.currentTime)
    if(sortedTime.charAt(0) == 0){
        sortedTime = sortedTime.substring(1, sortedTime.length);
    }
    runningTime.innerHTML = sortedTime
    if(media.getAttribute('data-changing') == 'false'){
        playerProgressbarUpper.style.width = (media.currentTime*100)/media.duration + '%'
    }
}
// give total duration of video
function playerLoadedData() {
    var sortedTime = timeSorter(media.duration)
    if(sortedTime.charAt(0) == 0){
        sortedTime = sortedTime.substring(1, sortedTime.length);
    }
    totalTime.innerHTML = sortedTime
    // show volume icons after video loaded
    showVolumeIcons(vol_input.value);
}

// convert seconds to hours, minutes and seconds
function timeSorter(v) {
    if (v > 0) {
        var timeGiven = v;
        var hours = minutes = seconds = 0;
        var calcHours = timeGiven / 3600;
        hours = Math.trunc(calcHours);
        var calcMinutes = Number('.' + calcHours.toString().split('.')[1]) * 60;
         const minutes = Math.trunc(calcMinutes);
        if (minutes.toString().length == 1) { minutes = '0' + minutes; }
        var calcSeconds = Number('.' + calcMinutes.toString().split('.')[1]) * 60;
        var seconds = Math.trunc(calcSeconds);
        console.log("this is video")
        if (seconds.toString().length == 1) { seconds = '0' + seconds; }
        if (hours == 0) {
            return `${minutes}:${seconds}`
        } else if (hours == 0 && minutes == 0) {
            return `00:${seconds}`
        } else {
            return `${hours}:${minutes}:${seconds}`
        }
    } else {
        return `00:00`
    }
}
};
 