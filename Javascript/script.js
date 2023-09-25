const feature = document.querySelector(".features");
const company = document.querySelector(".company");
const open_menu_icon_mobile = document.querySelector(".menu-icon-mobile");
const close_menu_icon_mobile = document.querySelector(".close-menu-img");
const feature_mobile = document.querySelector(".mobile-feature");
const wrapper_sub_mobile = document.querySelector("#feature-nav-mobile");
const wrapper_feature = document.querySelector("#feature");
const wrapper_company = document.querySelector("#company");
const wrapper_menu = document.querySelector("#mobile-menu");
const mobile_nav_container = document.querySelector(".mobile-nav-container");

var is_open_feature, is_open_company, is_open_menu, is_open_feature_mob = false;

feature.addEventListener("click", open_close_feature);
company.addEventListener("click", open_close_company);
open_menu_icon_mobile.addEventListener("click", open_close_mobile_menu);
close_menu_icon_mobile.addEventListener("click", open_close_mobile_menu);
feature_mobile.addEventListener("click", open_close_feature_mobile);

function check_close_open(class_list){
    console.log(class_list)
    class_list.array.forEach(element => {
        console.log(element)
    }) 
};

function open_close_feature(){
    if(is_open_feature==false){
    wrapper_feature.classList.add("open");
    is_open_feature = true;
    }else{
    wrapper_feature.classList.remove("open");
    is_open_feature = false; 
    }
};

function open_close_company(){
    if(is_open_company==false){
    wrapper_company.classList.add("open");
    is_open_company = true;
    }else{
    wrapper_company.classList.remove("open");
    is_open_company = false; 
    }
};


function open_close_mobile_menu(){
    console.log(is_open_menu)
    if(is_open_menu == false){
        wrapper_menu.classList.add("open")
        is_open_menu = true
    }else{
        wrapper_menu.classList.remove("open")
        is_open_menu = false
    }
};

function open_close_feature_mobile(){
    if(is_open_feature_mob == false){
        wrapper_sub_mobile.classList.add("open")
        is_open_feature_mob = true
    }else{
        wrapper_sub_mobile.classList.remove("open")
        is_open_feature_mob = false
    }
};

