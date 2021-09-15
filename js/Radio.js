'use strict';


// 要素
const music = new Audio('Yukari_voice_Radio/Radio01.mp3');
const play = document.getElementById('play');
var img_play = document.getElementById('img_play');


// 再生ボタン
play.addEventListener('click', function(){
    if(!music.paused){
        img_play.src="img/play.jpg";
        music.pause();
    }else{
        img_play.src="img/pause.jpg";
        music.play();
    }
});
