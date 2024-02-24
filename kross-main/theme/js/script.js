/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

// const { FullWindowOverlay } = require("react-native-screens");

(function ($) {
    'use strict';



    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        var parallaxBox = document.getElementById('parallax');
        var
            /* c1left = document.getElementById('l1').offsetLeft,
                       c1top = document.getElementById('l1').offsetTop, */
            c2left = document.getElementById('l2').offsetLeft,
            c2top = document.getElementById('l2').offsetTop,
            c3left = document.getElementById('l3').offsetLeft,
            c3top = document.getElementById('l3').offsetTop,
            c4left = document.getElementById('l4').offsetLeft,
            c4top = document.getElementById('l4').offsetTop,
            c5left = document.getElementById('l5').offsetLeft,
            c5top = document.getElementById('l5').offsetTop,
            c6left = document.getElementById('l6').offsetLeft,
            c6top = document.getElementById('l6').offsetTop,
            c7left = document.getElementById('l7').offsetLeft,
            c7top = document.getElementById('l7').offsetTop,
            c8left = document.getElementById('l8').offsetLeft,
            c8top = document.getElementById('l8').offsetTop,
            c9left = document.getElementById('l9').offsetLeft,
            c9top = document.getElementById('l9').offsetTop;

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
            mouseParallax('l2', c2left, c2top, x, y, 25);
            mouseParallax('l3', c3left, c3top, x, y, 20);
            mouseParallax('l4', c4left, c4top, x, y, 35);
            mouseParallax('l5', c5left, c5top, x, y, 30);
            mouseParallax('l6', c6left, c6top, x, y, 45);
            mouseParallax('l7', c7left, c7top, x, y, 30);
            mouseParallax('l8', c8left, c8top, x, y, 25);
            mouseParallax('l9', c9left, c9top, x, y, 40);
        };

    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    /* ########################################### /hero parallax ############################################## */

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Shuffle js filter and masonry
    // var Shuffle = window.Shuffle;
    // var jQuery = window.jQuery;

    // var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
    //     itemSelector: '.shuffle-item',
    //     buffer: 1
    // });

    // jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
    //     var input = evt.currentTarget;
    //     if (input.checked) {
    //         myShuffle.filter(input.value);
    //     }
    // });



})(jQuery);


//prie calcualtion
// document.getElementById('estimate-cost').addEventListener('click', function() {

//     const one_subject = {
//         1: 22,
//         2: 20,
//         3: 18,
//         4: 16,
//         5: 14
//     }

//     const two_subjects = {
//         2: 24,
//         3: 22,
//         4: 20,
//         5: 18
//     }

//     const three_subjects = {
//         3: 26,
//         4: 24,
//         5: 22
//     }

//     const four_subjects = {
//         4: 28,
//         5: 26
//     }



//     var subjects = document.getElementById('subjects');
//     var lessons = document.getElementById('lessons');
//     var months = document.getElementById('months');
//     var subjects_options = subjects.options[subjects.selectedIndex].value;
//     var lessons_options = lessons.options[lessons.selectedIndex].value;
//     var months_options = months.options[months.selectedIndex].value;

//     if (subjects_options == '1'){
//         var package = one_subject
//     } else if (subjects_options == '2'){
//         var package = two_subjects
//     }else if (subjects_options == '3'){
//         var package = three_subjects
//     }else{
//         var package = four_subjects
//     }
//     var lessons_per_month = package[lessons_options] * lessons_options * 4;
//     var lessons_total = lessons_per_month * months_options;
//     var output = 'CAD ' + lessons_total.toFixed(2);
//     console.log(output)
//     document.getElementById('price-output').innerHTML = 'Predicted Total Payment: ' + output;
//     document.getElementById('price-output').classList.add('price-output');
// })

// //Outputting values

// document.querySelectorAll("#subjects option").forEach(opt => {
//     if (opt.value == '2') {
//         console.log('asd')
//     }
// });

//my dataset
const company_values = [
    {
        value_name: 'Fully Online',
        description: 'Compass Tutoring is a completely online platform. All registrations, processing, pairing with tutors, communications, and of course, lessons, take place online. You can be in any corner of the world and in any timezone, while you comfortably use our services. ',
        icon: '',
        id:1,
    },
    {
        value_name: 'Verified Business',
        description: 'Compass Tutoring is an official and registered Canadian business. We conduct all of our business operations fairly and honestly, with all of our clients and contractors constantly held in mind. We run our business according to modern and respected standards. ',
        icon: '',
        id:2,
    },
    {
        value_name: 'Trusted by Clients',
        description: 'We have served at least 30 different students from Canada and the USA. More than 80% of our students keep on using our services after they finish their first tutoring session. More than half of our students stick to the tutors that we initially paired them with.',
        icon: '',
        id:3,
    },
    {
        value_name: 'Experienced Tutors',
        description: 'All of the tutors that work in our organization have previous tutoring experience. In addition, we personally assess the skills and tutoring experience of our tutors during our interviews, before we decide to hire them.',
        icon: '',
        id:4,
        class: 'mobile-hide'
    },
    {
        value_name: 'Personalized Help',
        description: 'We offer a lot of personalized assistance and guidance to our clients. One of the ways we do this is through our free 30-minute assessments with the students and the parents. Even when the student has already been paired with the tutor, our team still continues to constantly monitor and support them.',
        icon: '',
        id:5,
        class: 'mobile-hide'
    },
    {
        value_name: 'Guaranteed Refund',
        description: 'We offer a complete refund to all of our students after the first 2 lessons. Even though our students greatly trust us and never request a refund, we understand that having such an option increases the trust between our organization and our clients. ',
        icon: '',
        id:6,
        class: 'mobile-hide'
    }
]

