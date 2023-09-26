// Initialization of the is_open var
var is_open_feature = is_open_company = is_open_menu = is_open_feature_mob = is_open_company_mob = false;


// feature block wrapper for pc
const feature = document.querySelector(".features");
const wrapper_feature = document.querySelector("#feature");
const arrow_down_feat_pc = document.querySelector("#feat-down-pc");
const arrow_up_feat_pc = document.querySelector("#feat-up-pc");

feature.addEventListener("click", open_close_feature);

function open_close_feature(){
    if(is_open_feature==false){
    wrapper_feature.classList.add("open");
    arrow_down_feat_pc.classList.remove("open");
    arrow_up_feat_pc.classList.add("open");
    is_open_feature = true;
    }else{
    wrapper_feature.classList.remove("open");
    arrow_down_feat_pc.classList.add("open");
    arrow_up_feat_pc.classList.remove("open");
    is_open_feature = false; 
    }
};


// company block wrapper for pc
const company = document.querySelector(".company");
const wrapper_company = document.querySelector("#company");
const arrow_down_comp_pc = document.querySelector("#comp-down-pc");
const arrow_up_comp_pc = document.querySelector("#comp-up-pc");
company.addEventListener("click", open_close_company);

function open_close_company(){
    if(is_open_company==false){
    wrapper_company.classList.add("open");
    arrow_down_comp_pc.classList.remove("open");
    arrow_up_comp_pc.classList.add("open");
    is_open_company = true;
    }else{
    wrapper_company.classList.remove("open");
    arrow_down_comp_pc.classList.add("open");
    arrow_up_comp_pc.classList.remove("open");
    is_open_company = false; 
    }
};


// Opening/closing mobile navigation bar
// open state
const open_menu_icon_mobile = document.querySelector(".menu-icon-mobile");
const wrapper_menu = document.querySelector("#mobile-menu");
open_menu_icon_mobile.addEventListener("click", open_close_mobile_menu);
// close state
const close_menu_icon_mobile = document.querySelector(".close-menu-img");
close_menu_icon_mobile.addEventListener("click", open_close_mobile_menu);

function open_close_mobile_menu(){
    if(is_open_menu == false){
        wrapper_menu.classList.add("open")
        is_open_menu = true
    }else{
        wrapper_menu.classList.remove("open")
        is_open_menu = false
    }
};


// Opening/closing sub-navigation bar for feature categorie
const feature_mobile = document.querySelector("#mobile-feature");
const wrapper_feature_sub_mobile = document.querySelector("#feature-nav-mobile");
const arrow_up_feat_mob = document.querySelector("#arrow-up-feat-mob")
const arrow_down_feat_mob = document.querySelector("#arrow-down-feat-mob")
feature_mobile.addEventListener("click", open_close_feature_mobile);

function open_close_feature_mobile(){
    if(is_open_feature_mob == false){
        wrapper_feature_sub_mobile.classList.add("open")
        arrow_up_feat_mob.classList.add("open")
        arrow_down_feat_mob.classList.remove("open")
        is_open_feature_mob = true
    }else{
        wrapper_feature_sub_mobile.classList.remove("open")
        arrow_down_feat_mob.classList.add("open")
        arrow_up_feat_mob.classList.remove("open")
        is_open_feature_mob = false
    }
};


// Opening/closing sub-navigation bar for feature companyMOBILE
const company_mobile = document.querySelector("#mobile-company");
const wrapper_company_sub_mobile = document.querySelector("#company-nav-mobile");
const arrow_down_comp_mob = document.querySelector("#arrow-down-comp-mob")
const arrow_up_comp_mob = document.querySelector("#arrow-up-comp-mob")
company_mobile.addEventListener("click", open_close_company_mobile);

function open_close_company_mobile(){
    if(is_open_company_mob == false){
        wrapper_company_sub_mobile.classList.add("open")
        arrow_down_comp_mob.classList.remove("open")
        arrow_up_comp_mob.classList.add("open")
        is_open_company_mob = true
    }else{
        wrapper_company_sub_mobile.classList.remove("open")
        arrow_down_comp_mob.classList.add("open")
        arrow_up_comp_mob.classList.remove("open")
        is_open_company_mob = false
    }
};



