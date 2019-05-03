
$( "#go" ).on( "click", getQueryString );

function getQueryString() {
    var str = $( "form" ).serialize();
    console.log(str);
}
  