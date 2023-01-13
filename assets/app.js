
$(function () {

    let header = $("#header");
    let introH =  $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#nav_toggle");


    // Fixed Header

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop ();

        checkScroll(scrollOffset);
    })

    function checkScroll(scrollOffset) {


    if (scrollOffset >= introH) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }

    }
    
//Smooth Scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("nav, a").removeClass("active");
       $this.addClass("active");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });


    // Nav Toggle

    navToggle.on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        nav.toggleClass("active");
    });

// Collapse

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            elementId = $this.data('collapse');

        $this.toggleClass("active");
    });


// Slider

     $("[data-slider]").slick ({

         infinite: true,
         fade: false,
         slidesToShow: 1,
         slidesToScroll: 1

     })




})
