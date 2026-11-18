export interface Local {
  slug: string;
  nome: string;
  prep: string;
  titulo: string;
  descricao: string;
  h1: string;
  sobre: string;
  secoes: { h2: string; paragrafos: string[]; lista?: string[] }[];
  faq: { p: string; r: string }[];
  proximos?: string[];
  fontes: string[];
}

const bairrosArq = import.meta.glob<Local>('./bairros/*.json', { eager: true, import: 'default' });
const cidadesArq = import.meta.glob<Local>('./cidades/*.json', { eager: true, import: 'default' });

const ordenar = (a: Local, b: Local) => a.nome.localeCompare(b.nome, 'pt-BR');
export const BAIRROS: Local[] = Object.values(bairrosArq).sort(ordenar);
export const CIDADES: Local[] = Object.values(cidadesArq).sort(ordenar);
export const bairroPorSlug = (s: string) => BAIRROS.find((b) => b.slug === s);
