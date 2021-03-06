(function () {

    var next;
    var api = 'https://elegant-croissant.glitch.me/spotify';
    var infinateScrolling = checkUriForParameters();

    $('#submit-button').on('click', function () {
        submit();
    });


    $(document).on('keydown', function (event) {
        if(event.keyCode == 13){
            submit();
        }
    });


    $('#more-button').on('click', function () { 
        var userInput = $('input').val().toLowerCase();
        var dropDownItem = $('select').val().toLowerCase();       
        makeApiCall(next, null, userInput, dropDownItem);
    });

    function submit(){

        $('section').empty();
        
        var userInput = $('input').val().toLowerCase();
        var dropDownItem = $('select').val().toLowerCase();
        var data = {
            scroll: 'infinite',
            query: userInput,
            type: dropDownItem
        };
        makeApiCall(api ,data, userInput, dropDownItem);
    }

    function makeApiCall(url ,data, userInput, dropDownItem, completion){
        $.ajax({
            type: "GET",
            url: url,
            data: data,
            timeout: 3000,
            error: function(error){
                console.log(error);
                $('#more-button').hide();
                $('.loader').hide();
            },
            success: function (responseData) {
                
                responseData = responseData.artists || responseData.albums;

                if ( responseData.items.length > 0){
                    if (!infinateScrolling){ $('#more-button').show(); }
                    $('#results-state')
                        .text( dropDownItem.charAt(0).toUpperCase() + dropDownItem.slice(1) + ' results for ' + userInput)
                        .show();
                    
                }else{
                    $('#more-button').hide();
                    $('#results-state').hide();
                }

                // if next exists do the thing on the right
                next = responseData.next && responseData.next.replace('https://api.spotify.com/v1/search', url);
                
                for (let index = 0; index < responseData.items.length; index++) {
                    const element = responseData.items[index];
                    addRowToScreen(element);
                }

                if (infinateScrolling){ checkScroll(); }

                if (completion){ completion();}
            }
        });
    }


    function checkUriForParameters(){
        var url = window.location.href;
        if (url.indexOf('scroll=infinite') >= 0 ){
            return true;
        }
    }


    var checkScrollTimer = 0;

    function checkScroll(){
        var windowHeight = $(window).height();
        var pageHeight = $(document).height();
        var scrollPosition = $(document).scrollTop();
        var bufferPix = 50;

        var hasReachedBottom = (windowHeight + scrollPosition) >= pageHeight + bufferPix || (windowHeight + scrollPosition) >= pageHeight - bufferPix;

        if (hasReachedBottom){

            $('#more-button').hide();
            $('.loader').show();

            (checkScrollTimer);

            var userInput = $('input').val().toLowerCase();
            var dropDownItem = $('select').val().toLowerCase();       
            makeApiCall(next, null, userInput, dropDownItem, function(){
                // one data has come get more
                if ( !infinateScrolling){ $('#more-button').show();}
                $('.loader').hide();
                checkScroll();
            });
        }
        else{
            checkScrollTimer = setTimeout(checkScroll, 500);
        }
    }


    function addRowToScreen(item){
        if (item && item.images[0]){
            var external = '<a href=' + item.external_urls.spotify + '>';
            var image = item.images[0].url || 'http://cdn.osxdaily.com/wp-content/uploads/2019/03/spotify-icon.jpg';
            var prefix = '<div class="tile"><img src=';
            var suffix = '</h3></div></a>';
            var hTML = external + prefix + image + '><h3>' + item.name + suffix;
            $('section').append(hTML);
        }
    }
})();