const cartBtn = document.querySelector('#cart-btn')
const closeBtn = document.querySelector('#close-btn')

const cart = document.querySelector(".cart")
const overlay = document.querySelector(".overlays");


const box = document.querySelector(".boxes")


let productArr = [
    {
        id: 1,
        name: "BVLGari",
        price: 5999.99,
        image: "fragrance-product-1.webp"
    },
    {
        id: 2,
        name: "Dior Sauvage",
        price: 2999.99,
        image: "fragrance-product-4.webp"
    },
    {
        id: 3,
        name: "Giorgio Armani",
        price: 3499.99,
        image: "fragrance-product-2.webp"
    },
    {
        id: 4,
        name: "Davidoff",
        price: 1499.99,
        image: "fragrance-product-3.webp"
    },
    {
        id: 5,
        name: "Armani Giò",
        price: 2699.99,
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 6,
        name: "Tom Oud Wood",
        price: 4999.99,
        image: "https://images.unsplash.com/photo-1583545889266-55be2d76c6c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxwZXJmdW1lfGVufDB8fDB8fHww"
    },
    {
        id: 7,
        name: "YSL Y Parfum",
        price: 2899.99,
        image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 8,
        name: "Creed Aventus",
        price: 7999.99,
        image: "https://images.unsplash.com/photo-1705338670422-01133208eab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
    },
];

let cartArr = []

cartBtn.addEventListener('click', () => {
    cart.style.transform = "translateX(0%)"
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
    document.body.style.overflow = "hidden";
})
closeBtn.addEventListener('click', () => {
    cart.style.transform = "translateX(100%)"
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    document.body.style.overflow = "auto";
})
overlay.onclick = () => {
    cart.style.transform = "translateX(100%)";
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    document.body.style.overflow = "auto";
};



let ui = () => {
    productArr.forEach((elem) => {
        box.innerHTML += ` <div class="flex-container">

              <div class="box1">

               <img class="box1" src=${elem.image} alt="">

                <!-- <h5>Sold Out</h5> -->
              </div>


              <div class="text">

                <div class="left-text">
                  <div class="txt-1">
                   <p> ${elem.name}</p>
                  </div>
                  <div class="txt-2">
                    ${elem.price}
                  </div>
                </div>

                <div class="right-text">
                  <button id="adtc" onclick="productToCart('${elem.id}')">
                    Add to Cart
                    <i class="ri-shopping-cart-2-line"></i>
                  </button>


                </div>

              </div>


            </div>`
    })


}

ui()

const addToCart = document.querySelectorAll("#adtc")
const cartItems = document.querySelector('.cart-items')


addToCart.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.innerHTML = 'Added <i class="ri-check-line"></i>';
        btn.disabled = true;


        cart.style.transform = "translateX(0%)"
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        document.body.style.overflow = "hidden";

    })

})

const productToCart = (id) => {
    id = Number(id);

    let products = productArr.find((elem) => elem.id === id)
    console.log(products);

    cartArr.push(products);

    console.log(cartArr);

    showCart()
    updatetoSubtotal()
}

function showCart() {

    cartItems.innerHTML = "";

    cartArr.forEach((elem) => {

        cartItems.innerHTML += `
           <div class="cart-item">

        <img src=${elem.image} alt="Product">

        <div class="product-info">
          <h3>${elem.name}</h3>

          <div class="price">
            <span class="new-price">${elem.price}</span>
            <span class="old-price"></span>
          </div>
        </div>

        <div class="quantity-box">
          <div id="minus"><i class="ri-subtract-fill"></i></div>
          <div id="cart-no">1</div>
          <div id="plus"><i class="ri-add-line"></i></div>
        </div>
        `;

    });

}

const updatetoSubtotal = () => {
    let total = 0;

    cartArr.forEach((elem) => {
        total += elem.price
    })
    document.querySelector(".line2").innerHTML = `₹${total.toLocaleString("en-IN")}`;
}

const sendBtn = document.querySelector("#ck1");

sendBtn.addEventListener("click", () => {

    if (cartArr.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "🛒 *New Order*%0A%0A";

    let total = 0;

    cartArr.forEach((item, index) => {

        message += `${index + 1}. ${item.name}%0A`;
        message += `₹${item.price}%0A%0A`;

        total += item.price;

    });

    message += `*Total:* ₹${total}`;

    const phone = "919499712812"; // Your WhatsApp number

    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );

});