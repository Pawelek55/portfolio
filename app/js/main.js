/*$(document).ready(function(){
    console.log('Pablo');
});*/

//var fromTop = $(window).scrollTop()
//console.log(fromTop);

//var sectionHeight = $('.skills-icon').position();

//console.log(sectionHeight);




//console.log(elementHeight);

//var amountChildren = $('.skills-icon').children();
//console.log(amountChildren);
//
//        console.log(amountChildren.eq(0));
/*for(let i=0; i<amountChildren.length; i++){

    console.log(amountChildren.eq(i).height());
    
}

    if($(this).scrollTop() > ){
//        console.log($('.navbar').outerHeight())
        console.log($(this).scrollTop());
        $('.navbar').addClass('scrolled');
        
    } else{
        $('.navbar').removeClass('scrolled');
    }
});*/
/*        console.log(fromTop);
        console.log(elementHeight);
        console.log(amountChildren.eq(0));*/


//    var elementHeight = $('.skills-icon').children().eq(0).position();

/*console.log($('.skills-icon').children()[0].position());
//console.log($('.skills-icon').children()[4].top);
/*console.log(elementHeight.top + amountChildren.eq(1).height());
console.log(elementHeight.top + amountChildren.eq(5).height());*/

//console.log(elementHeight.top);

//for(let i=0; i<amountChildren.length; i++){



/*   $(document).scroll(function(){
//    if($(this).scrollTop() > amountChildren.eq(0).height()){
    if($(this).scrollTop() > elementHeight.top - 500){
        amountChildren.eq(0).addClass('bounceInLeft');
    } else{
        amountChildren.eq(0).removeClass('bounceInLeft');
        /*Żeby zabrać ikony wystarczy dodać klasę, która ma odrotną animację, badź animacja wyjazdu w drugą stronę*/
//    }
//   });*/

/*       $(document).scroll(function(){
    if($(this).scrollTop() > allElementHeight.top - 500){
        amountChildren.eq(i).addClass('bounceInLeft');
    } else{
        amountChildren.eq(i).removeClass('bounceInLeft');
    }
   });*/


//}


/*1.Wysokość elementu
2. Jeśli okno przeglądarki odjedzie od elementu o 50px to dodaje klasę
3. Dodaje klasę 
4.Jeśli wysokość jest mniejsza niż 50 px od określonego elemntu to go schowaj*/



//for(let i=0; i<amountChildren.length; i++){
//    var positionOfIcon = $('.skills-icon').children(i).scrollTop;
//    console.log(positionOfIcon);
//}
//var js = $('.js').position().top
//console.log($('.js').position().top)

/*Left side*/

/*$(document).scroll(function(){
    console.log(window.innerWidth);
    if($(this).scrollTop() > $('.html').position().top - 550){
        $('.html').addClass('bounceInLeft');
    } else{
        $('.html').removeClass('bounceInLeft');
    }
});*/

$(document).scroll(function () {
    if(window.outerWidth > 1200){
        if ($(this).scrollTop() > $('.html').position().top - 680) {
            $('.html').addClass('bounceInLeft');
        } else {
            $('.html').removeClass('bounceInLeft');
        }
    } else if (window.outerWidth < 1200 && window.outerWidth > 920) {
        if ($(this).scrollTop() > $('.html').position().top - 1100) {
            $('.html').addClass('bounceInLeft');
        } else {
            $('.html').removeClass('bounceInLeft');
        }
    } else if (window.outerWidth < 920 && window.outerWidth > 768) {
        if (($(this).scrollTop() > $('.html').position().top - 750)) {
            $('.html').addClass('bounceInLeft');
            console.log('asdasd');
        } else {
            $('.html').removeClass('bounceInLeft');
        }
    } else if (window.outerWidth < 768) {
        if (($(this).scrollTop() > $('.html').position().top - 1350)) {
            $('.html').addClass('bounceInLeft');
            console.log('Poniżej 768')
        } else {
            $('.html').removeClass('bounceInLeft');
        }
    }
});


$(document).scroll(function () {
    if(window.outerWidth > 1200){
        if ($(this).scrollTop() > $('.js').position().top - 680) {
            $('.js').addClass('bounceInLeft');
        } else {
            $('.js').removeClass('bounceInLeft');
        }
    }else if (window.outerWidth < 1200 && window.outerWidth > 920) {
        if ($(this).scrollTop() > $('.js').position().top - 1100) {
            $('.js').addClass('bounceInLeft');
        } else {
            $('.js').removeClass('bounceInLeft');
        }
    } else if ((window.outerWidth < 920) && (window.outerWidth > 768)) {
        if ($(this).scrollTop() > $('.js').position().top - 750) {
            $('.js').addClass('bounceInLeft');
        } else {
            $('.js').removeClass('bounceInLeft');
        }
    } else if (window.outerWidth < 768) {
        if ($(this).scrollTop() > $('.js').position().top - 1350) {
            $('.js').addClass('bounceInLeft');
        } else {
            $('.js').removeClass('bounceInLeft');
        }
    }
});

