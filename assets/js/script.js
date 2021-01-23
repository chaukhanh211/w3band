var header = document.getElementById("header");
var menuMobile = document.getElementById("menu-mobile");
var heightHeader  = header.clientHeight;

// Đóng mở khi chọn menu
menuMobile.onclick = function () {
    var isClose = header.clientHeight === heightHeader;
    console.log(isClose);
    if(isClose){
        header.style.height = "auto";
    } else{
        header.style.height = null;
    }
}
// Tự động đóng mở khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems);

for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    menuItem.onclick = function() {
        header.style.height = null;
    }
}