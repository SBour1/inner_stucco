async function addToCart(e) {
    console.log("Button pressed");
    console.log({e});
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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description, price })
    }
    const response = await fetch('/api/order', requestOptions);
    const data = response.json();

    console.log({data});

}