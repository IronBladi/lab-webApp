function determinarEstado(nota) {
  if (nota < 0 || nota > 100) return "ERROR: Nota inválida";
  if (typeof nota !== 'number') return "ERROR: Debe ser un número";

  if (nota >= 70) return "APROBADO";
  return "REPROBADO";
}

// Truco para que funcione tanto en el Navegador como en Jest (Node.js)
if (typeof module !== 'undefined') {
  module.exports = { determinarEstado };
}
