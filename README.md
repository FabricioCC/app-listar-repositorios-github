###App React para buscar usuários e listar repositorios

Use o comando "npm install" para instalar os pacotes usados no projeto

Em seguida "npm start" para rodar a aplicação

#Estratégia de desenvolvimento


Primeiramente, vi o funcionamento da api do github, como ela retornava os dados do usuario, os repositorios e outras informações.

Em seguida, pensei em como estruturar o projeto, então pesquisei sobre o react router, e usei ele para criar as rotas e iniciar as paginas do projeto

Após isso, comecei a desenvolver as paginas, só a estrutura do front end mesmo, então revi alguns conceitos de estilização e apliquei nas paginas

Depois, já comecei a pesquisar como carregar os dados da api na minha aplicação, entao descobri uma ferramente bem útil, que foi o useSWR,
que permitiu fazer as requesições e verificar se houve erros.

Após isso comecei a carregar os dados que recebia da api nas paginas, também pesquisei como receber os parâmetros da url, e fazer a requesicao na api
de acordo com o parâmetro passado pelo usuario

Depois disso, vi como retornar pra o usuário caso os dados ainda tivessem carregando ou caso não exista usuário.

Quando consegui carregar os dados, passei a listar os repositorios e terminar as páginas. Usei alguns componentes da biblioteca AntD, e fiz mais algumas estilizações.


#Dificuldades encontradas

1- Fazer a navegação utilizando o react router, tava ocorrendo um erro que fazia com que a home ('/') ficasse sobre as outras rotas. Para resolver tive que passar como 
parâmetro na home {exact={true}} e corrigiu o erro.

2- Erro ao carregar vários cards, tive que resolver reformatando a forma como passava os dados obtidos na requisição para serem exibidos na pagina.


