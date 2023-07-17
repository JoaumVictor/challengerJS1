import {
  contarCaracteres,
  somarNumeros,
  verificarParidade,
  obterValorAbsoluto,
  obterMaiorNumero,
  concatenarStrings,
  calcularAreaQuadrado,
  calcularPontuacao,
  catAndMouse,
} from "./challenger";

// Função: contarCaracteres
test("contarCaracteres retorna o número correto de caracteres", () => {
  expect(contarCaracteres("Hello, world!")).toBe(13);
  expect(contarCaracteres("OpenAI is amazing")).toBe(18);
});

// Função: somarNumeros
test("somarNumeros retorna a soma correta", () => {
  expect(somarNumeros(5, 3)).toBe(8);
  expect(somarNumeros(10, -2)).toBe(8);
});

// Função: verificarParidade
test("verificarParidade retorna true para números pares e false para números ímpares", () => {
  expect(verificarParidade(4)).toBe(true);
  expect(verificarParidade(7)).toBe(false);
});

// Função: obterValorAbsoluto
test("obterValorAbsoluto retorna o valor absoluto correto", () => {
  expect(obterValorAbsoluto(-5)).toBe(5);
  expect(obterValorAbsoluto(10)).toBe(10);
});

// Função: obterMaiorNumero
test("obterMaiorNumero retorna o maior valor da lista", () => {
  expect(obterMaiorNumero([3, 7, 2, 9, 5])).toBe(9);
  expect(obterMaiorNumero([-1, -5, -3, -2])).toBe(-1);
});

// Função: concatenarStrings
test("concatenarStrings retorna a concatenação correta das strings", () => {
  expect(concatenarStrings(["Hello", " ", "world!"])).toBe("Hello world!");
  expect(concatenarStrings(["Open", "AI", " ", "is", " ", "amazing"])).toBe(
    "OpenAI is amazing"
  );
});

// Função: calcularAreaQuadrado
test("calcularAreaQuadrado retorna a área correta do quadrado", () => {
  expect(calcularAreaQuadrado(5)).toBe(25);
  expect(calcularAreaQuadrado(8)).toBe(64);
});

// Função: calcularPontuacao
test("calcularPontuacao retorna a pontuação total correta do time", () => {
  expect(calcularPontuacao(5, 2)).toBe(13);
  expect(calcularPontuacao(3, 4)).toBe(5);
});

// Função: catAndMouse
test("catAndMouse retorna o resultado correto", () => {
  expect(catAndMouse(3, 2, 4)).toBe("cat2");
  expect(catAndMouse(1, 5, 3)).toBe("cat1");
  expect(catAndMouse(7, 5, 3)).toBe("Os gatos trombam e o rato foge.");
});
