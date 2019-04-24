(function () {

    var next;
    var api = 'https://elegant-croissant.glitch.me/spotify';

    $('#submit-button').on('click', function () {

        $('section').empty();
        
        var userInput = $('input').val().toLowerCase();
        var dropDownItem = $('select').val().toLowerCase();
        var data = {
            query: userInput,
            type: dropDownItem
        };
        makeApiCall(api ,data, userInput, dropDownItem);
    });


    $('#more-button').on('click', function () {        
        makeApiCall(next, null);
    });


    function makeApiCall(url ,data, userInput, dropDownItem){
        console.log('url is ' + url);
        $.ajax({
            type: "GET",
            url: url,
            data: data,
            success: function (responseData) {
                
                responseData = responseData.artists || responseData.albums;

                if ( responseData.items.length > 0){
                    $('#more-button').addClass('show');
                    $('#results-state').text( dropDownItem + ' results for ' + userInput);
                    
                }else{
                    $('#more-button').removeClass('show');
                }

                // if next exists do the thing on the right
                console.log(responseData.next);
                next = responseData.next && responseData.next.replace('https://api.spotify.com/v1/search', url);
                
                for (let index = 0; index < responseData.items.length; index++) {
                    const element = responseData.items[index];
                    addRowToScreen(element);
                }
            }
        });
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