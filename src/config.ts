// =====================================================================
// CONFIGURAÇÃO DO SITE: tudo que muda quando o site for alugado fica aqui
// =====================================================================

export const SITE = {
  nome: 'Tele Entulho Santa Maria',
  slogan: 'Caçamba de entulho e recolhimento de entulho em Santa Maria, RS',
  cidade: 'Santa Maria',
  estado: 'RS',

  // WhatsApp com DDI + DDD + número, só números
  whatsapp: '5555991438702',
  // Telefone exibido no site (deixe vazio para não exibir)
  telefone: '',
  mensagemWhatsapp: 'Olá! Vim pelo site Tele Entulho Santa Maria e quero um orçamento de caçamba.',

  // Horário de atendimento (deixe vazio até combinar com a empresa parceira)
  horario: '',
  // Empresa parceira que atende (preencher quando o site for alugado)
  empresa: '',
};

export function linkWhatsapp(mensagem = SITE.mensagemWhatsapp): string {
  if (!SITE.whatsapp) return '/contato/';
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

// Fontes oficiais usadas no conteúdo
export const FONTES = {
  decreto146: 'https://camara-sm.rs.gov.br/atividades-legislativas/legislacao/decretos-executivos/10357/decreto-executivo-n--0146-2009',
  codigoPosturas: 'https://camara-sm.rs.gov.br/atividades-legislativas/legislacao/lei-complementar/9101/lei-complementar-n-ordm---92-2012',
  descarteLegal: 'https://www.santamaria.rs.gov.br/descarte-legal/linha-verde',
};
