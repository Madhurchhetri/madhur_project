import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";


getCartProductFromLS();

export const addToCart = (event ,id ,stock) =>{
    const currElemProd = document.querySelector(`#card${id}`)
    // console.log(currElemProd);

    let arrLocalStorageProduct = getCartProductFromLS(); 

    let quantity = currElemProd.querySelector('.productQuantity').innerText;
    let price = currElemProd.querySelector('.productPrice').innerText;
    // console.log(quantity ,price);

    price = price.replace('₹' , '');

    let existingProd = arrLocalStorageProduct.find((currProd)=> currProd.id === id);

    if(existingProd && quantity>1){
        quantity = Number(existingProd.quantity) + Number(quantity)
        price = Number(price * quantity)
        let updatedCart = {id,quantity,price}
       updatedCart = arrLocalStorageProduct.map((currProd)=>{
            return currProd.id === id ? updatedCart : currProd;
        })
        console.log(updatedCart);
        
        localStorage.setItem('cartProductLS', JSON.stringify(updatedCart))

        // show toast when product add to cart 
        showToast('add' ,id)
    }

    if(existingProd){
        return false;
    }

    price = Number(price * quantity);
    quantity = Number (quantity);

    let updateCart = {id, quantity, price};
    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct))

   

    updateCartValue(arrLocalStorageProduct);

     showToast('add' ,id)
    
    
}