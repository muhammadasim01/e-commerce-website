const product = [
  { name: "samsung", price: 12000 },
  { name: "huawei", price: 15000 },
  { name: "iphone", price: 18000 },
  { name: "tecno", price: 20000 },
];

console.log(product);
product.map((elem) => {
  if (elem.name === "huawei") {
    elem.price = 22000;
  }
});

console.log(product);
