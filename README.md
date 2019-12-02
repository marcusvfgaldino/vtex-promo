Módulo para criar promoções dinâmicas VTEX 
==============

Este módulo permite a criação de promoções de maneira dinâmica na loja VTEX através de produtos e coleções específicas, é possível criar e manipular promoções a partir de cupons criados na loja.

### Instalação

1. Copie o conteúdo do arquivo vtex-promo.js para o custom5-checkout.js nos códigos do módulo de checkout
2. Inicie o módulo de promoção com a função insertPromo(produto, colecao), passando os paramêtros de produto e/ou coleção que queira aplicar a promoção.

### Exemplo de Uso

Este módulo permite que se crie promoções que não são possíveis serem criadas utilizando apenas o módulo de promoções do painel da Vtex.

Este é um exemplo de uso, onde se aplica uma promoção de frete grátis caso algum produto de uma determinada coleção seja adicionado pelo cliente no carrinho junto com qualquer outro produto da loja:

1. Crie uma promoção no módulo de promoções do painel da Vtex com um cupom que aplique frete grátis. Para saber como criar uma promoção, acesse: https://help.vtex.com/tutorial/como-criar-promocoes
2. Crie a coleção de produtos que irá disparar o frete grátis caso exista algum produto dela junto com qualquer outro no carrinho. Para saber como criar coleções, acesse: https://help.vtex.com/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/3moFonW33dgOYDrU21Z1X0
3. Após seguir os passos de instalação do módulo, faça a chamada da função com os seguintes parêmetros: insertPromo('codigo_do_cupom', 'id_da_coleção'), onde "'código do cupom'" é o código do cupom de frete grátis criado e o "'id_da_coleção'" é o código id de coleção que foi criada.

### Informações importantes

Caso o cliente tenha acesso ao código do cupom criado, o mesmo poderá aplicá-lo a qualquer momento, invalidando a promoção. Por isso, o cupom de promoção não deverá ser divulgado para clientes e visistantes da loja e deverá ser usado somente por este módulo.

Como o código do cupom não poderá ser divulgado, este módulo quando ativado remove automaticamente o campo para aplicar os códigos de cupom. Sendo assim, não é recomendado o uso deste módulo com outras promoções de cumpom de desconto ativas.



