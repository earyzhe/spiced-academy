/* eslint-disable indent */
/* eslint-disable no-empty */

(function () {
    // limit amount of countries to fou
    // Begining of country matches
    var countries = [ "Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Netherlands Antilles)", "Bosnia Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of", "Cook Islands", "Costa Rica", "Croatia", "Curacao (Netherlands Antilles)", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland (Republic of)", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kosrae Island", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macau", "Macedonia (FYROM)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Ponape", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Rota", "Russia", "Rwanda", "Saba (Netherlands Antilles)", "Saipan", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "Spain", "Sri Lanka", "St. Barthelemy", "St. Croix", "St. Eustatius (Netherlands Antilles)", "St. John", "St. Kitts and Nevis", "St. Lucia", "St. Maarten (Netherlands Antilles)", "St. Thomas", "St. Vincent and the Grenadines", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tinian", "Togo", "Tonga", "Tortola", "Trinidad and Tobago", "Truk", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Tuvalu", "US Virgin Islands", "Uganda", "Ukraine", "Union Island", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Gorda", "Wallis and Futuna", "Yap", "Yemen", "Zambia", "Zimbabwe" ];
    var resultsNode = $('#results');

    // Get element referances
    var inputNode = $('#input');

    var classNames = {
        highlighted: 'highlighted',
    };

    // Get the current value of the textfield
    inputNode.on('input focus' , findMatches);
    inputNode.on('blur', unfocus);
    $('body');
    

    function findMatches(inputEvent){
        console.log('inrer');
        console.log(inputEvent);
        
        var matches = [];
        var val = inputNode.val(); 
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i].toLowerCase();
            if( country.indexOf(val.toLowerCase()) == 0 ){
                matches.push(countries[i]);
            }
            if ( matches.length == 4 ){
                break;
            }
        }

        if ( matches.length <= 0 ){
            matches.push( '' );
        }

        var resultsHtml = '';

        for (var x = 0; x < matches.length; x++) {
            resultsHtml += '<div class="result">' + matches[x] + '</div>';
        }

        resultsNode.append(resultsHtml);
    }

    function unfocus(event){
        resultsNode.empty();
    }

    function mouseOverResult(event){
        resultsNode.children().each(removeHighlightClass);
        $(event.target).addClass(classNames.highlighted);
    }

    function mousedownOnResult(event){
        console.log(event.target);
        inputNode.val(event.target.text);
        resultsNode.empty();
    }

    function onKeyUp(event){
        if ( fisrtResultIsHighlighted() ){
            return;
        }
        else if ( resultsHaveHighlightClass() ){
            var index = highlightedResultIndex();
            resultsNode.children().eq(index).removeClass(classNames.highlighted);
            resultsNode.children().eq(index - 1).addClass(classNames.highlighted);
        }
        // No result has highlight class
        else {
            resultsNode.children().eq(0).addClass(classNames.highlighted);
        }
    }

    function returnKeyPressed(){
        inputNode.val(textOfHighlightedElement());
        resultsNode.empty();
    }

    function textOfHighlightedElement(){
        var highlightedResult = resultsNode.children().eq(highlightedResultIndex());
        return highlightedResult.text();
    }

    function onKeydown(event){

        if ( lastResultIsHighlighted() ){
            return;
        }
        else if ( resultsHaveHighlightClass() ){
            var index = highlightedResultIndex();
            resultsNode.children().eq(index).removeClass(classNames.highlighted);
            resultsNode.children().eq(index + 1).addClass(classNames.highlighted);
        }
        // No result has highlight class
        else {
            resultsNode.children().eq(0).addClass(classNames.highlighted);
        }
    }

    function fisrtResultIsHighlighted(){
        return resultsNode.children().eq(0).hasClass(classNames.highlighted );
    }

    function highlightedResultIndex(){

        for (var i = 0; i < resultsNode.children().length; i++) {
            if ( resultsNode.children().eq(i).hasClass(classNames.highlighted )){
                return i;
            }
        }
    }

    function lastResultIsHighlighted(){

        var lastResultIsHighlighted = false;
        var lastIndex = resultsNode.children().length - 1;
        if ( resultsNode.children().eq(lastIndex).hasClass(classNames.highlighted )){
            lastResultIsHighlighted = true;
        }
        return lastResultIsHighlighted;
    }

    function resultsHaveHighlightClass(){

        var aResultIsHighlighted = false;
        for (var i = 0; i < resultsNode.children().length; i++) {
            if ( resultsNode.children().eq(i).hasClass(classNames.highlighted )){
                aResultIsHighlighted = true;
                break;
            }
        }
        return aResultIsHighlighted;
    }

    // keydown on textfield
    // if the down arrow is pressed 
      
    // if the up arrow is pressed 
      // - If no result element is highlight add the highlight class to the first result
        // - if a result other tha the last one has the last one has the highlight class,
        //  remove the highlight class from the result that has it and add it tot the next one
        // - If the last result elemnt has the highlight class do nothing
    // if the return arrow is pressed 13
        // text the text contained in the element and set it as the value n the textfield


    // when focus textfielding on
        // do the same thing as the imput
    focus

    // Blurr when textfield loses focus
        // empty and hide the results
    blur

    // if result is clicked on, textfield fills with result and results are dismissed

    // Results dismiss when textfiel does not have focus

    // if no results match then 'No results' appear in the box;
    function removeHighlightClass(){
        console.log('checking if ' + this + ' is highlighted');
        if (this.hasClass(classNames.highlighted)){
            this.removeClass(classNames.highlighted);
        }
    }
})();