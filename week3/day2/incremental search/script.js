/* eslint-disable indent */
/* eslint-disable no-empty */

(function (countries) {
    
    // Get element referances
    var documentNode = $('body');
    var resultsNode = $('#results');
    var inputNode = $('#input');

    var classNames = {
        highlighted: 'highlighted',
        hide: 'hide'
    };

    var eventType = {
        click: "click", 
        keydown: "keydown",  
        input: "input", 
        focus: "focus", 
        blur: "blur",
        mousedown: "mousedown",
        keyPressed: 'keypress'
    };

    // Event listeners
    documentNode.on(eventType.click, focus);
    documentNode.on(eventType.keydown , handleResultsKeyDown);
    documentNode.on(eventType.keyPressed , handleResultsKeyDown);

    inputNode.on(eventType.input , findMatches);
    inputNode.on(eventType.focus, findMatches);
    inputNode.on(eventType.blur, unfocus);

    function handleResultsKeyDown(event){
        switch(event.which){
            // Arrow Up
            case 38:
                upArrowPressed();
                break;
            // Arrow Down
            case 40:
                downArrowPressed();
                break;
            case 13:
                event.stopPropagation();
                returnKeyPressed();
                break;
            default:
                break;
        }
        // event.stopPropagation();
    }

    function findMatches(event){

        resultsNode.removeClass(classNames.hide);
        resultsNode.empty();

        var matches = [];
        var inputVal = inputNode.val(); 

        for (var i = 0; i < countries.length; i++) {
            var country = countries[i].toLowerCase();
            var lowerVal = inputVal.toLowerCase();
            if( country.indexOf(lowerVal) == 0 && inputVal != ''){
                if ( typeof country  === 'undefined'){
                    return;
                }
                else{
                    matches.push(countries[i]);
                }
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

        for (var y = 0; y < resultsNode.children().length; y++) {
            addListeners(resultsNode.children().eq(y));
        }
    }

    function unfocus(event){
        resultsNode.addClass(classNames.hide);
    }
    
    function focus(event){
        // console.log(resultsNode);
        // console.log(resultsNode.classNames());
        // resultsNode.removeClass((classNames.hide));
    }

    function mouseOverResult(event){
        // event.stopPropagation();
        for (var i = 0; i < resultsNode.children().length; i++) {
            var removingTargetElement = resultsNode.children().eq(i); 
            removeHighlightClass(removingTargetElement);
        }
        $(event.target).addClass(classNames.highlighted);
    }

    function mousedownOnResult(event){
        inputNode.val(event.target.textContent);
        resultsNode.empty();
    }

    function upArrowPressed(){
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
        var resultVal = textOfHighlightedElement();
        console.log( resultVal );
        inputNode.val(resultVal);
        resultsNode.addClass(classNames.hide);
    }

    function textOfHighlightedElement(){
        var highlightedResult = resultsNode.children().eq(highlightedResultIndex());
        return highlightedResult.text();
    }

    function downArrowPressed(){

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

    function removeHighlightClass(x){
        if (x.hasClass(classNames.highlighted)){
            x.removeClass(classNames.highlighted);
        }
    }

    function addListeners(result){
        result.on('mousedown' , mousedownOnResult);
        result.on('mouseover', mouseOverResult);
    }
})([ "Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Netherlands Antilles)", "Bosnia Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of", "Cook Islands", "Costa Rica", "Croatia", "Curacao (Netherlands Antilles)", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland (Republic of)", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kosrae Island", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macau", "Macedonia (FYROM)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Ponape", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Rota", "Russia", "Rwanda", "Saba (Netherlands Antilles)", "Saipan", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "Spain", "Sri Lanka", "St. Barthelemy", "St. Croix", "St. Eustatius (Netherlands Antilles)", "St. John", "St. Kitts and Nevis", "St. Lucia", "St. Maarten (Netherlands Antilles)", "St. Thomas", "St. Vincent and the Grenadines", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tinian", "Togo", "Tonga", "Tortola", "Trinidad and Tobago", "Truk", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Tuvalu", "US Virgin Islands", "Uganda", "Ukraine", "Union Island", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Gorda", "Wallis and Futuna", "Yap", "Yemen", "Zambia", "Zimbabwe" ]);