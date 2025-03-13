document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: "Jasa Pembuatan Website", price: 10000 },
        { name: "Penjualan Akun Digital Ocean", price: 10000 },
        // Add all other products here
    ];

    const productList = document.querySelector('.product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Rp ${product.price}</p>
            <button class="buy-button">BELI SEKARANG</button>
        `;
        productList.appendChild(productItem);
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>Rp ${product.price}</p>
                <button class="buy-button">BELI SEKARANG</button>
            `;
            productList.appendChild(productItem);
        });
    });
});
