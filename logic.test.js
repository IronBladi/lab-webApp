const { determinarEstado } = require('./logic');

test('Debe aprobar si la nota es mayor o igual a 70', () => {
  expect(determinarEstado(70)).toBe("APROBADO");
  expect(determinarEstado(85)).toBe("APROBADO");
});

test('Debe reprobar si la nota es menor a 70', () => {
  expect(determinarEstado(69)).toBe("REPROBADO");
  expect(determinarEstado(40)).toBe("REPROBADO");
});

test('Debe detectar notas fuera de rango', () => {
  expect(determinarEstado(-1)).toBe("ERROR: Nota inválida");
  expect(determinarEstado(101)).toBe("ERROR: Nota inválida");
});

test('Debe detectar valores no numéricos', () => {
  expect(determinarEstado("A")).toBe("ERROR: Debe ser un número");
});
