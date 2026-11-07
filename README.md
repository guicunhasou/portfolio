# Guilherme Cunha | Portfólio

Portfólio profissional de Guilherme Cunha, estudante de Web Design na FIAP, com foco em desenvolvimento front-end, UX/UI e design de interfaces. Reúne uma apresentação pessoal, canais de contato e projetos selecionados, com descrições de contexto e participação individual.

A interface combina uma identidade visual autoral com composição minimalista, fundo animado, temas claro e escuro e controles de experiência.

## Tecnologias

| Tecnologia | Uso no portfólio |
| --- | --- |
| React 19 e React DOM 19 | Componentes, estado e renderização da interface |
| TypeScript 6 | Tipagem de componentes, projetos, traduções e preferências, com modo estrito |
| Vite 8 e plugin React | Servidor de desenvolvimento, transformação dos arquivos e build |
| CSS | Layout responsivo, tokens visuais, temas, animações e estados de interação |
| HTML | Documento inicial, metadados e preparação das preferências antes da renderização |
| GitHub Actions | Verificação de TypeScript, build e fluxo de publicação |

As versões exatas das dependências estão registradas em [package-lock.json](package-lock.json). As tecnologias citadas nos cards pertencem aos respectivos projetos; React Native, Bootstrap e Node-RED, por exemplo, não são dependências deste portfólio.

## Funcionalidades

- Apresentação pessoal e links para e-mail, LinkedIn, GitHub e Behance.
- Quatro projetos: Estelar, SportsX, Jardimental e Iara Games.
- Cards que abrem modais com descrição completa, tecnologias, créditos quando aplicáveis e links externos.
- Galerias com três imagens por projeto, navegação circular anterior/próxima e indicação da posição atual.
- Rotação automática das imagens a cada cinco segundos, interrompida ao navegar manualmente, focar os controles da galeria ou entrar com o ponteiro na área da imagem. A navegação manual continua disponível com movimento reduzido ou animações pausadas.
- Temas claro, escuro e opção de acompanhar o sistema.
- Interface em português, inglês, espanhol, francês e alemão.
- Preferências de redução de movimento, pausa de animações, contraste reforçado e destaque de links.
- Fundo decorativo animado, cujas animações são pausadas quando a página fica oculta.

## Arquitetura e diretórios

A aplicação é uma página única renderizada no cliente, sem roteador, backend ou banco de dados próprios. O conteúdo dos projetos é definido em arquivos TypeScript. Estado local e contextos React controlam idioma, preferências, seleção de projetos e galerias.

```text
portfolio/
├── .github/workflows/portfolio.yml   # Validação e publicação
├── public/                          # Assets copiados sem transformação
├── src/
│   ├── acessibilidade/              # Contexto e persistência das preferências
│   ├── assets/imagens/              # Perfil, capas, galerias e fundo
│   ├── components/                  # Perfil, cards, modais, controles e rodapé
│   ├── data/                        # Projetos e links sociais
│   ├── idiomas/                     # Contexto, idiomas e traduções
│   ├── styles/                      # Tokens, estilos globais e responsividade
│   ├── types/                       # Tipos de projetos e links sociais
│   ├── App.tsx                      # Composição da página e portal dos controles
│   └── main.tsx                     # Entrada React e provedores de contexto
├── index.html                       # Documento HTML inicial
├── package.json                     # Scripts e requisitos do ambiente
├── package-lock.json                # Versões resolvidas das dependências
├── tsconfig.json                    # Referências das configurações TypeScript
├── tsconfig.app.json                # Configuração da aplicação
├── tsconfig.node.json               # Configuração do arquivo Vite
└── vite.config.ts                   # Integração Vite e React
```

O [App.tsx](src/App.tsx) reúne os componentes e usa um portal para posicionar os controles de experiência dentro do modal aberto. O CSS é dividido entre arquivos globais e arquivos próximos aos componentes; [variaveis.css](src/styles/variaveis.css) centraliza os tokens e [global.css](src/styles/global.css) agrega os estilos da interface.

## Instalação e execução local

### Requisitos

- Git.
- Node.js compatível com `^20.19.0 || >=22.12.0`, conforme o campo `engines` do [package.json](package.json). O workflow utiliza Node.js 22.
- npm e acesso à rede para instalar as dependências.

Para obter a branch de desenvolvimento:

```bash
git clone --branch testes https://github.com/guicunhasou/portfolio.git
cd portfolio
npm ci
npm run dev
```

Abra o endereço informado pelo Vite no terminal. A aplicação atual não exige arquivo `.env`, credenciais ou serviço de backend para executar localmente. A fonte Parkinsans é carregada do Google Fonts e depende de conexão externa; há fallback para `sans-serif`.

### Build e prévia local

```bash
npm run typecheck
npm run build
npm run preview
```

O build é gerado em `dist/`, diretório ignorado pelo Git. A prévia serve esse resultado localmente; execute o build novamente depois de alterar o código. Encerre o servidor de desenvolvimento ou de prévia com `Ctrl+C`.

## Comandos disponíveis

