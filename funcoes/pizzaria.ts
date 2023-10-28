function pizzaria(){
    let tamanho_pizza = prompt("Informe o tamanho da sua pizza!  | 1 - Pequena R$15.00 | 2 - Média R$20.00 | 3 - Grande R$25.00");
    let add_pepperoni = prompt("Você deseja adicionar pepperoni? S/N    | Será adicionado R$2.00 na pizza pequena! | média e Grande R$3.00!");
    let add_queijo = prompt("Você quer queijo extra? S/N   |Será adicionado R$1.00 para todos os tamanhos!");
    let total;

    switch(tamanho_pizza){
        case "1":
            tamanho_pizza = "Pizza pequena R$15.00";
            total = 15.00
            if(add_pepperoni = "S", "s"){
                total + 3.00;
                add_pepperoni = "Sim."
            }

            else(add_pepperoni = "Não");

            if(add_queijo = "S", "s"){
                total + 1.00;
                add_queijo = "Sim."
            }
            else(add_queijo = "Não");

           let mensagem = prompt("Tamanho da pizza: " ,tamanho_pizza, "Adicional de pepperoni: ", add_pepperoni, "adicional de queijo: ", add_queijo);

        return total;
    
        case "2":
            tamanho_pizza = "Pizza média R$20.00";
            total = 20.00
            if(add_pepperoni = "S", "s"){
                total + 3.00;
            }

            else(total + 0);

            if(add_queijo = "S", "s"){
                total + 1.00;
    
            }
            else(total + 0);
        return total;
        
        case "3":
            tamanho_pizza = "Pizza Grande R$25.00";
            total = 25.00
            if(add_pepperoni = "S", "s"){
                total + 3.00;
            }

            else(total + 0);

            if(add_queijo = "S", "s"){
                total + 1.00;
    
            }
            else(total + 0);
        return total = 25.00;
        

        default:
        return alert("operação inválida");
        
        }
       

}

pizzaria();