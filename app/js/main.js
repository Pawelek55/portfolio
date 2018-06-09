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

$(document).scroll(function(){
    if($(this).scrollTop() > $('.html').position().top - 650){
        $('.html').addClass('bounceInLeft');
    } else{
        $('.html').removeClass('bounceInLeft');
    }
});


$(document).scroll(function(){
    if($(this).scrollTop() > $('.js').position().top - 650){
        $('.js').addClass('bounceInLeft');
    } else{
        $('.js').removeClass('bounceInLeft');
    }
});


$(document).scroll(function(){
    if($(this).scrollTop() > $('.ajax').position().top - 650){
        $('.ajax').addClass('bounceInLeft');
    } else{
        $('.ajax').removeClass('bounceInLeft');
    }
});


$(document).scroll(function(){
    if($(this).scrollTop() > $('.gulp').position().top - 650){
        $('.gulp').addClass('bounceInLeft');
    } else{
        $('.gulp').removeClass('bounceInLeft');
    }
});

$(document).scroll(function(){
    if($(this).scrollTop() > $('.rwd').position().top - 650){
        $('.rwd').addClass('bounceInLeft');
    } else{
        $('.rwd').removeClass('bounceInLeft');
    }
});

/*Right side*/

$(document).scroll(function(){
    if($(this).scrollTop() > $('.css').position().top - 650){
        $('.css').addClass('bounceInRight');
    } else{
        $('.css').removeClass('bounceInRight');
    }
});

$(document).scroll(function(){
    if($(this).scrollTop() > $('.jquery').position().top - 650){
        $('.jquery').addClass('bounceInRight');
    } else{
        $('.jquery').removeClass('bounceInRight');
    }
});


$(document).scroll(function(){
    if($(this).scrollTop() > $('.bootstrap').position().top - 650){
        $('.bootstrap').addClass('bounceInRight');
    } else{
        $('.bootstrap').removeClass('bounceInRight');
    }
});


$(document).scroll(function(){
    if($(this).scrollTop() > $('.sass').position().top - 650){
        $('.sass').addClass('bounceInRight');
    } else{
        $('.sass').removeClass('bounceInRight');
    }
});


$(document).scroll(function(){
    if($(this).scrollTop() > $('.git').position().top -650){
        $('.git').addClass('bounceInRight');
    } else{
        $('.git').removeClass('bounceInRight');
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

$(document).scroll(function(){
   if($(this).scrollTop() > $('#about').position().top - 10){
//        $('#main-nav').addClass('navShow');
        $('#main-nav').fadeIn(400);
       
   } else{
       $('#main-nav').fadeOut(400);
   }
});



