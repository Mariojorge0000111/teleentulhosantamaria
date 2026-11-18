export interface Secao {
  h2: string;
  paragrafos: string[];
  lista?: string[];
}

export interface Servico {
  slug: string;
  nome: string;
  curto: string;
  titulo: string;
  descricao: string;
  h1: string;
  intro: string;
  imagem: string;
  imagemAlt: string;
  mensagem: string;
  secoes: Secao[];
  faq: { p: string; r: string }[];
}

export const SERVICOS: Servico[] = [
  {
    slug: 'aluguel-de-cacamba',
    nome: 'Aluguel de caçamba',
    curto: 'Caçamba estacionária entregue na frente da obra, com prazo combinado e retirada quando encher.',
    titulo: 'Aluguel de Caçamba em Santa Maria RS | Tele Entulho',
    descricao: 'Aluguel de caçamba de entulho em Santa Maria RS: entrega na frente da obra, prazo combinado e retirada com descarte licenciado. Orçamento no WhatsApp.',
    h1: 'Aluguel de caçamba de entulho em Santa Maria',
    intro: 'Você chama no WhatsApp, diz o endereço e o tipo de entulho, e recebe o valor e o prazo antes de fechar. A caçamba chega na frente do imóvel, fica o período combinado e é recolhida quando estiver cheia ou quando o prazo acabar. O entulho segue para uma área licenciada, com o documento de transporte que a prefeitura exige.',
    imagem: 'cacamba-estacionaria',
    imagemAlt: 'Caçamba estacionária metálica azul parada sobre piso de paver',
    mensagem: 'Olá! Vim pelo site e quero alugar uma caçamba de entulho em Santa Maria. Endereço/bairro: ',
    secoes: [
      {
        h2: 'Como funciona o aluguel da caçamba',
        paragrafos: [
          'O aluguel tem três momentos: a entrega, o período em que a caçamba fica com você e a retirada. Na entrega, o caminhão poliguindaste deposita a caçamba no ponto combinado, de preferência dentro do terreno ou na pista junto ao meio-fio, nunca bloqueando garagem de vizinho ou rampa de acessibilidade.',
          'Durante o prazo, você enche a caçamba no ritmo da obra. Quando ela estiver cheia, é só avisar pelo WhatsApp que a retirada é agendada. Se a obra ainda não acabou, dá para pedir a troca: sai a cheia e entra uma vazia no mesmo lugar.',
        ],
        lista: [
          'Envie endereço, bairro e o que vai descartar',
          'Receba o tamanho indicado, o valor e o prazo',
          'A caçamba é entregue no dia combinado',
          'Avise quando encher para retirada ou troca',
        ],
      },
      {
        h2: 'O que define o valor do aluguel',
        paragrafos: [
          'Não existe um preço único para Santa Maria. O valor muda com o tamanho da caçamba, a distância até o bairro, o número de dias e, principalmente, o tipo de material. Entulho limpo de alvenaria (tijolo, concreto, reboco) costuma ser o mais simples de destinar. Madeira, gesso e material misturado podem ter custo de descarte diferente.',
          'Por isso o orçamento é feito caso a caso, pelo WhatsApp, antes de qualquer compromisso. Pergunte sempre o que está incluso: entrega, dias de permanência, retirada e quanto custa o dia extra.',
        ],
      },
      {
        h2: 'Regras de Santa Maria que valem para quem aluga',
        paragrafos: [
          'O Plano de Gerenciamento de Resíduos da Construção Civil do município, aprovado pelo Decreto Executivo nº 146/2009, limita a caçamba a 5 m³ e proíbe que o entulho passe da borda superior. Entulho acima da borda gera multa para quem contratou, não para a transportadora. O mesmo vale para lixo doméstico misturado ao entulho.',
          'A caçamba precisa estar identificada com nome da empresa, telefone e número da licença de operação, com faixas reflexivas e a inscrição "proibido lixo doméstico". O Código de Posturas (Lei Complementar nº 92/2012, art. 62) também exige as faixas reflexivas nas caçambas paradas na via pública.',
        ],
      },
    ],
    faq: [
      {
        p: 'Quanto tempo posso ficar com a caçamba alugada?',
        r: 'O prazo é combinado no orçamento e costuma ficar entre 3 e 7 dias no mercado. Se precisar de mais tempo, avise antes de vencer para combinar a prorrogação ou uma troca.',
      },
      {
        p: 'Preciso estar em casa na entrega da caçamba?',
        r: 'Não é obrigatório, mas ajuda. O importante é deixar o local livre, sem carro estacionado no ponto combinado, e indicar com clareza onde a caçamba deve ficar.',
      },
      {
        p: 'Posso pedir mais de uma caçamba para a mesma obra?',
        r: 'Pode. Em obras maiores é comum trabalhar com troca: a cheia sai e uma vazia entra no lugar, sem deixar duas caçambas ocupando a rua ao mesmo tempo.',
      },
    ],
  },
  {
    slug: 'recolhimento-de-entulho',
    nome: 'Recolhimento de entulho',
    curto: 'Retirada do entulho da obra ou do terreno com destino licenciado e documento de transporte.',
    titulo: 'Recolhimento de Entulho em Santa Maria RS',
    descricao: 'Recolhimento e retirada de entulho em Santa Maria RS para obra, reforma e limpeza de terreno. Destino licenciado e controle de transporte. Peça já.',
    h1: 'Recolhimento e retirada de entulho em Santa Maria',
    intro: 'Sobrou entulho da reforma, da demolição de um muro ou da limpeza do pátio? O recolhimento é feito com caçamba: ela fica no local enquanto você junta o material e depois segue para uma área licenciada pela Secretaria de Proteção Ambiental. Assim o entulho não acaba num terreno baldio com o seu endereço de origem.',
    imagem: 'recolhimento-de-entulho',
    imagemAlt: 'Trabalhador com cinto de segurança jogando tijolos do telhado dentro de uma caçamba',
    mensagem: 'Olá! Vim pelo site e preciso recolher entulho em Santa Maria. Bairro: ',
    secoes: [
      {
        h2: 'Por que o destino do entulho importa',
        paragrafos: [
          'Pelo Decreto Executivo nº 146/2009, as transportadoras de Santa Maria só podem descarregar entulho em locais licenciados pela Secretaria de Proteção Ambiental. Cada viagem precisa sair com um Controle de Transporte de Resíduos (CTR), documento que traz o gerador, o endereço de origem, a quantidade, a descrição do material e o destino.',
          'Na prática, o CTR protege você. Se o entulho aparecer descartado em lugar errado, o documento mostra que você contratou um transporte regular. Peça o CTR ou o comprovante equivalente sempre que o entulho sair da sua obra.',
        ],
      },
      {
        h2: 'Separar o entulho é obrigação de quem gera',
        paragrafos: [
          'O mesmo decreto deixa a separação do material por conta do gerador, ou seja, de quem contratou a caçamba. Na hora de encher, coloque primeiro o material pesado e limpo (concreto, tijolo, cerâmica) e deixe madeira, metal e plástico separados, se a empresa pedir.',
          'Lixo doméstico, restos de comida e embalagens de tinta não vão na caçamba de entulho. Além de proibido, isso pode gerar multa para o contratante e recusa do material na área de destino.',
        ],
        lista: [
          'Pode: tijolo, concreto, reboco, telha, piso, azulejo, pedra, terra',
          'Consulte antes: madeira, gesso, metal, poda de árvore',
          'Não pode: lixo doméstico, tinta, solvente, amianto, pneu, eletrônico',
        ],
      },
      {
        h2: 'Pequena quantidade de entulho',
        paragrafos: [
          'O plano municipal chama de pequeno gerador quem descarta até 3,5 m³ de entulho por obra, uma única vez. Se o seu volume é desse tamanho, uma caçamba pequena costuma resolver. Para poucos sacos, vale perguntar à prefeitura pelo canal Linha Verde, que atende pedidos sobre gestão de resíduos sólidos.',
        ],
      },
    ],
    faq: [
      {
        p: 'Vocês recolhem entulho ensacado?',
        r: 'O recolhimento é feito com caçamba. Se o entulho já está em sacos, eles podem ir para dentro da caçamba, desde que o conteúdo seja material de obra e não lixo doméstico.',
      },
      {
        p: 'O que é o CTR que a prefeitura exige?',
        r: 'É o Controle de Transporte de Resíduos, emitido pela transportadora. Ele registra quem gerou o entulho, o endereço de origem, o volume, o tipo de material e a área licenciada de destino.',
      },
      {
        p: 'Dá para recolher entulho de limpeza de terreno?',
        r: 'Sim, quando o material é de obra, terra ou pedra. Galhos e restos de poda dependem da aceitação da empresa e da área de destino, então informe isso no pedido.',
      },
    ],
  },
  {
    slug: 'cacamba-para-obra-e-reforma',
    nome: 'Caçamba para obra e reforma',
    curto: 'Para reforma de banheiro e cozinha, troca de piso, demolição de parede ou obra nova.',
    titulo: 'Caçamba para Obra e Reforma em Santa Maria RS',
    descricao: 'Caçamba para obra e reforma em Santa Maria RS: troca de piso, banheiro, cozinha, demolição de parede e obra nova. Tamanho certo e troca quando encher.',
    h1: 'Caçamba para obra e reforma em Santa Maria',
    intro: 'Cada tipo de obra gera um entulho diferente. Uma troca de piso solta cerâmica e contrapiso. Uma reforma de banheiro tira azulejo, louça e reboco. Uma demolição de parede gera tijolo e argamassa em volume grande. Saber o que vai sair ajuda a escolher o tamanho certo e evitar pagar duas caçambas quando uma bastaria.',
    imagem: 'reforma-interna',
    imagemAlt: 'Cômodo em reforma com parede de tijolos aparentes e sacos de material no chão',
    mensagem: 'Olá! Vim pelo site e preciso de caçamba para obra/reforma em Santa Maria. Tipo de obra: ',
    secoes: [
      {
        h2: 'Reforma de banheiro e cozinha',
        paragrafos: [
          'Quebrar revestimento de parede e piso de um banheiro comum gera bem menos de 3 m³, mas o material é pesado. Para cozinha com bancada de alvenaria, o volume cresce. Nesses casos a caçamba menor costuma atender, e a dica é encher com cuidado, sem deixar vãos, para aproveitar todo o espaço.',
        ],
      },
      {
        h2: 'Troca de piso, telhado e demolição de parede',
        paragrafos: [
          'Troca de piso em vários cômodos, retirada de telhado e derrubada de paredes geram volume. Telhas e madeiramento ocupam muito espaço e pesam pouco; tijolo e concreto ocupam menos e pesam muito. Se a obra mistura os dois, combine a troca de caçamba em vez de forçar uma só acima da borda, o que é proibido em Santa Maria.',
        ],
      },
      {
        h2: 'Obra nova e construtoras',
        paragrafos: [
          'Em obra nova, o entulho vem em etapas: fundação, alvenaria, reboco, acabamento. O melhor é manter uma caçamba fixa e programar trocas. Para construtoras, o plano municipal pede o gerenciamento dos resíduos desde a origem, com separação e destinação documentada, o que o CTR da transportadora ajuda a comprovar.',
        ],
        lista: [
          'Separe madeira e metal do entulho de alvenaria quando possível',
          'Não deixe material na calçada: o Código de Posturas tolera no máximo 6 horas na via',
          'Mantenha o passeio em frente à obra limpo e livre para pedestres',
        ],
      },
    ],
    faq: [
      {
        p: 'Qual caçamba pedir para reforma de banheiro?',
        r: 'Para um banheiro, a caçamba menor costuma bastar, porque o volume é pequeno, embora pesado. Se a reforma inclui outros cômodos, informe tudo no pedido para receber a indicação certa.',
      },
      {
        p: 'Posso deixar o entulho na calçada antes da caçamba chegar?',
        r: 'Não é recomendado. O Código de Posturas de Santa Maria (LC 92/2012, art. 61) só tolera material de construção na via por até 6 horas, quando não há como fazer a carga dentro do imóvel.',
      },
      {
        p: 'Construtora consegue caçamba fixa com trocas programadas?',
        r: 'Sim. Informe a duração da obra e a frequência estimada de trocas no pedido, para combinar um esquema que não deixe a obra parada esperando caçamba.',
      },
    ],
  },
  {
    slug: 'tamanhos-de-cacamba',
    nome: 'Tamanhos de caçamba',
    curto: 'Caçambas de 3, 4 e 5 m³: quanto cabe em cada uma e qual escolher para o seu entulho.',
    titulo: 'Tamanhos de Caçamba de Entulho: 3, 4 e 5 m³',
    descricao: 'Tamanhos de caçamba de entulho em Santa Maria RS: quanto cabe em 3, 4 e 5 m³, quantos carrinhos de mão e o limite de 5 m³ da prefeitura. Veja qual pedir.',
    h1: 'Tamanhos de caçamba de entulho: qual escolher',
    intro: 'Em Santa Maria, a caçamba de entulho tem limite de 5 m³, definido pelo plano municipal de resíduos da construção. Dentro desse limite, os tamanhos mais comuns no mercado ficam entre 3 e 5 m³. A escolha depende do volume e do peso do que vai sair da obra.',
    imagem: 'obra-com-cacamba',
    imagemAlt: 'Casa em construção com estrutura de madeira e uma caçamba vermelha na frente',
    mensagem: 'Olá! Vim pelo site e quero saber qual tamanho de caçamba preciso. Minha obra é: ',
    secoes: [
      {
        h2: 'Quanto cabe em cada tamanho',
        paragrafos: [
          'Um metro cúbico são mil litros. Um carrinho de mão comum de obra leva perto de 60 litros, então 1 m³ equivale a uns 16 carrinhos cheios. Use essa conta para estimar o seu entulho antes de pedir.',
        ],
        lista: [
          'Caçamba de 3 m³: cerca de 50 carrinhos de mão. Boa para banheiro, cozinha, muro pequeno e limpeza de pátio',
          'Caçamba de 4 m³: cerca de 65 carrinhos de mão. Atende reforma de vários cômodos e troca de piso da casa',
          'Caçamba de 5 m³: cerca de 80 carrinhos de mão. Para demolição, telhado e obra nova. É o máximo permitido em Santa Maria',
        ],
      },
      {
        h2: 'Volume e peso não são a mesma coisa',
        paragrafos: [
          'Concreto, tijolo maciço e terra pesam muito por metro cúbico. Às vezes a caçamba atinge o peso que o caminhão aguenta antes de ficar cheia. Já madeira, telha e gesso ocupam muito espaço e pesam pouco. Diga no pedido qual é o material principal: com isso a indicação de tamanho fica certa.',
        ],
      },
      {
        h2: 'Por que não existe caçamba maior em Santa Maria',
        paragrafos: [
          'O Decreto Executivo nº 146/2009 proíbe caçambas acima de 5 m³ para transporte de resíduos da construção civil e prevê multa para a empresa transportadora que usar caçamba maior. Se o seu volume passa de 5 m³, a solução é a troca: uma caçamba cheia sai e outra vazia entra.',
        ],
      },
    ],
    faq: [
      {
        p: 'Qual o tamanho padrão de caçamba de entulho?',
        r: 'Não existe um padrão único, mas as caçambas mais usadas ficam entre 3 e 5 m³. Em Santa Maria, 5 m³ é o limite máximo definido pela prefeitura.',
      },
      {
        p: 'Posso encher a caçamba acima da borda?',
        r: 'Não. Em Santa Maria, entulho acima da borda superior é proibido e a multa recai sobre o contratante. Se sobrou material, peça uma troca.',
      },
      {
        p: 'Como sei quantos metros cúbicos de entulho tenho?',
        r: 'Conte em carrinhos de mão: cerca de 16 carrinhos cheios fazem 1 m³. Se não tiver como medir, mande fotos do entulho pelo WhatsApp junto com o pedido.',
      },
    ],
  },
];
