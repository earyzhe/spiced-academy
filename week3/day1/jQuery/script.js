/* eslint-disable no-multiple-empty-lines */
/* eslint-disable key-spacing */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable indent */

(function () {

    var red = false;
    console.log($);

    // eslint-disable-next-line semi

    // Change all divs with the appropreate css Styles and attributes.
    // The css method accepts css proprties as an object.

    // $('div').css({
    //     background: 'black',
    //     border: '5px solid yellow',
    //     margin: '100px'
    // });

    // Creates a new DOM node and Styles in Css
    $('<h1>jquery is fuuuuuuun!</h1>').css({
        color: 'red',
        // only add quotes if the css property contains ""
        'font-family': 'Helventica Neue',
        'font-size:': '100px'
        
    }).appendTo('body');

    // Adds a class to an element
    $('<h1>jquery is fuuuuuuun!</h1>')
    .addClass('header')
    .appendTo('body')

    console.log($('h1'));
    
    // literally replaces everything from within the h1 tag with "something else"
    $('h1').html('something else');

    // Add click event lister
    $('.sky').on('click', function(e){
        $('.sky').css({
                background: red ? 'tomato' : 'blue'
        })
        red = !red;
        e.stopPropagation();
    })

    // jQuery methods can only be applied to jQuery objects
    $('.sky').on('mouseover', function(e){

        $(e.target).css({
                background: 'purple'
        })
        red = !red;
        e.stopPropagation()
    })

    var leftVal = 50;

    // MOVE PLAYER TO THE RIGHT
    $('.board').on('click', function(){
        console.log('board clicked');
        $('.player').css({
            left: leftVal
        })
        leftVal += Math.floor(Math.random()*20);
    });
    
})()
