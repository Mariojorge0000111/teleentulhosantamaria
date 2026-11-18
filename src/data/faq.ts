export interface Pergunta {
  p: string;
  r: string;
  home?: boolean;
}

export interface Grupo {
  titulo: string;
  itens: Pergunta[];
}

export const FAQ: Grupo[] = [
  {
    titulo: 'Como funciona',
    itens: [
      {
        p: 'Como funciona o tele entulho em Santa Maria?',
        r: 'Você chama no WhatsApp, informa endereço, bairro e o tipo de entulho. Recebe o tamanho de caçamba indicado, o valor e o prazo. A caçamba é entregue no ponto combinado, você enche durante o período contratado e avisa quando quiser a retirada ou a troca.',
        home: true,
      },
      {
        p: 'Em quanto tempo a caçamba é entregue?',
        r: 'O prazo depende da agenda do dia e da distância até o seu bairro. Ele é informado no orçamento, antes de você fechar. Se a obra tem data marcada, peça com alguns dias de antecedência.',
      },
      {
        p: 'Quantos dias posso ficar com a caçamba?',
        r: 'O período é combinado no orçamento. No mercado, o padrão costuma ficar entre 3 e 7 dias. Se precisar de mais tempo, avise antes do fim do prazo para combinar a prorrogação ou uma troca.',
        home: true,
      },
      {
        p: 'Onde a caçamba fica: na rua ou dentro do terreno?',
        r: 'Pode ficar dentro do terreno, se houver espaço e piso firme para o caminhão, ou na pista junto ao meio-fio, sem bloquear garagem, rampa ou faixa de pedestres. A caçamba deve ter faixas reflexivas, como exige o Código de Posturas de Santa Maria.',
      },
      {
        p: 'Preciso estar presente na entrega e na retirada?',
        r: 'Não é obrigatório, mas o ponto precisa estar livre, sem carro estacionado. Na retirada, a caçamba não pode estar com entulho acima da borda.',
      },
    ],
  },
  {
    titulo: 'O que pode e o que não pode',
    itens: [
      {
        p: 'O que pode colocar na caçamba de entulho?',
        r: 'Resíduos de obra: tijolo, bloco, concreto, argamassa, reboco, telha cerâmica, piso, azulejo, louça sanitária, pedra, areia e terra. Madeira, gesso, metal e poda podem ser aceitos conforme a empresa e a área de destino; avise no pedido.',
        home: true,
      },
      {
        p: 'O que não pode ir na caçamba?',
        r: 'Lixo doméstico e restos de comida, tinta, solvente, óleo, amianto, pneu, lâmpada, pilha, bateria, eletrônico e resíduo de saúde. Em Santa Maria, lixo doméstico misturado ao entulho gera multa para o contratante, pelo Decreto Executivo nº 146/2009.',
        home: true,
      },
      {
        p: 'Posso encher a caçamba acima da borda?',
        r: 'Não. O plano municipal de resíduos da construção proíbe entulho acima da borda superior, e a multa recai sobre quem contratou. Se sobrou material, peça uma troca.',
      },
      {
        p: 'Móveis velhos e colchão podem ir na caçamba?',
        r: 'Não são entulho de obra. Algumas empresas aceitam, outras não. Pergunte no pedido para o material não ser recusado na retirada.',
      },
    ],
  },
  {
    titulo: 'Tamanhos e preço',
    itens: [
      {
        p: 'Quais os tamanhos de caçamba disponíveis?',
        r: 'Os mais comuns ficam entre 3 e 5 m³. Em Santa Maria, 5 m³ é o máximo permitido para caçamba de entulho, pelo Decreto Executivo nº 146/2009.',
        home: true,
      },
      {
        p: 'Quanto custa uma caçamba de entulho em Santa Maria?',
        r: 'Não há preço tabelado. O valor depende do tamanho, do tipo de entulho, dos dias de permanência e da distância até o bairro. O orçamento é feito pelo WhatsApp, sem compromisso, e você sabe o valor antes de fechar.',
        home: true,
      },
      {
        p: 'Como saber o tamanho certo?',
        r: 'Cerca de 16 carrinhos de mão cheios fazem 1 m³. Reforma de banheiro ou cozinha costuma caber em 3 m³; vários cômodos, em 4 m³; demolição e telhado, em 5 m³ ou com troca. Se ficar em dúvida, mande fotos do entulho.',
      },
      {
        p: 'O preço inclui a retirada?',
        r: 'Normalmente o valor cobre entrega, período combinado e retirada. Confirme no orçamento o que está incluso e quanto custa o dia extra.',
      },
    ],
  },
  {
    titulo: 'Regras e documentos',
    itens: [
      {
        p: 'Precisa de licença para colocar caçamba na rua em Santa Maria?',
        r: 'A empresa de caçambas é quem precisa estar licenciada: a caçamba deve ter nome da empresa, telefone, número da licença de operação, faixas reflexivas e a inscrição "proibido lixo doméstico". O Código de Posturas (LC nº 92/2012) prevê que o estacionamento de caçambas na via seja regulamentado por decreto. Em caso de dúvida sobre o seu endereço, consulte a prefeitura.',
      },
      {
        p: 'O que é o CTR?',
        r: 'É o Controle de Transporte de Resíduos, emitido pela transportadora. Traz o gerador, o endereço de origem, a quantidade, o tipo de material e a área licenciada de destino. Em Santa Maria, todo transporte de entulho deve ser acompanhado de CTR.',
      },
      {
        p: 'Posso deixar entulho na calçada?',
        r: 'Só por pouco tempo. O Código de Posturas de Santa Maria proíbe material de construção na via pública e tolera no máximo 6 horas quando não há como fazer a carga dentro do imóvel. Durante a obra, o passeio em frente ao lote deve ficar limpo.',
      },
      {
        p: 'Vocês atendem fora de Santa Maria?',
        r: 'Itaara, Silveira Martins, São Pedro do Sul, Restinga Sêca e Formigueiro podem ser atendidas conforme a agenda da empresa parceira, com possível taxa de deslocamento. Confirme pelo WhatsApp.',
      },
    ],
  },
];

export const FAQ_HOME = FAQ.flatMap((g) => g.itens).filter((i) => i.home);
export const FAQ_TODAS = FAQ.flatMap((g) => g.itens);