var section = document.getElementById('values-sec');
for (const value of company_values){
    let value_box = document.createElement('div'); value_box.classList.add('value-box'); value_box.id= 'value-'.concat(value.id); value_box.classList.add(value.class);
        let outer = document.createElement('div'); outer.classList.add('value-box-outer')
        let value_name = document.createElement('h3'); value_name.innerHTML=value.value_name; value_name.id= 'value-'.concat(value.id);  value_name.style.textAlign = 'center';
        value_box.appendChild(value_name);
        let value_dscr = document.createElement('p'); value_dscr.innerHTML=value.description; value_dscr.classList.add('hide'); value_dscr.id = 'value-'.concat(value.id).concat('dscr');
        value_box.appendChild(value_dscr)
        // let arrow = document.createElement('i'); arrow.classList.add('fa'); arrow.classList.add('fa-angle-down'); arrow.style.display='flex'; arrow.style.justifyContent='center'; arrow.style.marginTop='3%'; arrow.id='value-'.concat(value.id).concat('arrow')
        // value_box.appendChild(arrow);
        outer.appendChild(value_box);
        section.appendChild(outer);
}


//Applying  a function
var boxes = document.getElementsByClassName('value-box');
for (var i = 0; i < boxes.length; i++){
    document.getElementById(boxes[i].id).addEventListener('click', function(e) {
        var ele_id = e.target.id;
        var dscr_id = ele_id + 'dscr';
        // var ele_arrow = ele_id + 'arrow';
        document.getElementById(dscr_id).classList.toggle('hide');
        // document.getElementById(ele_arrow).classList.toggle('fa-angle-down');
        // document.getElementById(ele_arrow).classList.toggle('fa-angle-up');
    })
    document.getElementById(boxes[i].id + 'dscr').addEventListener('click', function(e) {
        var ele_id = e.target.id;
        document.getElementById(ele_id).classList.toggle('hide');
        // document.getElementById(ele_arrow).classList.toggle('fa-angle-down');
        // document.getElementById(ele_arrow).classList.toggle('fa-angle-up');
    })
//     document.getElementById(boxes[i].id + 'arrow').addEventListener('click', function(e) {
//         var ele_id = e.target.id;
//         document.getElementById(ele_id).classList.toggle('hide');
//     })
}


document.getElementById('load-more-values').addEventListener('click', function() {
    var boxes = document.getElementsByClassName('value-box');
    for (var i = 0; i < boxes.length; i++){
        if (boxes[i].classList.contains('mobile-hide')){
            document.getElementById(boxes[i].id).classList.toggle('mobile-hide')
        }
    }
    document.getElementById('load-more-values').style.display = 'none'
})


//FAQ section
const FAQ = [
    {
        question:'When do I have to pay for my sessions?',
        answer:'If you are a new student and this is your first time registering, you must pay for your tutoring session after the first free lesson before proceeding to your scheduled lessons. If you are a returning student, you have to pay for your tutoring session before you resume lessons with your tutor. An invoice outlining the payment will be emailed to you.',
        id: '1'
    },
    {
        question:'What happens if the student cannot make it to the tutoring lesson?',
        answer: 'If the student cannot make it to a lesson, they must warn their tutor in advance and reschedule the lesson to a different day. The same applies to a tutor who cannot make it to a lesson. The tutoring session will be over when all the lessons that were paid for by the student are finished, even if that means that the session will be prolonged. ',
        id: '2'
    },
    {
        question:'What do I do when my tutoring sessions is over?',
        answer:'When your tutoring session is over, you can choose to register for another tutoring session on our website if you are interested in continuing using our services. However, if you don’t want to continue using our services, or would like to take a break, we would greatly appreciate it if you could please send us a quick email explaining your decision. ',
        id: '3'
    }
]

var section2 = document.getElementById('faq-section');
for (const faq of FAQ){
    let question_box = document.createElement('div'); question_box.classList.add('question-box'); question_box.id = faq.id.concat('-faq');
        let question = document.createElement('h3'); question.id=faq.id.concat('-faq'); question.innerHTML = faq.id.concat('. ').concat(faq.question);
        question_box.appendChild(question);

        let answer = document.createElement('p'); answer.id = faq.id.concat('-faq').concat('-ans'); answer.innerHTML = faq.answer; 
        question_box.appendChild(answer); 

    section2.appendChild(question_box);
}

var question_blocks = document.getElementsByClassName('question-box');
for (var i = 0; i < question_blocks.length; i++) {
    document.getElementById(question_blocks[i].id).addEventListener('click', function(e) {
        var ele_id = e.target.id;
        var ans_id = ele_id + '-ans';
        document.getElementById(ans_id).classList.toggle('hide')
        document.getElementById(ans_id).addEventListener('click', function(e) {
            document.getElementById(e.target.id).classList.toggle('hide')
        })
    })
}

//free 30-min assessment form
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    alert('We have received your 30-minute assessment request. Our team will email you the google meet link to access your assessment very soon!');
    createInvoice();
  });
});