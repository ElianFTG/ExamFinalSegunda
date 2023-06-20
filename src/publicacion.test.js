import publivacio from "./verificacionPublicacion";
describe("Verificacion de vacios", () => {
    it("deberia retornar verdadero si el input no esta vacio", () => {
      expect(publivacio("asda")).toEqual(true);
    });
    it("deberia retornar falso si el input esta vacio", () => {
        expect(publivacio("")).toEqual(false);
      });
  });