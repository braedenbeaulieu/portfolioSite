$(document).ready(function(){$("#navToggle").on("click",function(){$("#nav").stop().slideToggle()}),$("#nav").on("click",function(){$(window).width()>640&&$("#nav").stop().slideDown()}),$(window).on("resize",function(){$(window).width()>640&&$("#nav").height()>50?$("#nav").slideDown():$(window).width()>640?$("#nav").fadeIn(10):$(window).width()<=640&&$("#nav").hide()}),$("#logo").on("click",function(){$("HTML, BODY").animate({scrollTop:0},500)}),$("#nav ul li:nth(0)").on("click",function(){var o=$("#about").offset().top;$("HTML, BODY").animate({scrollTop:o-70},500)}),$("#nav ul li:nth(1)").on("click",function(){var o=$("#portfolio").offset().top;$("HTML, BODY").animate({scrollTop:o-70},500)}),$("#nav ul li:nth(2)").on("click",function(){var o=$("#contact").offset().top;$("HTML, BODY").animate({scrollTop:o-70},500)}),$(window).on("scroll",function(){$(window).width()<640&&$("#nav").fadeOut()});var o=$("#about").offset().top;$("header").hide(),$("#about").hide(),$("#portfolio").hide(),$("#contact").hide(),$("#socialMedia").hide(),$("footer").hide(),$("#downArrow").on("click",function(){$("#about").show(),$("footer").show(),$("#socialMedia").show(),$("#contact").show(),$("#portfolio").show(),$("HTML, BODY").animate({scrollTop:o},1500),$("header").delay(1500).fadeIn(500)}),$("#portfolio #portfolio-container #client div:nth-of-type(1)").on("click",function(){window.location.href="http://coolerdesigns.ca"}),$("#portfolio #portfolio-container #client div:nth-of-type(2)").on("click",function(){window.location.href="http://www.handiy.ca"})});