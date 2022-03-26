let homeHeight =$("#home").outerHeight();

$(window).scroll(function(){
    let x =$(window).scrollTop();
    if(x>=homeHeight){
        $(".navbar").addClass('bg-dark');
        $(".navbar").removeClass('bg-transparent');
        $(".btn-up").fadeIn(1000);
    }else{
        $(".navbar").addClass('bg-transparent');
        $(".navbar").removeClass('bg-dark');
        $(".btn-up").fadeOut(1000);
    }
})

$('.btn-up').click(function(){
    $('body,html').animate({
        scrollTop:0

    },1000)
})

$('.navbar  .nav-link').click(function(e){
    let x = $(e.target).attr("href");
    
    let offs = $(x).offset().top;
    $('body,html').animate({
        scrollTop : offs
    },2000)
})

let colors =["red","blue","#fff","ornage","green","#ff206e"];
for(let i=0;i<6;i++){
    $('.option li').eq(i).css('backgroundColor',colors[i]);
}

$('.option i').click(function(){
    let infoWidth = $('.option-slide').outerWidth();
    let x =$('.option').offset().left;

    if(x==0){
        $('.option').animate({left:- infoWidth},3000)
    }else{
        $('.option').animate({left:0},3000)
    }
})

$('.option li').click(function(e){
    let bg = $(e.target).css('backgroundColor');
    $('html').attr('style',`--mainColor:${bg}`)
})

$('.option img').click(function(e){
    let bg = $(e.target).attr('src');
    $('.header').css('backgroundImage',`url(${bg})`)
})



