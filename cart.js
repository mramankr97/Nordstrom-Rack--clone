var proarr = JSON.parse(localStorage.getItem("userObj1"))
console.log(proarr)
var em = document.querySelector("#pname")
  em.innerText = proarr[0].name

  var en = document.querySelector("#primg")
  en.src = proarr[0].avatar

  var ez = document.querySelector("#price")
  ez.innerText = "price : "+( proarr[0].price)

  var szarr = JSON.parse(localStorage.getItem("userObj3"))
  console.log(szarr)

     var ab = document.querySelector("#quantity")
    ab.innerText = szarr[0].quan

   var bc = document.querySelector("#size")
   bc.innerText = szarr[0].size

   var bcd = document.querySelector("#cartCount")
   bcd.innerText = (szarr.length)

   var acd = document.querySelector("#navCartCount")
   acd.innerText = (szarr.length)

   var eza = document.querySelector("#subTotal")
   eza.innerText =  proarr[0].price

   var nme = JSON.parse(localStorage.getItem("userData2"))
   var em = document.querySelector("#signInOption")
    em.innerText = "Hii "+nme[nme.length-1].FirstName  

    document.querySelector("#checkoutButton").addEventListener("click", events);
    function events() {
      event.preventDefault();
      window.location.href="checkout.html"
    }




  