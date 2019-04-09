(function () {
    var button =document.getElementById('btn');

    button.addEventListener(
        'click',
        function(){
            console.log('Button pressed');
            document.body.style.backgroundColor = 'black';
        });

    document.addEventListener(
        "keydown",
        function(evt){
            console.log(evt);
            if ( evt.keyCode === 78 ){
                console.log('n was pressed');
            }
        });
})()