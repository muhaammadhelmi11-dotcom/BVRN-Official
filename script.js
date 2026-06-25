function orderProduct(product, price){

const nomorWA = "6289620944092";

const pesan =

`Halo BVRN,

Saya ingin memesan:

Produk : ${product}

Harga : Rp ${price}

Mohon info stoknya.`;

const url =

`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

window.open(url,'_blank');

}