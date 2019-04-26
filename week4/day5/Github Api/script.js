(function () {

    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll('script[type="text/x-handlebars-template"]');

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    var commitAmount = 10;
    var apiRoot = "https://api.github.com";
    var endpoints = {
        user:  function (usertoSearch){
            return "/users/" + usertoSearch + "/repos";
        },
        commits:  function (usertoSearch, repo){
            return "/repos/" + usertoSearch + "/" + repo + "/commits";
        }
    };
    

    loadPage();


    function createApiUrl(apiRoot, endpoint){
        return apiRoot+endpoint;
    }

    $(document).keydown(function (event) { 
        if ( event.keyCode == 13){
            var userToSearch = $('input[name="user-to-search"]').val();
            searchRepos(endpoints.user(userToSearch));
        }
    });

    $('#go-button').on('click', function () {
        var userToSearch = $('input[name="user-to-search"]').val();
        searchRepos(endpoints.user(userToSearch));
    });


    function searchRepos(apiEndpoint){
        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();
        var apiUrl = createApiUrl(apiRoot, apiEndpoint);
        var userToSearch = $('input[name="user-to-search"]').val();

        try {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } catch (e) {
            console.log(e);
        }

        makeAjaxCall(apiUrl, username, password, function(reposResponse){
            document.getElementById('display').innerHTML = Handlebars.templates.cards({items: reposResponse});

            // add listers to all tiles
            $('.tile').on('click', function(event) { getCommits(event, username, password , apiRoot, userToSearch); } ); 
        });
    }


    function getCommits(event, username, password , apiRoot, userToSearch){
    
        var repo = event.currentTarget.dataset.id;
        var elementId = repo;

        var commitsBox = $('[data-id="' + elementId + '"]').find('.commits-box');
        if( commitsBox.is(':visible')){
            commitsBox.hide();
        }
        else{

            if ( commitsBox.children().length < 1){

                var apiUrl = createApiUrl(apiRoot, endpoints.commits(userToSearch, repo));
                
                makeAjaxCall(apiUrl, username, password, function(commitsResponse){
                    
                    for (let index = 0; index < commitsResponse.length; index++) {
                        
                        const element = commitsResponse[index];
                        
                        commitsBox.append(Handlebars.templates.commits(element));
                        if ( index == commitAmount ){ break; }
                    }
                });
            }
            commitsBox.show();
        }
    }


    function makeAjaxCall(apiUrl, username, password, callback){

        console.log(' apiurl : ' + apiUrl);
        $.ajax({
            type: "GET",
            url: apiUrl,
            headers:{
                Authorization: 'Basic ' + btoa(username + ":" + password),
            },
            success: callback,
            error: function(error){
                console.log(error);
            }
        });
    }


    function loadPage(){

        try {
            if (localStorage.getItem('username')){
                $('input[name="username"]').val(localStorage.getItem('username'));
            }
            if (localStorage.getItem('password')){
                $('input[name="password"]').val(localStorage.getItem('password'));
            }
        
        } catch (e) {
            console.log(e);
        }
    }

})();