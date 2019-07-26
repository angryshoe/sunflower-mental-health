var mPlayer = document.getElementById("background_music");
var mPlayAction = document.getElementById("playbutton");

var isPlaying = false;

function playAudio() {
    mPlayer.play();
    isPlaying = true;
    mPlayAction.src = "https://findicons.com/files/icons/1676/primo/128/button_blue_pause.png";
}

function pauseAudio() {
    mPlayer.pause();
    isPlaying = false;
    mPlayAction.src = "https://findicons.com/files/icons/1676/primo/128/button_blue_play.png";
}
function HandleAudio(){
  if(isPlaying == true){
    //Playing already Pause it
    pauseAudio();
  }else{
    //Play the music
    playAudio();
  }
}
