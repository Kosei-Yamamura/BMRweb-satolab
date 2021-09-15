'use strict';


// 要素
const music = new Audio('../Yukari_vioce_Radio/Radio01.mp3');
const play = document.getElementById('play');
var img_play = document.getElementById('img_play');
var img_pause = document.images['img_pause'];


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