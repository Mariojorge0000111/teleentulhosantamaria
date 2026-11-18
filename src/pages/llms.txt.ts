import type { APIRoute } from 'astro';
import { SITE } from '../config';
import { SERVICOS } from '../data/servicos';
import { BAIRROS, CIDADES } from '../data/locais';

export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const posts = Object.values(import.meta.glob<any>('./blog/*.md', { eager: true }));
  const txt = `# ${SITE.nome}

> ${SITE.slogan}. Orçamento pelo WhatsApp. Caçambas de 3 a 5 m³ (5 m³ é o máximo permitido em Santa Maria pelo Decreto Executivo nº 146/2009).

## Serviços
${SERVICOS.map((s) => `- [${s.nome}](${u(`/servicos/${s.slug}/`)}): ${s.curto}`).join('\n')}

## Bairros de Santa Maria
${BAIRROS.map((b) => `- [${b.nome}](${u(`/bairros/${b.slug}/`)})`).join('\n')}

## Cidades vizinhas
${CIDADES.map((c) => `- [${c.nome}](${u(`/cidades/${c.slug}/`)})`).join('\n')}

## Guias
- [Perguntas frequentes](${u('/perguntas-frequentes/')})
${posts.map((p) => `- [${p.frontmatter.titulo}](${u(p.url)}): ${p.frontmatter.descricao}`).join('\n')}
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
