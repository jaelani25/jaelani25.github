let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  totalPrice += productPrice;

        // Update keranjang sewa
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById('cartItems');
        const totalElement = document.getElementById('totalPrice');
        const checkoutLink = document.getElementById('checkoutLink');

        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name + ' - Rp ' + item.price;
            cartItems.appendChild(li);
        });

        totalElement.textContent = totalPrice;

        // Buat pesan WhatsApp
        let message = 'Halo, saya ingin menyewa alat berikut:\n';
        cart.forEach(item => {
            message += '- ' + item.name + ' (Rp ' + item.price + ')\n';
        });
        message += 'Total: Rp ' + totalPrice;

        // Update link WhatsApp
        const whatsappNumber =  '6285283557907' // Ganti dengan nomor WhatsApp Anda
        checkoutLink.href = 'https://api.whatsapp.com/send?phone=6285283557907&text=${encodeURIComponent(message)}';

        console.log(checkoutLink.href);
    }