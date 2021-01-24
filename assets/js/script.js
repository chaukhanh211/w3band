var header = document.getElementById("header");
var menuMobile = document.getElementById("menu-mobile");
var heightHeader  = header.clientHeight;

// Đóng mở khi chọn menu
menuMobile.onclick = function () {
    var isClose = header.clientHeight === heightHeader;
    //console.log(isClose);
    if(isClose){
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
}
// Tự động đóng mở khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
//console.log(menuItems);
var isClickParentMenu = false;
for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        //console.log(isParentMenu);
        if (isClickParentMenu) {
            console.log("Dong");
            isClickParentMenu = false;

        } else if (isParentMenu) {
            console.log("Mo");
            isClickParentMenu = true;
            event.preventDefault();
        }
         else {
            header.style.height = null;
        }
    }
}