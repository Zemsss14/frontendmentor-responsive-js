const feature = document.querySelector(".features");
const company = document.querySelector(".company");
const wrapper_feature = document.querySelector("#feature");
const wrapper_company = document.querySelector("#company");
var is_open_feature = false;
var is_open_company = false;

feature.addEventListener("click", open_close_feature);
company.addEventListener("click", open_close_company);

function open_close_feature(){
    if(is_open_feature==false){
    wrapper_feature.classList.add("open");
    is_open_feature = true;
    }else{
    wrapper_feature.classList.remove("open");
    is_open_feature = false; 
    }
}

function open_close_company(){
    if(is_open_company==false){
    wrapper_company.classList.add("open");
    is_open_company = true;
    }else{
    wrapper_company.classList.remove("open");
    is_open_company = false; 
    }
}
