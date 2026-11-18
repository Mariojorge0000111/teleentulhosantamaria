// Silos do blog: cada artigo pertence a um, e cada silo tem uma página pilar
export interface Silo {
  slug: string;
  nome: string;
  titulo: string;
  descricao: string;
  intro: string;
  pilar: { href: string; nome: string };
}

export const SILOS: Silo[] = [
  {
    slug: 'contratar-cacamba',
    nome: 'Contratar caçamba',
    titulo: 'Como Contratar Caçamba de Entulho em Santa Maria',
    descricao: 'Guias para contratar caçamba de entulho em Santa Maria RS: preço, prazo, troca, como escolher a empresa e como pedir sem pagar a mais.',
    intro: 'Tudo o que você precisa saber antes de fechar o aluguel: como funciona, quanto custa, quanto tempo a caçamba fica e como escolher uma empresa séria.',
    pilar: { href: '/servicos/aluguel-de-cacamba/', nome: 'Aluguel de caçamba em Santa Maria' },
  },
  {
    slug: 'tamanhos-e-calculo',
    nome: 'Tamanhos e cálculo',
    titulo: 'Tamanho de Caçamba e Cálculo de Entulho: Guias',
    descricao: 'Quantos m³ tem uma caçamba, quanto pesa, como calcular o volume de entulho da obra e quando sacos bastam. Guias práticos com as contas.',
    intro: 'As contas que evitam pedir caçamba grande demais ou pequena demais: volume, peso, empolamento e equivalência em carrinhos e sacos.',
    pilar: { href: '/servicos/tamanhos-de-cacamba/', nome: 'Tamanhos de caçamba: 3, 4 e 5 m³' },
  },
  {
    slug: 'o-que-vai-na-cacamba',
    nome: 'O que vai na caçamba',
    titulo: 'O Que Pode e Não Pode na Caçamba: Guias por Material',
    descricao: 'Madeira, gesso, telha, amianto, terra, tinta, móveis: o que pode ir na caçamba de entulho, o que precisa de destino próprio e por quê.',
    intro: 'Material por material: o que a caçamba de entulho recebe, o que vai separado e o que tem destino próprio pela lei.',
    pilar: { href: '/blog/o-que-pode-e-o-que-nao-pode-na-cacamba-de-entulho/', nome: 'O que pode e o que não pode na caçamba' },
  },
  {
    slug: 'regras-e-descarte',
    nome: 'Regras e descarte legal',
    titulo: 'Regras para Caçamba e Descarte de Entulho em Santa Maria',
    descricao: 'Regras de Santa Maria para caçamba na rua e na calçada, CTR, pequeno gerador, descarte irregular e serviços da prefeitura. Com as fontes oficiais.',
    intro: 'O que a lei de Santa Maria exige de quem gera e de quem transporta entulho, e como evitar multa.',
    pilar: { href: '/blog/regras-para-cacamba-na-rua-em-santa-maria/', nome: 'Regras para caçamba na rua em Santa Maria' },
  },
  {
    slug: 'entulho-por-obra',
    nome: 'Entulho por tipo de obra',
    titulo: 'Entulho por Tipo de Obra: Reforma, Demolição e Terreno',
    descricao: 'Quanto entulho sai de reforma de banheiro, troca de piso, telhado, demolição e limpeza de terreno, e qual caçamba pedir em cada caso.',
    intro: 'Cada obra gera um entulho diferente. Veja o que esperar e qual caçamba pedir para a sua.',
    pilar: { href: '/servicos/cacamba-para-obra-e-reforma/', nome: 'Caçamba para obra e reforma' },
  },
];

export const siloPorSlug = (s: string) => SILOS.find((x) => x.slug === s);

export function todosPosts() {
  const arq = import.meta.glob<any>('../pages/blog/*.md', { eager: true });
  return Object.values(arq)
    .map((p) => ({ url: p.url as string, ...(p.frontmatter as any) }))
    .sort((a, b) => (a.data === b.data ? a.titulo.localeCompare(b.titulo) : a.data < b.data ? 1 : -1));
}