| Comando | O que executa |
| --- | --- |
| `npm ci` | Instala as dependências a partir do lockfile |
| `npm run dev` | Inicia o servidor de desenvolvimento Vite |
| `npm run typecheck` | Executa `tsc -b` para verificar TypeScript |
| `npm run build` | Executa `tsc -b && vite build` |
| `npm run preview` | Serve localmente o build de `dist/` |
| `git diff --check` | Verifica problemas de whitespace no diff de arquivos rastreados |

Não há script `test`, script de lint ou suíte de testes automatizados configurados. TypeScript e build não substituem os testes funcionais, visuais e de acessibilidade no navegador.

## Internacionalização e temas

Os idiomas disponíveis são definidos em [tipos.ts](src/idiomas/tipos.ts). O [contexto de idioma](src/idiomas/IdiomaContexto.tsx) prioriza a preferência salva, depois considera o idioma do navegador e usa português como alternativa. Ele também atualiza o atributo `lang` do documento e os metadados traduzidos durante a execução.

Os dados originais em português ficam em [projetos.ts](src/data/projetos.ts). Os textos da interface e as traduções dos projetos para inglês, espanhol, francês e alemão ficam em [traducoes.ts](src/idiomas/traducoes.ts). Ao editar projetos, mantenha descrições, rótulos de links e textos alternativos correspondentes nos cinco idiomas.

O tema pode ser claro, escuro ou acompanhar a preferência do sistema. As escolhas de tema, idioma e acessibilidade são persistidas em `localStorage`, com tratamento de falhas de leitura e escrita. Sem acesso ao armazenamento, a interface continua usando o estado da sessão, mas as escolhas podem não persistir após recarregar.

## Recursos de acessibilidade implementados

- Estrutura com `main`, seções identificadas, headings, listas e botões nativos para abrir os projetos.
- Modais com `<dialog>` e `showModal()`, título e descrição associados, contenção de foco, fechamento por Escape e retorno ao acionador quando o fechamento ocorre pelo teclado.
- Controles de tema e idioma com grupos de seleção, estado anunciado e navegação por setas, Home e End; preferências de acessibilidade expostas como switches.
- Indicadores de foco visível e textos auxiliares destinados a leitores de tela.
- Textos alternativos nas imagens e elementos decorativos ocultos da árvore de acessibilidade.
- Controles de galeria com nomes traduzidos e indicação da posição anunciada de forma discreta quando a rotação está interrompida, reduzida ou pausada.
- Respeito a `prefers-reduced-motion`, além da preferência manual de redução de movimento. A rotação automática da galeria é suspensa nessas condições.
- Opções para pausar animações, reforçar contraste e destacar links.
- Avisos de abertura em nova aba nos links sociais e de projetos, com `rel="noopener noreferrer"`.

Esses recursos descrevem a implementação existente e não representam uma declaração de conformidade integral com WCAG. A compatibilidade com leitores de tela, dispositivos físicos e diferentes navegadores depende de testes específicos.

## Projetos acadêmicos e demonstrações

Estelar, SportsX e Iara Games são apresentados como trabalhos desenvolvidos em equipe, com créditos e descrições de contribuição individual. Jardimental é um estudo de caso de UX/UI com foco em prototipação. As imagens mostram interfaces dos trabalhos; não significam que todas as funcionalidades ilustradas estejam disponíveis nesta aplicação.

Os destinos de repositórios, páginas e protótipos estão definidos nos dados dos projetos. O portfólio encaminha para esses materiais externos e não executa suas aplicações. A disponibilidade e as permissões de acesso de demonstrações, Figma e demais serviços podem variar.

## Branches e validação contínua

- `main`: referência de produção do projeto `guicunhasous-projects/portfolio` na Vercel, publicado em https://guicunha.com.br/.
- `testes`: desenvolvimento e validação; o workflow não publica essa branch.

O [workflow](.github/workflows/portfolio.yml) executa `npm ci`, TypeScript e build em pushes para `main` e `testes`, em pull requests destinados a `main` e por acionamento manual. A preparação e a publicação no GitHub Pages estão condicionadas à referência `main` e a eventos que não sejam pull requests.

Esta versão reúne as correções de rolagem e fechamento dos modais, navegação manual das galerias, descrições de contribuições individuais, contraste do rodapé e metadados do domínio oficial. A configuração legada do GitHub Pages foi preservada.

## Limitações conhecidas

- A página depende de JavaScript para renderizar o conteúdo principal; não há renderização no servidor nem pré-renderização configurada.
- Os modais dependem de suporte nativo a `<dialog>`, `showModal()` e recursos modernos de CSS, incluindo unidades `dvh`. Não há polyfill configurado.
- Não há navegação por gestos de swipe nas galerias; a navegação manual usa os botões anterior e próxima.
- O contraste do rodapé foi conferido nos temas claro e escuro; os cálculos de cores não equivalem a uma auditoria completa de acessibilidade.
- A validação local incluiu TypeScript, build, os quatro modais em três tamanhos, galerias por teclado, fechamento por Escape e retorno de foco. Toque em dispositivos físicos e leitores de tela não foram validados.

Antes de homologar uma versão, confira os quatro modais, a rolagem até os links em telas baixas, a navegação das galerias, os cinco idiomas, os dois temas, o teclado e as preferências de movimento. Inclua telas estreitas e texto ampliado nos testes manuais.
