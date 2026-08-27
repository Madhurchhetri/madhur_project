import products from '../api/products.json';
import { fetchQuantityFromCartLs } from './fetchQuantityFromCartLs';
import { getCartProductFromLS } from './getCartProducts';
import { incrementDecrement } from './incrementDecrement';
import { removeProdFromCart } from './removeProdFromCart';
import { updateCartProductTotal } from './updateCartProductTotal';

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((currProd)=>{
    
   return cartProducts.some((curElm)=>
        curElm.id === currProd.id)
    

})

console.log(filterProducts);

// to update the cart page 

const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

const showCartProduct =()=>{
    filterProducts.forEach((currProd)=>{
        const {id , name, image, category, price, stock} = currProd;

        let productClone = document.importNode(templateContainer.content , true);

        const lsActualData = fetchQuantityFromCartLs(id,price)

        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`); 
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productImage').src = image;

        productClone.querySelector('.productQuantity').textContent = lsActualData.quantity;
        productClone.querySelector('.productPrice').textContent = lsActualData.price;

        productClone.querySelector('.remove-to-cart-button').addEventListener('click', ()=>removeProdFromCart(id))


        productClone.querySelector('.stockElement').addEventListener('click', (event) =>{
            incrementDecrement(event, id, stock, price);
        } )

        cartElement.appendChild(productClone);
    })
}
showCartProduct()

updateCartProductTotal();