$(document).scroll(function () {
    if(window.outerWidth > 1200){
        if ($(this).scrollTop() > $('.bootstrap').position().top - 680) {
            $('.bootstrap').addClass('bounceInLeft');
        } else {
            $('.bootstrap').removeClass('bounceInLeft');
        }
    }else if (window.outerWidth < 1200 && window.outerWidth > 920) {
        if ($(this).scrollTop() > $('.bootstrap').position().top - 1100) {
            $('.bootstrap').addClass('bounceInLeft');
        } else {
            $('.bootstrap').removeClass('bounceInLeft');
        }
    } else if ((window.outerWidth < 920) && (window.outerWidth > 768)) {
        if ($(this).scrollTop() > $('.bootstrap').position().top - 750) {
            $('.bootstrap').addClass('bounceInLeft');
        } else {
            $('.bootstrap').removeClass('bounceInLeft');
        }
    } else if (window.outerWidth < 768) {
        if ($(this).scrollTop() > $('.bootstrap').position().top - 1350) {
            $('.bootstrap').addClass('bounceInLeft');
        } else {
            $('.bootstrap').removeClass('bounceInLeft');
        }
    }
});

$(document).scroll(function () {
    if(window.outerWidth > 1200){
        if ($(this).scrollTop() > $('.gulp').position().top - 680) {
            $('.gulp').addClass('bounceInLeft');
        } else {
            $('.gulp').removeClass('bounceInLeft');
        }
    }else if (window.outerWidth < 1200 && window.outerWidth > 920) {
        if ($(this).scrollTop() > $('.gulp').position().top - 1100) {
            $('.gulp').addClass('bounceInLeft');
        } else {
            $('.gulp').removeClass('bounceInLeft');
        }
    } else if ((window.outerWidth < 920) && (window.outerWidth > 768)) {
        if ($(this).scrollTop() > $('.gulp').position().top - 750) {
            $('.gulp').addClass('bounceInLeft');
        } else {
            $('.gulp').removeClass('bounceInLeft');
        }
    } else if (window.outerWidth < 768) {
        if ($(this).scrollTop() > $('.gulp').position().top - 1250) {
            $('.gulp').addClass('bounceInLeft');
        } else {
            $('.gulp').removeClass('bounceInLeft');
        }
    }
});

$(document).scroll(function () {
    if(window.outerWidth > 1200){
        if ($(this).scrollTop() > $('.rwd').position().top - 680) {
            $('.rwd').addClass('bounceInLeft');
        } else {
            $('.rwd').removeClass('bounceInLeft');
        }
    }else if (window.outerWidth < 1200 && window.outerWidth > 920) {
        if ($(this).scrollTop() > $('.rwd').position().top - 1100) {
            $('.rwd').addClass('bounceInLeft');
        } else {
            $('.rwd').removeClass('bounceInLeft');
        }
    } else if ((window.outerWidth < 920) && (window.outerWidth > 768)) {
        if ($(this).scrollTop() > $('.rwd').position().top - 750) {
            $('.rwd').addClass('bounceInLeft');
        } else {
            $('.rwd').removeClass('bounceInLeft');
        }
    } else if (window.outerWidth < 768) {
        if ($(this).scrollTop() > $('.rwd').position().top - 1350) {
            $('.rwd').addClass('bounceInLeft');
        } else {
            $('.rwd').removeClass('bounceInLeft');
        }
    }
});



/*Right side*/

$(document).scroll(function () {
    if (window.outerWidth > 1200) {
        if ($(this).scrollTop() > $('.css').position().top - 680) {
            $('.css').addClass('bounceInRight');
        } else {
            $('.css').removeClass('bounceInRight');
        }
    } else if (window.outerWidth < 1200 && window.outerWidth > 920) {
        if ($(this).scrollTop() > $('.css').position().top - 1100) {
            $('.css').addClass('bounceInRight');
        } else {
            $('.css').removeClass('bounceInRight');
        }
    } else if ((window.outerWidth < 920) && (window.outerWidth > 768)) {
        if ($(this).scrollTop() > $('.css').position().top - 750) {
            $('.css').addClass('bounceInRight');
        } else {
            $('.css').removeClass('bounceInRight');
        }
    } else if (window.outerWidth < 768) {
        if ($(this).scrollTop() > $('.css').position().top - 1350) {
            $('.css').addClass('bounceInRight');
        } else {
            $('.css').removeClass('bounceInRight');
        }
    }
});

