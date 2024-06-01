

function calc() {
    var quantities = document.getElementsByName("quantity");
    var foodName = document.getElementsByClassName("food-description")
    var foodPrice = document.getElementsByClassName("price-valor")

    var output = document.getElementById("output");
    var name = document.getElementById("name").value;
    var total = 0;

    output.innerHTML = "";
    output.innerHTML = `<div style="margin: 2rem 0 2rem 0;">Caro <span class="name-calc">${name}.</span> </div> 
                        Seguem os dados do seu pedido.<p>
                        o seu pedido é:<p>`

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    for (var input of quantities) {
        if (input.value > 0) {

            var id = input.id
            output.innerHTML += `<li>Prato: ${foodName[id - 1].textContent}  - Preço unitário: R$${foodPrice[id - 1].textContent} - Quantidade: ${input.value} - Total: R$${parseFloat(foodPrice[id - 1].textContent) * parseFloat(input.value)} </li>`;
            total += parseFloat(foodPrice[id - 1].textContent) * parseFloat(input.value)
        }

    }
    output.innerHTML += `<h3><br>Preço final: ${formatter.format(total)}</h3> `;



}

