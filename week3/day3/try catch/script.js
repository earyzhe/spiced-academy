(function () {
    
    $('button').on('mousedown', function(event){
        event.stopPropagation();
        console.log('mouse down');
            
        try {
            console.log('success');
            JSON.parse($('textarea').val())
            showPopup(true);
            
        } catch (e) {

            showPopup(false);
            console.log(e);
        }
    })

    $('#overlay').on('mousedown', hidePopup);

    $('body').on('transitionend', function(event) {
        event.stopPropagation();
        console.log('out of transition');

        if (!$('#popup').hasClass('show')){
            $('#popup').removeClass('show')
            $('#overlay').removeClass('show')
        }
        if ($('#popup').hasClass('transition')){
            $('#popup').removeClass('transition')
            $('#overlay').removeClass('transition')
        }
    });

    function showPopup(success){

        console.log('showing popup');

        $('#popup').addClass('show');
        $('#overlay').addClass('show');

        if (success) {
            $("#text").text('Valid JSON')
        }
        else{
            $("#text").text('Not valid JSON')
        }
        
    }

    function hidePopup(event){
        event.stopPropagation();
        console.log('hiding popup');
        $('#popup').addClass('transition')
        $('#overlay').addClass('transition')
        $('#popup').removeClass('show')
        $('#overlay').removeClass('show')

        // console.log(;$('#popup').prop('className').split(' '))
        
    }
})();