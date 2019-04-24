/* eslint-disable indent */
/* eslint-disable no-empty */

(function () {
    
    // Get element referances
    var documentNode = $('body');
    var resultsNode = $('#results');
    var inputNode = $('#input');
    var timeout;

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

    function findMatches(){

        if (timeout) { clearTimeout(timeout);}
        
        var inputVal = inputNode.val(); 
        
        if ( inputVal != '' && inputVal != null){

            timeout = setTimeout(  
                
                $.ajax({
                    // contentType: false,
                    // processData: false,
                    type: "GET",
                    url: "https://flame-egg.glitch.me/",
                    data: {
                        q: inputVal
                    },
                    success: function (matches) {
                        // console.log(matches);
                        resultsNode.removeClass(classNames.hide);
                        resultsNode.empty();
                        
                        if ( matches.length <= 0 ){ return; }
                        
                        if ( inputVal.substring(0, inputVal.length - 1) ==  matches[0].substring(0, inputVal.length - 1) ){
                            
                            var resultsHtml = '';
                            
                            for (var x = 0; x < matches.length; x++) {
                                resultsHtml += '<div class="result">' + matches[x] + '</div>';
                            }
                            resultsNode.append(resultsHtml);
                            
                            for (var y = 0; y < resultsNode.children().length; y++) {
                                addListeners(resultsNode.children().eq(y));
                            }
                        }
                        else{
                            console.log('Query took too long');
                        }
                    }
                }),
            // delay in ms    
            250);
        }
    }


    function unfocus(){
        resultsNode.addClass(classNames.hide);
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
            resultsNode.children().eq(index).removeClass(classNames.highlighted)
                .prev().addClass(classNames.highlighted);
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


    function 
    downArrowPressed(){
        if ( lastResultIsHighlighted() ){
            return;
        }
        else if ( resultsHaveHighlightClass() ){
            var index = highlightedResultIndex();
            resultsNode.children().eq(index).removeClass(classNames.highlighted)
                .next().addClass(classNames.highlighted);
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

        var lastResultIsHighlighted =  false;
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


})();