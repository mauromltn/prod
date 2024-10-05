const prodotto = {
    nome: "Quaderno",
    quantita: 10
};

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const prezzo = parseFloat(document.querySelector('input[name="prezzo"]').value);
    const totale = prodotto.quantita * prezzo;
    alert(`Nome: ${prodotto.nome}\n Quantità: ${prodotto.quantita}\n Prezzo Totale: ${totale}€`);
});