
let myUrl = `https://striveschool-api.herokuapp.com/books`;

fetch(myUrl).then(res => {
  return res.json()
})
  .then(data => {
    /* console.log(data);*/


    /* inserisco le immagini nelle card*/
    for (i = 0; i < 12; i++) {
      let newData = data[i];
      let img = document.getElementsByClassName("card-img-top");
      img[i].src = newData.img;
      img[i].style.height = "19rem"
      img[i].style.width = "18rem%"
      img[i].style.marginTop = "10px"

    }

    /* inserisco i titoli dei libri nella card*/
    for (x = 0; x < 12; x++) {
      let newData1 = data[x];
      let cardTitle = document.getElementsByTagName("h4")
      cardTitle[x].innerHTML += newData1.title;

    }


    for (y = 0; y < 12; y++) {
      let newData2 = data[y];
     /* console.log(newData2);*/
      let category = document.getElementsByTagName("h5")
      category[y] = newData2.category;
      category[y].innerHTML += "Category:" + "" + newData2.category;

      let price = document.getElementsByTagName("h6")
      price[y] = newData2.price;
      price[y].innerHTML += "euro:" + "" + newData2.price;
      /*let cardCategory= document.getElementById("cardBody");

      let ul = document.createElement("ul");
      ul.classList.add("list-group")
      ul.classList.add("list-group-flush");
      let liCategory= document.createElement("li");
      liCategory.classList.add("list-group-item");
      let liPrice =document.createElement("li");
      liPrice.classList.add("list-group-item"); */

      /*inserisco i miei elementi

      liCategory[y] = "Categoria:"+ "" + newData2.category ;
      console.log(liCategory[y]);
      liPrice[y]= "Prezzo:"+ "" +  newData2.price;
      console.log(liPrice[y]);*/
      /*aggiungo i tag alle card*/

    }


  })



fetch(myUrl).then(res => {
  return res.json()
})
  .then(data => {

    let btn = document.getElementsByClassName("btnCart")
    btn = Array.from(btn);
    btn.forEach((element,i)=> {
      element.addEventListener("click", () => {
        addProdToCart(data[i])
        
        
      
      })
      
    });

  });

var totale =0;
function addProdToCart(elem) {
 /* console.log(elem);*/
  
    let cartPrice = elem.price
    let cartImg = elem.img
    

    let elemCart = document.getElementById("cart");
    products = `<div id='containerCart' class='d-flex flex-row'>
    <img id='img'src='${cartImg}'style='width:45px; heigth:25px; margin-right:70px; margin-bottom:10px' >
     <div id='price' style='margin-top:18px; font-size:large; font-weight:bold; font-style:italic; '>${cartPrice}</div>
     <hr>
     </div>`;
    elemCart.innerHTML += products;
    console.log(elemCart);

    let prezzoSingolo = document.getElementById("price").innerHTML
    console.log(prezzoSingolo);
  
    totale += +prezzoSingolo;
    console.log(totale);

    let totalCart = document.getElementById("priceTot");
    totPrice = `<div id='cartTotale'style='width:45px; font-weight:bold; heigth:25px;  margin-bottom:10px'>Totale Carrello</div>
    <div id='cartTotale'style='width:45px; font-weight:bold; heigth:25px; margin-bottom:10px'>${totale}</div>`;
   
    totalCart.innerHTML = totPrice;


  
}

