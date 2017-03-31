import $ from 'jquery';
import Chart from 'chart.js';
import css from './vendor.js';
import style from '../styles/styles.scss'
import videoStyle from '../styles/video.scss'

$(document).ready(function() {
  $("#changePlayerColor").click(function(){
    var color = $('#picker').val()
    color = "blue"
    alert('change color', color)
    $(".vjs-big-play-button:active").css("color", color);
  })
})
