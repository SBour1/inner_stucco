// eslint-disable-next-line no-unused-vars
async function addToCart(e) {
  console.log('Button pressed');
<<<<<<< HEAD
  console.log({e});
=======
  console.log({ e });
>>>>>>> d810e98ca2c1621e966d276b3c890156d4f8772b
  // console.log(name);
  // console.log(price);
  // console.log(description);

  const card = e.parentNode.parentNode;

  console.log({ card });

  //const a = card.querySelector('.link');
  // console.log( { a });

  const name = card.querySelector('#item-name').innerText;
  const description = card.querySelector('#item-description').innerText;
  const price = card.querySelector('#item-price').innerText;

  console.log({ name, description });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, description, price }),
  };
  const response = await fetch('/api/order', requestOptions);
  const data = response.json();

  console.log({ data });
}

function total() {
  let items = document.querySelectorAll('.card-header');
  var totalPrice = 0;
  for (let i = 0; i < items.length; i+=2) {
    console.log(items[i].innerText);
    var price1 = parseFloat(items[i].innerText.replace(/\D/g, ''));
    if(items[i+1]){

      var price2 = parseFloat(items[i + 1].innerText.replace(/\D/g, ''));
      totalPrice += math.add(price1, price2);
      console.log(totalPrice);
    }
    else {totalPrice += price1}
  }
  totalPrice = totalPrice*.01
  totalPrice = '$' + totalPrice
  console.log(totalPrice)
  document.querySelector('#total').innerHTML ="Total Price: " + totalPrice
  // document.querySelector('#total').textContent = 'Total: $' + totalPrice;
}

total();
