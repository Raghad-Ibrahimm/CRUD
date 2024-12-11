/*first step create
1- 
2- select inputs
3 - value inputs
4- object product
5- list products

display 
1- design static
2- logic display
3- design dynamic



delete
1 event click button
2 logic delete
3 display


search
1 input search
2 value input 
3 logic search 

updata
1 event click button updata
2 set value product
3 add btn hidden 
4 add edit btn


*/

console.log(productImageInput=`./image/${localStorage.getItem("product".img)}`);

var myindex  ;
function setFormValuaForUpdate(index){
  myindex=index;
  productNameInput.value =productList[index].code;
  productPriceInput.value =productList[index].price;
  productCategoryInput.value =productList[index].Catogery;
 productDescInput.value = productList[index].desc;

 addBtn.classList.add("d-none")
  upBtn.classList.remove("d-none")

 
}

function update(myindex){
     productList[myindex].code = productNameInput.value;
     productList[myindex].price =   productPriceInput.value;
     productList[myindex].Catogery = productCategoryInput.value;
     productList[myindex].desc =  productDescInput.value;

    localStorage.setItem("product",JSON.stringify(productList))
    display()
    addBtn.classList.remove("d-none")
    upBtn.classList.add("d-none")
    clear()

};

var addBtn = document.getElementById("addBtn");
var upBtn = document.getElementById("upDate");
var productNameInput = document.getElementById("ProductName");
var productPriceInput = document.getElementById("ProductPrice");
var productCategoryInput = document.getElementById("ProductCategory");
var productDescInput = document.getElementById("ProductDesc");
var productImageInput = document.getElementById("ProductImage");
var searchInput = document.getElementById("search");
var searchCateInput =document.getElementById("searchCate");
///to still data display while i refreash page if it in localstorage
var  productList =[];
if (localStorage.getItem("products") != null){
    productList = JSON.parse(localStorage.getItem("products"))
    display()
};

// C:\fakepath\download.jpeg
function addProduct(){
   console.log( productImageInput.files[0]?.name);

if(validation(productNameInput)&&validation(productPriceInput)&&validation(productCategoryInput)&&validation(productDescInput)){
    var product ={
      code: productNameInput.value,
      price: productPriceInput.value,
      Catogery: productCategoryInput.value,
      desc: productDescInput.value,
      img :`image/${productImageInput.files[0]?.name}`,}

   productList.push(product);
   localStorage.setItem("products",JSON.stringify(productList));
   display();
   clear();

   }
}

function display(){
    var data ="";
    for(var i=0 ; i<productList.length; i++){

    data +=
    `<div class="col-md-3 text-center">
        <div class="card p-1 bg-body-secondary my">
     <div class="text-center">
          <img src="${productList[i].img}" class="card-img-top object-fit-contain" width="100px" height="150px" alt="...">
        </div>
          <h2 class="fs-4 my-2 "> --${productList[i].code}--</h2>
          <span class="text-secondary ">${productList[i].Catogery}</span>

          <p class="text-dark">"${productList[i].desc}"</p>
        <span class="text-success fw-bold"> $ ${productList[i].price}</span>
        <div class=" text-end pt-3 card-footer mt-1">
          <button onclick="setFormValuaForUpdate(${i})" class="btn btn-success m-1">update</button>
          <button onclick="deleteProduct(${i})" class="btn btn-danger m-1">delete</button>
            </div>
       </div >
        </div>
            `
    }
    document.getElementById("rowData").innerHTML = data;
}



  

function clear(){
    productNameInput.value="";
    productPriceInput.value="";
 productCategoryInput.value = "";
 productDescInput.value="";
productImageInput = "";

}

function deleteProduct(index){

productList.splice(index,1)

localStorage.setItem("products",JSON.stringify(productList))
display()

}

function search(){
    console.log("hi search");
    var term =searchInput.value;
        var data ="";
        for(var i=0 ; i<productList.length; i++){
         
      if(productList[i].code.toLowerCase().includes(term.toLowerCase())){


        data +=
        `<div class="col-md-3 text-center">
        <div class="card p-1 bg-body-secondary my">
     <div class="text-center">
          <img src="${productList[i].img}" class="card-img-top object-fit-contain" width="100px" height="150px" alt="...">
        </div>
          <h2 class="fs-4 my-2 text-bg-danger"> --${productList[i].code}--</h2>
          <span class="text-secondary ">${productList[i].Catogery}</span>

          <p class="text-dark">"${productList[i].desc}"</p>
        <span class="text-success fw-bold"> $ ${productList[i].price}</span>
        <div class=" text-end pt-3 card-footer mt-1">
          <button onclick="setFormValuaForUpdate(${i})" class="btn btn-success m-1">update</button>
          <button onclick="deleteProduct(${i})" class="btn btn-danger m-1">delete</button>
            </div>
       </div >
        </div>
            `
      }
    }
       if(data == ``){
          data= `<p class="fs-1 text-danger bg-danger-subtle text-center">Product Not Found!</p>`;
       }

        
        document.getElementById("rowData").innerHTML = data;

    }
    
    function searchBycate(){

var term =searchCateInput.value;
      var data ="";
      for(var i=0 ; i<productList.length; i++){
       
    if(productList[i].Catogery.toLowerCase().includes(term.toLowerCase())){


      data +=
      `<div class="col-md-3 text-center">
      <div class="card p-1 bg-body-secondary my">
   <div class="text-center">
        <img src="${productList[i].img}" class="card-img-top object-fit-contain" width="100px" height="150px" alt="...">
      </div>
        <h2 class="fs-4 my-2 "> --${productList[i].code}--</h2>
        <span class="text-secondary text-bg-info">${productList[i].Catogery}</span>

        <p class="text-dark">"${productList[i].desc}"</p>
      <span class="text-success fw-bold"> $ ${productList[i].price}</span>
      <div class=" text-end pt-3 card-footer mt-1">
        <button onclick="setFormValuaForUpdate(${i})" class="btn btn-success m-1">update</button>
        <button onclick="deleteProduct(${i})" class="btn btn-danger m-1">delete</button>
          </div>
     </div >
      </div>
          `
    }
  }
     if(data == ``){
        data= `<p class="fs-1  text-info bg-info-subtle text-center">Product Category Not Found!</p>`;
     }

      document.getElementById("rowData").innerHTML = data;
    }
///validation

function validation(input)
{
  console.log(input);
  
  var regex ={
    ProductName:/^[A-Za-z ]{3,15}$/,
    ProductPrice:/^[1-9]\d{3,4}$/,
    ProductCategory:/(Gold|Silver|Diamonds)/,
    ProductImage:/^.+\.(svg|png|jpeg|jpg)$/i,
    ProductDesc:/^[a-zA-Z]?$/gm,
  }
  var isValid =regex[input.id].test(input.value);
   
  if(isValid){
    input.classList.remove("is-invalid")
    input.classList.add("is-valid")
    input.nextElementSibling.classList.replace("d-block","d-none")
  }else{
    input.classList.add("is-invalid")
    input.classList.remove("is-valid")
    input.nextElementSibling.classList.replace("d-none","d-block")
  }
  return isValid;
}