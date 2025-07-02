 const cart = [
            { item: "Apple", price: 20 },
            { item: "Banana", price: 15 },
            { item: "Orange", price: 25 },
            { item: "Mango", price: 30 }
        ];
        const formatted = cart.map(product=>`${product.item} is ${product.price}pesos`);
        const result = document.getElementById('result');
        result.innerHTML = formatted.join('<br>');
        const total = cart.reduce((sum, product)=> sum + product.price, 0);
        result.innerHTML += `<br><strong>Total: ${total}</strong>`;