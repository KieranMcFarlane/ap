document.addEventListener('DOMContentLoaded', function(){

  const navCart = document.querySelector('.nav__cart')
  const cartHeaderClose = document.querySelector('.cart__header__close')
  const inputRadios = document.querySelectorAll('.form-radio__input')
  const cart = document.querySelector('.cart')
  
  // add item to cart

  // shows when you click cart circle top right
  navCart.addEventListener('click', event => {
    cart.classList.toggle('is-hidden')
  })
// hides when you click 'X' top right
  cartHeaderClose.addEventListener('click', event => {
    cart.classList.toggle('is-hidden')
  })

  // get the input value
  
    inputRadios.forEach(inputRadio => {
      inputRadio.addEventListener('click', event => {
        // get value of radio button and match that with the image (hopefully I can use an empty div and that can load in the image from the src that will be both display: none because I'm not using react)
        let radioValue = event.currentTarget.value;
        let itemName = event.currentTarget.getAttribute('data-name')
        let itemPrice = event.currentTarget.getAttribute('data-price')
        let itemSize = event.currentTarget.getAttribute('data-size')
        // const ctaButton = document.querySelector('.button--cta .button__label')
        const item = {}
        item.value = radioValue
        item.name = itemName
        item.size = itemSize
        item.price = itemPrice
        console.log(item)

        ctaButton.getAttribute('data-item') = item

        // this is a product checker 
        // if(radioValue == 'ASK61'){
          
        // } else{
          
        // }

        const imageContainers = document.querySelectorAll('.product-image__container');

        imageContainers.forEach(imageContainer => {
          // get the data sku for image container
          let skuCode = imageContainer.getAttribute('data-sku');
          // if it matches then add class to child node
          if ( radioValue === skuCode ){
            imageContainer.classList.add('product-image--visible')
            imageContainer.classList.remove('product-image--invisible')
          } else{
            imageContainer.classList.remove('product-image--visible')
            imageContainer.classList.add('product-image--invisible')
          }
        }) 
      })
    });




});