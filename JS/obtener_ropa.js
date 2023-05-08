$(document).ready(function(){

  $.get('https://fakestoreapi.com/products',function(data){

    $('#fila-ropa').empty();
    $.each(data,function(i,item){
         var ropa = `
         <div class="col-sm-12 col-sm-4 col-lg-3 col-xl-2">
                <div class="card" style="width: 18rem;">
                    <img style="width: 100px " src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-text">${item.description}</p>
                    </div>
                </div>
        </div>
                    `
    $('#fila-ropa').append(ropa);
  });
});
});