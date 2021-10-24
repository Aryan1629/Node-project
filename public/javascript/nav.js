class Nav{                   // nav bar structure
    navbar=(imgurl , brand_name,userinfo,length)=>{
        return(
            
            `           
            <div class="nav">
            <div class="brand">
                <a href="/products">
                    <img  src="${imgurl}"  />
                </a>                                    
                <a href="/products">
                    <h3>
                      ${brand_name}
                    </h3>
                </a>
            </div>
            <div class="menu-items">
              ${
                  length==0?`  <a href="/cart  ">Cart</a>`:
                  `  <a href="/cart  ">Cart   
                  <span class="banner">    ${length} </span>
                  </a>        
                  `
              }
               ${
                   userinfo?` 
                   <a href="# " onmouseover="drop()" onmouseleave="up()" style=" text-transform: capitalize;">${userinfo.name}</a>`:
                   ` <a href="/sign-in">SignIn</a>`
               }
               <div class="dorpdown" onmouseleave="up()"  onmouseover="drop()" id="drop">
                ${
                    userinfo?`   <a href="/wishlist/${userinfo.token}">   <div class="menulist">
                    WishList
               </div></a>  `:``
                }  
                <a>   <div class="menulist">
                  My Order
               </div></a>
           <a>   <div class="menulist">
                 My Profile 
             </div></a>
             <a> <div class="menulist" onclick="logout()">
                   Log-Out 
             </div></a>
         </div>
            </div>
            
        </div>`
        )
    }
};
const logout=()=>{localStorage.clear()
    
  location.href="/sign-in"
}
const drop=()=> document.getElementById("drop").style.display="flex"
const up=()=> document.getElementById("drop").style.display="none"
const cartlength=JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")).length:[]
const user= localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null
const nav = new Nav;
const img="https://www.freepnglogos.com/uploads/fruits-png/fruits-welcome-fruit-advisory-services-team-fruit-advisory-3.png";         // bran image logo
brand="Fresh-Fruits";      // brand name 
const nav_container =document.createElement("div");
nav_container.innerHTML=nav.navbar(img, brand,user, cartlength);
document.body.appendChild(nav_container) ;  

