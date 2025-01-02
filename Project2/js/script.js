const nav = document.getElementById("nav");
const mobile = document.getElementById("mobile");
const cross = document.getElementById("cross");
if(mobile){
    mobile.addEventListener("click", ()=>{
        nav.classList.add("active");
    })
};
if(cross){
    cross.addEventListener("click", ()=>{
        nav.classList.remove("active")
    })
}


// shop 
let shopCard = document.getElementById("shopCard");
if(shopCard){
    shopCard.addEventListener("click", (event)=>{
        let lo = event.target.src;
        console.log(lo);

        
      let newScreen=   window.location.href="sproduct.html";
        newScreen.src = lo;
    })
}
    


// Single product page

let mainProduct = document.getElementById("mainProduct");
let smallImg = document.querySelector(".small-image-group");
smallImg.addEventListener("click", (eve)=>{
    let newSrc = eve.target.src;
    mainProduct.src = newSrc;
    console.log(newSrc);
    
    
})
