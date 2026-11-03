// PoC de seguranca autorizado - conteudo benigno
// Simula o "servidor do atacante": ficheiro externo servido como JS pelo dominio da app.
alert("PoC seguranca - a correr em " + location.host);
console.log("[PoC] origin:", location.origin);
