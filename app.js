
document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { name: 'عسل السدر اليمني', price: 36, image: 'https://i.imgur.com/B9R9bVX.jpeg' },
        { name: 'لبان الفودو', price: 24, image: 'https://i.imgur.com/WsVm7Yh.jpeg' },
        { name: 'بخوري خوك', price: 12, image: 'https://i.imgur.com/dR7CJzM.jpeg' }
    ];

    const container = document.getElementById('product-list');
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} $</p>
            <button>إضافة إلى السلة</button>
        `;
        container.appendChild(div);
    });
});
