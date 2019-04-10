(function () {

    var drawerIsOpen = false;

    var drawer = document.getElementById('drawer');
    var body = document.documentElement;
    var menu = document.getElementById('menu');
    var items = document.getElementsByClassName('item');
    var overlay = document.getElementById('overlay');

    menu.addEventListener('mousedown', menuKeyPressed);
    body.addEventListener('mousedown', documentPressed);
    overlay.addEventListener('mousedown', overlayPressed);
    setupItemListeners(items);

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

        setTimeout(makehidden , 500);
        
        function makehidden(){

            overlay.classList.remove('unsetting');
        }
    }

    function itemPressed(event){
        event.stopPropagation();
    }

    function overlayPressed(event){
        closeDrawer()
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
