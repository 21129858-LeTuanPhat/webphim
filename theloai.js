var apiTheloai='https://phimapi.com/the-loai';
const theLoaiEle = document.querySelector('.theloai1')
function callApi(apiTheloai){
    fetch(apiTheloai)
        .then(function(response){
            return response.json();
        })
        .then(function(results){
            render1(results)
        })
}
function render1(results){
    var htmls =''
    results.forEach(function(item){
        htmls+=`
            <li onclick="changetype('${item.slug}')" ><a class="dropdown-item" href="#">${item.name}</a></li>
        `
    })
    theLoaiEle.innerHTML=htmls
}
function changetype(slug){
    window.location.href=`theloai.html?theloai=${encodeURIComponent(slug)}`
}

callApi(apiTheloai)