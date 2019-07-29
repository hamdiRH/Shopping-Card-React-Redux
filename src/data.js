import uuid from "uuid";
// shoes
const shoes1 = {
  id: uuid.v4(),
  img:
    "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/jpptcu7veqluz4zhlqjx/chaussure-m2k-tekno-pour-sQx2kQ.jpg",
  type: "shoes",
  qt: 5,
  price: 450
};
const shoes2 = {
  id: uuid.v4(),
  img: "https://vo7.com/5555-home_default/vo7-spurs-dark.jpg",
  type: "shoes",
  qt: 30,
  price: 700
};
const shoes3 = {
  id: uuid.v4(),
  img:
    "http://www.tatotech.it/image/cache/data/category_20/COOU%20Scarpe%20Antinfortunistiche%20Uomo%20Donna%20s3%20Comodissime%20Scarpe%20da%20Lavoro%20con%20Punta%20in%20Acciaio%20Scarpe%20Sportive%20di%20Sicurezza%20Unisex%20B07C51HFWF-500x500_0.jpg",
  type: "shoes",
  qt: 1,
  price: 300
};

//hats
const hat1 = {
  id: uuid.v4(),
  img:
    "https://primedia.primark.com/i/primark/123109629-01-Blush-Cap.jpg?locale=fr-*,en-*,*&$product-thumbnail$",
  type: "hats",
  qt: 0,
  price: 40
};
const hat2 = {
  id: uuid.v4(),
  img:
    "https://cdn.shoplightspeed.com/shops/604430/files/1527036/sl-revival-co-local-bbq-pig-everyday-trucker-hat-s.jpg",
  type: "hats",
  qt: 6,
  price: 20
};

// watch
const watch1 = {
  id: uuid.v4(),
  img: "https://images-na.ssl-images-amazon.com/images/I/413Szfna3YL.jpg",
  type: "watchs",
  qt: 5,
  price: 300
};
const watch2 = {
  id: uuid.v4(),
  img:
    "https://assets.mspimages.in/wp-content/uploads/2018/09/Huawei-Watch-GT-696x435.png",
  type: "watchs",
  qt: 6,
  price: 700
};

export const articles = [shoes1, shoes2, shoes3, hat1, hat2, watch1, watch2];
