exports.seed = function (knex) {
  return knex("saleOff")
    .del()
    .then(function () {
      return knex("saleOff").insert([
        {
          id: 1,
          description: "Shampoo Dove",
          image:
            "https://img2.gratispng.com/20180128/hsq/kisspng-dove-shampoo-hair-conditioner-shower-gel-cosmetolo-dove-shampoo-5a6de4e3475124.6720577715171514592921.jpg",
          price: 20.0,
          date: "Mon Oct 31 2016 00:00:00 GMT-0700 (PDT)",
        },
        {
          id: 2,
          description: "Sabonete Dove",
          image:
            "https://img1.gratispng.com/20180919/srz/kisspng-cream-dove-bar-soap-product-dove-2-1-5ba3131e5b0995.9511761215374139183729.jpg",
          price: 4.59,
          date: "Sun Oct 30 2016 00:00:00 GMT-0700 (PDT)",
        },
        {
          id: 3,
          description: "Listerine",
          image:
            "https://e7.pngegg.com/pngimages/266/63/png-clipart-listerine-mouthwash-johnson-johnson-listerine-mouthwash-listerine-total-care-tooth-germ-dentistry-toothpaste-thumbnail.png",
          price: 5.99,
          date: "Sat Oct 29 2016 00:00:00 GMT-0700 (PDT)",
        },
      ]);
    });
};
