function calc() {
    var quantities = document.getElementsByName("quantity");
    var foodName = document.getElementsByClassName("food-description")
    var foodPrice = document.getElementsByClassName("price-valor")

    var output = document.getElementById("output");
    var name = document.getElementById("inputNome").value
    var total = 0


    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    var text = output.innerHTML = `Caro <span class="name-calc"><strong>${name}.</strong></span> <br>
    Seguem os dados do seu pedido.<p>
    o seu pedido é:<p>`

    for (var input of quantities) {


        if (input.value >= 1) {
            var id = input.id
            output.innerHTML += `<li>Prato: ${foodName[id - 1].textContent}  - Preço unitário: R$${foodPrice[id - 1].textContent} - Quantidade: ${input.value} - Total: R$${parseFloat(foodPrice[id - 1].textContent) * parseFloat(input.value)} </li>`;
            total += parseFloat(foodPrice[id - 1].textContent) * parseFloat(input.value)


        }

    }
    output.innerHTML += `<h3><br>Preço final: ${formatter.format(total)}</h3> `;
    if (total <= 0.00) {
        output.innerHTML = `<p class="text-danger fs-3 text-center"><strong>Selecione pelo menos um prato!</strong></p>`

    }







}

