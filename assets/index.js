const button = document.querySelector('#starry-night');
const buttonDigital = document.querySelector('#starry-night-digital');
const price = document.querySelector('#product__price');
const pirceDigital = document.querySelector('#product__price-digital');
const quantity = document.querySelector('#quantity');

const select = document.querySelector('#format')
select.addEventListener('change', (e) => {
  if(e.target.value === 'physical') {
    buttonDigital.classList.add('product__button--hide');
    button.classList.remove('product__button--hide');
    pirceDigital.classList.add('product__price--hide');
    price.classList.remove('product__price--hide');
  } else {
    buttonDigital.classList.remove('product__button--hide');
    button.classList.add('product__button--hide');
    pirceDigital.classList.remove('product__price--hide');
    price.classList.add('product__price--hide');
  }
});

quantity.addEventListener('change', () => {
  button.dataset.itemQuantity = quantity.value;
  pirceDigital.dataset.itemQuantity = quantity.value;
});

// zmiana waluty w koszyku

document.addEventListener('snipcart.ready', () => {
  const currSelect = document.querySelector("#currencies");
  currSelect.addEventListener('change', (e)=>{

    Snipcart.api.session.setCurrency(currSelect.value);
  });

  Snipcart.store.subscribe(updateCurrency);
});

function updateCurrency() {
  const state = Snipcart.store.getState();
  const currency = state.cart.currency;

  document.querySelector('#currencies').value = currency;
}