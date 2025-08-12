var api='https://phimapi.com/quoc-gia';
const quocgiaEle = document.querySelector('.quocgia')
console.log(quocgiaEle)
function callApi(api){
    fetch(api)
        .then(function(response){
            return response.json();
        })
        .then(function(results){
           render2(results)
        })
}
function render2(results){
    var htmls =''
    results.forEach(function(item){
        htmls+=`
            <li onclick="changeCountry('${item.slug}')" ><a class="dropdown-item" href="#">${item.name}</a></li>
        `
    })
    quocgiaEle.innerHTML=htmls
}

function changeCountry(slug){
    window.location.href=`quocgia.html?quocgia=${encodeURIComponent(slug)}`
    
}


callApi(api)