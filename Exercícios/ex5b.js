function teste0(x, y) {
  return y - x;
}

console.log(`resposta = ` + teste0(10, 40));

function teste1(x, y) {
  return x * 2.54 + ` cm`;
}

console.log(teste1(2));

function teste2(site) {
  return `site: http://www.${site}.com.br`;
}
console.log(teste2("funcaojs"));
