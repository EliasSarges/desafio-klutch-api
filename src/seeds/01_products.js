const { v4: uuid } = require("uuid");

exports.seed = function (knex) {
  return knex("products")
    .del()
    .then(function () {
      return knex("products").insert([
        {
          id: uuid(),
          description: "BOMBRIL",
          image:
            "https://conteudo.imguol.com.br/c/noticias/2013/10/11/bombril---esponja-de-aco-1381506271857_615x470.jpg",
          price: 1.69,
          date: "Mon Oct 31 2016 00:00:00 GMT-0700 (PDT)",
        },
        {
          id: uuid(),
          description: "Qualy",
          image:
            "https://http2.mlstatic.com/banco-de-imagens-de-produtos-para-supermercado-17500-itens-D_NQ_NP_265615-MLB25288619255_012017-F.jpg",
          price: 5.29,
          date: "Sun Oct 30 2016 00:00:00 GMT-0700 (PDT)",
        },
        {
          id: uuid(),
          description: "Nescau",
          image:
            "https://http2.mlstatic.com/relaco-de-produtos-c-eanncmfotos-16-milhoes-de-produtos-D_NQ_NP_808515-MLB25247269155_122016-F.jpg",
          price: 10.25,
          date: "Sat Oct 29 2016 00:00:00 GMT-0700 (PDT)",
        },
        {
          id: uuid(),
          description: "Leite Italac",
          image:
            "https://static.carrefour.com.br/medias/sys_master/images/images/h75/hcb/h00/h00/9688613912606.jpg",
          price: 11.3,
          date: "Sat Oct 02 2016 00:00:00 GMT-0700 (PDT)",
        },
        {
          id: uuid(),
          description: "Presunto Sadia",
          image:
            "https://www.perdigao.com.br/assets/_images/f9d3c198c42d631e68f1e9138bf361850736c458.png",
          price: 100.02,
          date: "Sat Oct 02 2016 00:00:00 GMT-0700 (PDT)",
        },
      ]);
    });
};
