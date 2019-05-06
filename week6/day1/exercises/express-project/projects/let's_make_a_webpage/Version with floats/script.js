(function () {

    var drawerIsOpen = false;

    var drawer = document.getElementById('drawer');
    var body = document.documentElement;
    var menu = document.getElementById('menu');
    var items = document.getElementsByClassName('item');
    var overlay = document.getElementById('overlay');
    var closePopUpButton = $('#close-popup');
    var popup = $('#popup');

    // Executed when the user presses the close button
    closePopUpButton.click(function(event){
        overlay.classList.add('unsetting');
        popup.addClass('unsetting');
        overlay.classList.remove('on');
        popup.removeClass('on');
        event.stopPropagation();
    });

    // Executed after the modal popup has fully dismissed
    overlay.addEventListener('transitionend', function(event){
        popup.removeClass('unsetting');
        overlay.classList.remove('unsetting');
        event.stopPropagation();
    });

    menu.addEventListener('mousedown', menuKeyPressed);
    body.addEventListener('mousedown', documentPressed);
    overlay.addEventListener('mousedown', overlayPressed);
    setupItemListeners(items);


    // Startup  with delay
    setTimeout(welcomePopup, 1000);

    function welcomePopup(){

        overlay.classList.add('on');
        popup.addClass('on');
    }

    function setupItemListeners(items){
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.addEventListener('mousedown', itemPressed);
        }
    }

    function openDrawer(){
        overlay.classList.add('on');
        drawer.classList.add('on');
        drawerIsOpen = true;
    }

    function closeDrawer(){
        drawer.classList.remove('on');
        removeOverlay();
        drawerIsOpen = false;
    }

    function removeOverlay(){
        overlay.classList.add('unsetting');
        overlay.classList.remove('on');

    }

    function itemPressed(event){
        event.stopPropagation();
    }

    function overlayPressed(event){
        closeDrawer();
        event.stopPropagation();
    }

    function menuKeyPressed(event){

        if (drawerIsOpen){
            closeDrawer();
        }
        else{
            openDrawer();
        }
        event.stopPropagation();
    }

    function documentPressed(event){
        if (drawerIsOpen){
            closeDrawer();
        }
        event.stopPropagation();
    }
})();
