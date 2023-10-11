botao.addEventListener ('click',function(){



    var NomeCliente = nome.value;
    var quantidadeSorvete = quantidade.value;
    var saborSorvete = sabores.value;


       /* alert( "Nome Cliente: " + NomeCliente + "   Quantidade: " +  quantidadeSorvete + "    sabores: " +  saborSorvete);*/
       
        pedidoNome.innerHTML = "Nome:" + NomeCliente;
        pedidoQuantia.innerHTML = "Quantia:" + quantidadeSorvete;
       pedidoSabor.innerHTML = "Sabor:" + saborSorvete;
    });