const year = new Date().getFullYear();
const namEle = document.querySelector('.nam')
function callNam(year){
    htmls='';
    for(var i =1970; i <= year ; i++){
        htmls+=`
            <li onclick="changeYear(${i})"><a class="dropdown-item" href="#">${i}</a></li>
        `
    }
    namEle.innerHTML = htmls
}

function changeYear(i){
    window.location.href=`nam.html?nam=${encodeURIComponent(i)}`
}


callNam(year)