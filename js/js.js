$(function(){
'use strict';
var  winh=$(window).height(),
    uphieght =$('.upperbar').innerHeight(),
    navh =$('.navbar').innerHeight();
$('.slider,.carousel-item').height(winh-(uphieght+navh));
//featured work
$('.featured-work ul li').on('click',function (){
    $(this).addClass('active').siblings().removeClass('active');
    //console.log($(this).data('class'));
    if($(this).data('class') === 'all') {
     $('.sh .col-md-3').css('opacity',1);
    }else {
     $('.sh .col-md-3').css('opacity','.08');
     $($(this).data('class')).parent().css('opacity',1);
     
     return;
     }
   })
});

