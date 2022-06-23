function addTax(price) {
    const vat = 1.17; // מע״מ
    const total = (price * vat).toFixed(2);
    return total;
}

class Picture {
    constructor(picImg, picName, picArt, picPrice, picStock) {
        this.image = picImg;
        this.name = picName;
        this.artist = picArt;
        this.price = picPrice;
        this.stock = picStock;
    }
    getImg() {
        return this.image;
    }
    getName() {
        return this.name;
    }
    getArt() {
        return this.artist;
    }
    getPrice() {
        return `₪${addTax(this.price)}`;
    }
    getStock() {
        let inStock = this.stock;
        if (inStock === true) {
            inStock = '';
        } else {
            inStock = 'Not Available'
        }
        return inStock;
    }

}
// מערך של המוצרים
const pictures = [
    new Picture(
        'https://litb-cgis.rightinthebox.com/images/640x640/201812/nolbjt1544859525107.jpg?fmt=webp&v=1',
        'Frog with glasses',
        'Frogi Frog',
        590,
        true
    ),
    new Picture(
        'https://litb-cgis.rightinthebox.com/images/640x640/201912/carbfv1577083423462.jpg?fmt=webp&v=1',
        'A lonely woman',
        'Mister Lonely',
        500,
        true
    ),
    new Picture(
        'https://litb-cgis.rightinthebox.com/images/640x640/202011/btktzj1605625719730.jpg?fmt=webp&v=1',
        'Half Face',
        'Half Human',
        720,
        false
    ),
    new Picture(
        'https://litb-cgis.rightinthebox.com/images/640x640/202104/bps/product/inc/rwtrgs1617787337034.jpg?fmt=webp&v=1',
        'String Sound',
        'Eyal Golan',
        999,
        true
    ),
];

export {
    pictures
};