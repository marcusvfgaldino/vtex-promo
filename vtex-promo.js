( function () {

    function insertPromo(cupom, colecao) {
        
        // Chama a função para pegar a quantidade de produtos no carrinho 
        qtdProducts = getQtd();   

        // Chama a função para remover cupom aplicado 
        removeCupom();

        /* Chama a função para ler os produtos do carrinho */ 
        getProd();

        /* Chama a função para ler os produtos do carrinho e remover cupom anterior quando o orderform é atualizado */
        $(window).on('orderFormUpdated.vtex', function(evt, orderForm) {
            updateCart(orderform);
        });
    }
    
    // Função para ler os produtos do carrinho e atualizar a promoção
    function updateCart(orderform){
        qtdAtual = orderform.items.length;
        if(qtdAtual !== qtdProducts){
            removeCupom();
            getProd();
            qtdProducts = qtdAtual;
        }
    }

    /* Função que contabiliza produtos no carrinho */
    function getQtd () {
        qtd = 0;
        orderform = vtexjs.checkout.getOrderForm();
        return qtd;
    }


    // Função que remove cupom da página
    function removeCupom() {
        vtexjs.checkout.getOrderForm()
        .then(function(orderForm) {
            return vtexjs.checkout.removeDiscountCoupon();
        })
    }


    // Função para obter os produtos do carrinho 
    function getProd() {
    
    //Obtém o orderForm para identificar produtos no carrinho 
    vtexjs.checkout.getOrderForm()
        .done(function(orderForm) {
    
        //Armazena o array de itens do carrinho na variável products 
        products = orderForm.items;
        
        // Percorre o array de produtos enviando cada item do array para a função que checa se o produto existe em na coleção 
        products.forEach(checkColection);
    
    });
    }

    // Função para checar se produtos existem na coleção 
    function checkColection(product) {
    
    
    /* Define as settings para a requisição AJAX */
    
    settings = {
        "url": "/api/catalog_system/pub/products/search/?fq=productClusterIds:139&fq=productId:" + product.productId,
        "method": "GET",
        "timeout": 0,
        "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
    };
    
    /* Faz a requisição AJAX */

    $.ajax(settings).done(function (response) {
        
        /* Verifica se a resposta AJAX retornou resultado, caso sim envia o cupom da promoção via orderform */
        
        if(response.length > 0) {
            $(".coupon").remove();
            vtexjs.checkout.getOrderForm()
            .then(function(orderForm) {
                code = "DIACAFE";
                return vtexjs.checkout.addDiscountCoupon(code);
            }).then(function(orderForm) {
                console.log(orderForm);
                console.log(orderForm.paymentData);
                console.log(orderForm.totalizers);
            });
        }
        
    });
    
    }

})();