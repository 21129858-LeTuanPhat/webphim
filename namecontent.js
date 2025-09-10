const params = new URLSearchParams(window.location.search);
const nam = params.get('nam')
var $ = document.querySelector.bind(document)
const bodyElement = $('#content')
const paginationElement =$('#phantrang')
const title2 =$('#title2')
var api =`https://phimapi.com/v1/api/nam/${nam}`
function callapi(api){
    fetch(api)
        .then(function(respone){
            return respone.json()
        })
        .then(function(results){
            render(results)
        })
}

function render(results){
    var pagination = results.data.params.pagination
    var title =results.data.titlePage
    var phims = results.data.items
    var {currentPage,totalPages} = pagination
    console.log(currentPage)
    console.log(totalPages)

    title2.innerHTML=title

    //render pagination
    var htmls =''
    if(currentPage>1){
        htmls+=`<li onclick="changePage(${currentPage - 1})" class="page-item">
        <a class="page-link"  aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>`
    }
    const maxButtons =5;
    startPage = Math.max(1, currentPage - 2);
    endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 2) {
        endPage = Math.min(totalPages, 5);
      } else if (currentPage >= totalPages - 1) {
        startPage = Math.max(1, totalPages - 4);
      }

    for(var i =startPage ; i<= endPage;i++){
        htmls+=`<li onclick="changePage(${i})" class="page-item ${i === currentPage?'active':''}"><a class="page-link" >${i}</a></li>`
    }
    if(currentPage<totalPages){
        htmls+=`<li onclick="changePage(${currentPage + 1})" class="page-item">
        <a class="page-link"  aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>`
    }
    paginationElement.innerHTML=htmls


    //reder nội dung
    contents=''
    phims.forEach(function(phim){
        contents+=`
            <tr onclick="tranfor('${phim.slug}')">
      <td  class="col-5">
        <div class="card " style="max-width: 500px">
  <div class="row">
    <div class="col-md-2">
      <img src="https://phimimg.com/${phim.poster_url}" class="img-fluid rounded-start" alt="..." loading="lazy">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">${phim.name}</h5>
      </div>
    </div>
  </div>
    </div>
      </td>
      <td>${phim.year}</td>
      <td>${phim.time}</td>
      <td>${
        phim.country[0].name
      }</td>
    </tr>
        `
    })
    bodyElement.innerHTML=contents
}


function changePage(newPage){
      var api =`https://phimapi.com/v1/api/nam/${nam}?page=${newPage}`
      callapi(api)
    }
function tranfor(slug){
     window.location.href = `contentmain.html?slug=${encodeURIComponent(slug)}`;
}


callapi(api)