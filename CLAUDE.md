# teleentulhosantamaria · Tele Entulho Santa Maria (teleentulhosantamaria.com.br)

Site de aluguel (rank and rent) do Mário Jorge. Ranqueia no Google para tele entulho / caçamba de entulho em Santa Maria (RS). Os leads vão para o WhatsApp dele (5555991438702) e ele mesmo os repassa. Quando o site for alugado, troca-se só o `src/config.ts` (nome, WhatsApp, horário, empresa).

## Stack e publicação
- Astro 7 + @astrojs/sitemap (com `lastmod`), Node 22 (`.node-version`). `trailingSlash: 'always'`, CSS inline.
- Cloudflare Pages: cada push na `main` publica sozinho (build `npm run build`, saída `dist`).
- Domínio: https://teleentulhosantamaria.com.br (registrado no Registro.br).
- Sitemap: `/sitemap-index.xml`.
- Antes de mexer: `git pull` (tarefas agendadas fazem commits na `main`).
- Commits: autor `Mário Jorge <mariojorgefx@gmail.com>`, mensagem em português.

## Onde fica cada coisa
- `src/config.ts`: marca, WhatsApp, horário (vazio até ter empresa), links das leis.
- `src/data/servicos.ts`: 4 serviços (`/servicos/<slug>/`).
- `src/data/bairros/*.json`: 16 bairros com texto único (`/bairros/<slug>/`); `src/data/cidades/*.json`: 5 cidades vizinhas (`/cidades/<slug>/`). Template comum: `src/components/PaginaLocal.astro`.
- `src/data/faq.ts`: FAQ geral (página `/perguntas-frequentes/`; as marcadas `home: true` vão para a home).
- `src/pages/blog/*.md`: 32 artigos (18/11/2026), layout `Post.astro`, frontmatter `titulo`, `tituloSeo`, `descricao`, `data`, `silo`, `imagem`, `imagemAlt`, `palavraChave`, `faq`.
- Silos do blog em `src/data/silos.ts` (contratar-cacamba, tamanhos-e-calculo, o-que-vai-na-cacamba, regras-e-descarte, entulho-por-obra), cada um com página pilar e categoria em `/blog/categoria/<silo>/`. O `Post.astro` mostra "Continue lendo" com o pilar e os irmãos do silo; as páginas de serviço listam os guias do silo correspondente. Todo artigo novo precisa de `silo` e de 2 a 4 links no texto (pilar, irmãos, serviço ou bairro).
- Mapa da área de atendimento (Google Maps incorporado, lazy): `src/components/MapaAtendimento.astro`, na home, contato, lista de bairros e em cada bairro/cidade. Schema com geo e hasMap de Santa Maria no `Base.astro`.
- Sem crédito da SVG no rodapé (decisão do Mário: não deixar rastro da rede de sites de aluguel).
- Imagens: `public/images/<nome>.webp` (1600) e `<nome>-800.webp`, tamanhos em `src/data/imagens.json`. Fotos do Pexels; IDs usados em `src/data/pexels-usados.json` (não repetir, nem as dos sites 1 e 2). Capa da home: foto real de caçamba (`capa-cacamba`, Pexels 9669805, recorte 1:1; 4:3 no celular). `CacambaArte.astro` (SVG antigo) ficou sem uso.
- Design minimalista (redesenho 18/11/2026): fundo branco + superfície #f6f5f3, texto #111827, cinza #5b6370, laranja #ea580c (texto #c2410c), verde WhatsApp #15803d. Fonte única Manrope variável. No celular: menu em gaveta, barra fixa de WhatsApp no rodapé, cards em trilho com rolagem lateral. Imagens com versões 480/800/1600.

## Analytics e Search Console
- Google Analytics 4: propriedade "teleentulhosantamaria.com.br" (conta "Sites SVG", a401060034 / p565106086, fluxo 16370148776), ID `G-94MBZR8DC5`, em `src/components/Analytics.astro` (carregado no `Base`, a tag do Google só entra depois do `load`).
- Evento `clique_whatsapp` em todo link wa.me, com `area` (topo, menu, capa, cta, barra_fixa, rodape, conteudo), `texto_link`, `pagina` e `tipo_pagina`.
- `clique_whatsapp` marcado como evento principal (conversão) no GA4 em 24/11/2026.
- Search Console: propriedade de domínio `sc-domain:teleentulhosantamaria.com.br`, verificada pela Cloudflare (TXT) em 18/11/2026. Sitemap enviado e indexação da home pedida no mesmo dia.

## Regras de conteúdo
- Título 30–60 caracteres, descrição 130–155. Um H1 por página.
- Honestidade: nada de endereço, CNPJ, avaliações, depoimentos, número de clientes, anos de mercado ou preço inventado. Preço só como fatores.
- Regras locais citadas (conferidas em 18/11/2026 no site da Câmara): Decreto Executivo nº 146/2009 (caçamba máx. 5 m³, nada acima da borda e sem lixo doméstico = multa ao contratante, CTR, área licenciada pela SMPA, pequeno gerador até 3,5 m³) e LC nº 92/2012 (art. 61: material na via até 6 h; art. 62: faixas reflexivas; art. 63: passeio limpo).
- Cidades vizinhas: sempre "conforme agenda da empresa parceira, com possível taxa de deslocamento".
- Sem travessão longo e sem clichês de IA. Texto de cada bairro precisa ser único.
- Lighthouse mobile depois do redesenho (18/11/2026): 100 em acessibilidade, boas práticas e SEO; desempenho 99–100.

## Rotinas
- Plano de 8 semanas: 1 backlink por semana pela 8links (nunca comprar nem recarregar créditos, nunca digitar senhas) e 1 artigo novo a cada 2 semanas. Os temas do plano original já foram publicados; próximos sugeridos: troca de piso (quanto entulho), reforma de telhado, caçamba em condomínio, entulho depois de enchente/temporal.

## Combinados com o Mário
- Quando precisar de uma confirmação dele, mandar notificação no celular.
- Responder em português.
