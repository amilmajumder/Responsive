$(function () {
    //scroll menu
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 50) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
    });


    // banner js
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    //wow js
    new WOW().init();


    // typed js
    $(".typed").typed({
        strings: ["Ambition.", "Success.", "Goal."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });

    // slider js here
    $('.slide-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed:1000,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
        autoplaySpeed: 2000,
      }); 

});
