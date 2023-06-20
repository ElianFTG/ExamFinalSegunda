import cadena from "./sumador.js";
import verificacion from "./vacio.js";

describe("Sumar", () => {
  it("deberia retornar correcto con []", () => {
    expect(cadena("[]")).toEqual("correcto");
  });
  it("deberia retornar incorrecto con [[", () => {
    expect(cadena("[[")).toEqual("incorrecto");
  });
  it("deberia retornar correcto con [[]]", () => {
    expect(cadena("[[]]")).toEqual("correcto");
  });
});

describe("Verificacion de vacios", () => {
  it("deberia retornar verdadero si el input no esta vacio", () => {
    expect(verificacion("[]")).toEqual(true);
  });
  
});