var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    function contactForm() {
      window.location.href = "./contact.html";
    }
$(document).ready(function () {
$(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        responsive: [
                            {
                              breakpoint: 1000,
                              settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 700,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 480,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            },

                          ],
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
      });
$('.button').click(function() {
  console.log('fdfd');
	$('.button.active').removeClass('active');
	$(this).addClass('active');
  $('.content.active').removeClass('active');
  var tabNumber = $(this).attr('data-tab');
  var tabToOpen = ".content[data-tab='" + tabNumber + "']"; 
  $(tabToOpen).addClass('active');
})


})

$('.js-tabs').dataTabs({
  event: 'click',
  jqMethodOpen: 'fadeIn',
  jqMethodClose: 'hide'
});