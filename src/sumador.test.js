import cadena from "./sumador.js";

describe("Sumar", () => {
  it("deberia retornar correcto con []", () => {
    expect(cadena("[]")).toEqual("correcto");
  });
  it("deberia retornar incorrecto con [[", () => {
    expect(cadena("[[")).toEqual("incorrecto");
  });
});
