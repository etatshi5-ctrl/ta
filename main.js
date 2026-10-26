let count = 3;

function addToCart(gameName) {
    count++;
    document.getElementById('cartCount').innerText = count;
    alert(`تمت إضافة شحن لعبة (${gameName}) إلى السلة بنجاح!`);
}

document.getElementById('cartBtn').addEventListener('click', function() {
    alert(`لديك ${count} عناصر في السلة.`);
});
