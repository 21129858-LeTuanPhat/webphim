const year = new Date().getFullYear();
const namEle = document.querySelector('.nam')
function callNam(year){
    htmls='';
    for(var i =1970; i <= year ; i++){
        htmls+=`
            <li><a class="dropdown-item" href="#">${i}</a></li>
        `
    }
    namEle.innerHTML = htmls
}
callNam(year)