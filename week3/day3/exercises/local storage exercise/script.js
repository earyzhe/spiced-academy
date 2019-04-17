// Make a static HTML page that has a large <textarea> on it. When the user types in it,
// save the value in localStorage. When the user comes back to the page after
// navigating away or closing the browser, 
// the stored value should automatically appear in the <textarea>.

(function () {

    $('textarea').val(localStorage.getItem('input'));

    $('textarea').on('keyup', function () {
        console.log('keyup');

        localStorage.setItem('input', $('textarea').val());

    }); 
})();