$(document).scroll(function () {
    if (window.outerWidth > 1200) {
        if ($(this).scrollTop() > $('.jquery').position().top - 680) {
            $('.jquery').addClass('bounceInRight');
        } else {
            $('.jquery').removeClass('bounceInRight');
        }
    } else if (window.outerWidth < 1200 && window.outerWidth > 920) {
        if ($(this).scrollTop() > $('.jquery').position().top - 1100) {
            $('.jquery').addClass('bounceInRight');
        } else {
            $('.jquery').removeClass('bounceInRight');
        }
    } else if ((window.outerWidth < 920) && (window.outerWidth > 768)) {
        if ($(this).scrollTop() > $('.jquery').position().top - 750) {
            $('.jquery').addClass('bounceInRight');
        } else {
            $('.jquery').removeClass('bounceInRight');
        }
    } else if (window.outerWidth < 768) {
        if ($(this).scrollTop() > $('.jquery').position().top - 1350) {
            $('.jquery').addClass('bounceInRight');
        } else {
            $('.jquery').removeClass('bounceInRight');
        }
    }
});

$(document).scroll(function () {
    if (window.outerWidth > 1200) {
        if ($(this).scrollTop() > $('.ajax').position().top - 680) {
            $('.ajax').addClass('bounceInRight');
        } else {
            $('.ajax').removeClass('bounceInRight');
        }
    } else if (window.outerWidth < 1200 && window.outerWidth > 920) {
        if ($(this).scrollTop() > $('.ajax').position().top - 1100) {
            $('.ajax').addClass('bounceInRight');
        } else {
            $('.ajax').removeClass('bounceInRight');
        }
    } else if ((window.outerWidth < 920) && (window.outerWidth > 768)) {
        if ($(this).scrollTop() > $('.ajax').position().top - 750) {
            $('.ajax').addClass('bounceInRight');
        } else {
            $('.ajax').removeClass('bounceInRight');
        }
    } else if (window.outerWidth < 768) {
        if ($(this).scrollTop() > $('.ajax').position().top - 1350) {
            $('.ajax').addClass('bounceInRight');
        } else {
            $('.ajax').removeClass('bounceInRight');
        }
    }
});

$(document).scroll(function () {
    if (window.outerWidth > 1200) {
        if ($(this).scrollTop() > $('.sass').position().top - 680) {
            $('.sass').addClass('bounceInRight');
        } else {
            $('.sass').removeClass('bounceInRight');
        }
    } else if (window.outerWidth < 1200 && window.outerWidth > 920) {
        if ($(this).scrollTop() > $('.sass').position().top - 1100) {
            $('.sass').addClass('bounceInRight');
        } else {
            $('.sass').removeClass('bounceInRight');
        }
    } else if ((window.outerWidth < 920) && (window.outerWidth > 768)) {
        if ($(this).scrollTop() > $('.sass').position().top - 750) {
            $('.sass').addClass('bounceInRight');
        } else {
            $('.sass').removeClass('bounceInRight');
        }
    } else if (window.outerWidth < 768) {
        if ($(this).scrollTop() > $('.sass').position().top - 1350) {
            $('.sass').addClass('bounceInRight');
        } else {
            $('.sass').removeClass('bounceInRight');
        }
    }
});

$(document).scroll(function () {
    if (window.outerWidth > 1200) {
        if ($(this).scrollTop() > $('.git').position().top - 680) {
            $('.git').addClass('bounceInRight');
        } else {
            $('.git').removeClass('bounceInRight');
        }
    } else if (window.outerWidth < 1200 && window.outerWidth > 920) {
        if ($(this).scrollTop() > $('.git').position().top - 1100) {
            $('.git').addClass('bounceInRight');
        } else {
            $('.git').removeClass('bounceInRight');
        }
    } else if ((window.outerWidth < 920) && (window.outerWidth > 768)) {
        if ($(this).scrollTop() > $('.git').position().top - 750) {
            $('.git').addClass('bounceInRight');
        } else {
            $('.git').removeClass('bounceInRight');
        }
    } else if (window.outerWidth < 768) {
        if ($(this).scrollTop() > $('.git').position().top - 1350) {
            $('.git').addClass('bounceInRight');
        } else {
            $('.git').removeClass('bounceInRight');
        }
    }
});

/*Smooth scroll*/

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 900);
});

/*Nav in second section*/

$(document).scroll(function () {
    if ($(this).scrollTop() > $('#about').position().top - 10) {
        //        $('#main-nav').addClass('navShow');
        $('#main-nav').fadeIn(400);

    } else {
        $('#main-nav').fadeOut(400);
    }
});

/*Menu hover*/
$(document).ready(function(){
    $('.what').mouseover(function(){
        $('.others').css('opacity', '1');
    });
    $('.what').mouseout(function(){
        $('.others').css('opacity', '0');
    });
});

$(document).ready(function(){
    $('.what1').mouseover(function(){
        $('.others1').css('opacity', '1');
    });
    $('.what1').mouseout(function(){
        $('.others1').css('opacity', '0');
    });
});

$(document).ready(function(){
    $('.what2').mouseover(function(){
        $('.others2').css('opacity', '1');
    });
    $('.what2').mouseout(function(){
        $('.others2').css('opacity', '0');
    });
});

$(document).ready(function(){
    $('.what3').mouseover(function(){
        $('.others3').css('opacity', '1');
    });
    $('.what3').mouseout(function(){
        $('.others3').css('opacity', '0');
    });
});
