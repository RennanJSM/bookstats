# BookStats

BookStats é uma aplicação web que permite aos usuários pesquisar livros, visualizar informações detalhadas sobre eles e acessar gráficos de visualização baseados nos dados dos livros.

## Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Sobre

BookStats foi desenvolvido para proporcionar uma experiência de pesquisa e visualização de dados de livros de forma prática e visual. Ele usa a Google Books API para fornecer informações detalhadas sobre os livros e exibe gráficos interativos para uma melhor análise de dados.

## Funcionalidades

- **Pesquisa de Livros**: Busque livros por título ou autor e visualize informações detalhadas.
- **Gráficos Interativos**:
  - Distribuição de avaliações por gênero de livro.
  - Evolução da média de avaliações ao longo do tempo.
- **Modo Noturno**: Altere entre temas claro e escuro.
- **Acessibilidade Melhorada**: Navegação com teclado e atributos ARIA.
  
## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/bookstats.git
   cd bookstats
   ```



2. Instale as dependências:

```bash
npm install
```



3. Crie um arquivo .env na raiz do projeto e adicione sua chave de API da Google Books:

```
REACT_APP_GOOGLE_BOOKS_API_KEY=sua_chave_aqui
```

4. Execute a aplicação:

```
npm start
```


A aplicação estará disponível em http://localhost:3000


## Tecnologias Utilizadas

- React com TypeScript
- Material-UI para componentes de UI
- Framer Motion para animações de transição
- Chart.js para gráficos interativos
- Google Books API para busca de dados dos livros
