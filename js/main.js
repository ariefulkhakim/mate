    
    // =====typewrite-effect=====
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

    // =====progress-bar=====

    $(function () { 
      $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
    });  

    $( window ).scroll(function() {   
      if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
      $(".progress-bar").each(function(){
        each_bar_width = $(this).attr('aria-valuenow'); // every each progress-bar's actual value gets in variable
        $(this).width(each_bar_width + '%'); // and every singel progress-bar puts in action, and help with css action gets an smooth animation
      });
           
      }  
    });

    // wow
    new WOW().init();
    
    /*
        Contact form
    */
    $('.c-form-box form').submit(function(e) {
        e.preventDefault();
        var this_form_parent = $(this).parents('.c-form-box');
        var postdata = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {               
                
                $('.c-form-box form label[for="c-form-name"] .contact-error').fadeOut('fast', function(){
                    if(json.nameMessage != '') {
                        $(this).html('(' + json.nameMessage + ')').fadeIn('fast');
                    }
                });
                $('.c-form-box form label[for="c-form-email"] .contact-error').fadeOut('fast', function(){
                    if(json.emailMessage != '') {
                        $(this).html('(' + json.emailMessage + ')').fadeIn('fast');
                    }
                });
                $('.c-form-box form label[for="c-form-subject"] .contact-error').fadeOut('fast', function(){
                    if(json.subjectMessage != '') {
                        $(this).html('(' + json.subjectMessage + ')').fadeIn('fast');
                    }
                });
                $('.c-form-box form label[for="c-form-message"] .contact-error').fadeOut('fast', function(){
                    if(json.messageMessage != '') {
                        $(this).html('(' + json.messageMessage + ')').fadeIn('fast');
                    }
                });
                if(json.nameMessage == '' && json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
                    this_form_parent.find('.c-form-top').fadeOut('fast');
                    this_form_parent.find('.c-form-bottom').fadeOut('fast', function() {
                        this_form_parent.append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
                        // reload background
                        $('.c-form-container').backstretch("resize");
                    });
                }
                
            }
        });
    });

   