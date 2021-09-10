---
path: /autenticacao-autorizacao-e-gerenciamento-de-identidade-e-acesso

title: Autenticação, autorização e gerenciamento de identidade e acesso
subtitle: Um resumo sobre termos e conceitos que envolvem gerenciamento de acesso, permissões e privilégios
date: 2021-09-10
tags:
  - dev
  - concepts

banner:
  author: Nicola Carter
  href: https://unsplash.com/photos/jMViR70rQMw
  image: ./images/2021-09-10-autenticacao-autorizacao-e-gerenciamento-de-identidade-e-acesso/banner.jpg
---

Embora seja um pouco teórico, gerenciamento de identidade e acesso (*identity and access management* ou IAM) é um assunto importante e amplamente usado em quase tudo que toca a web.

Esse termo é usado pra descrever um contexto de sistemas e serviços que utilizam técnicas pra identificar usuários e suas determinadas permissões.

Isso envolve algumas siglas e conceitos que enganam bastante, são um pouco confusos e com terminologias parecidas mas que são interessantes de entender.

Afinal, quem nunca precisou preencher um formulário de email e senha e pra poder acessar alguma coisa, não é?

### Autenticação, autorização, permissões e privilégios

Embora esses dois termos sejam parecidos (e, na prática, qualquer pessoa vai entender se você usar qualquer um dos dois) eles são usados em diferentes operações.

#### Autenticação

É o processo de comprovação de identidade em um determinado sistema.

Quando você se autentica, você está dizendo: "oi, eu sou pessoa X e preciso fazer login".

O processo de autenticação ocorre, geralmente, através da entrada de credenciais (com email e senha) e tem o intuito de comprovar a identidade de quem está realizando um determinado acesso.

É como se você estivesse entrando em um show com seu ingresso e comprovando que você é você mesmo.

Geralmente nessa etapa, o sistema que está realizando a autenticação vai utilizar alguma estratégia pra identificar quem acabou de se autenticar, mantendo essa "sessão" ( (seja sessão mesmo ou gerando algum token como JWT, por exemplo) entre as demais requisições.

#### Autorização

Ocorre um pouco após a etapa de autenticação. É o processo de identificar se quem acabou de se logar, tem autorização pra executar alguma operação.

Vamos imaginar um cenário onde você está tentando realizar uma publicação em uma plataforma qualquer, você se autenticou em um sistema de usuários. Após essa operação, você já tem tudo o que precisa pra utilizar o sistema de postagens e escrever alguma coisa nova.

Após dizer "oi, eu sou pessoa X", o sistema de postagens vai precisar identificar se você tem autorização pra realizar essa ação.

Caso você não tenha autorização pra realizar essa operação, você não deveria conseguir criar um post, e essa decisão está intimamente ligada com o nosso próximo tópico.

Voltando pra nossa analogia do show, estaria relacionado com os locais que você teria acesso após entrar e comprovar que você é quem diz ser. Após entrar no show, você pode ter comprado o ingresso mais caro e ter acesso às áreas mais restritas do show (arquibancada, cadeira, lounge) ou o mais básico e ter acesso somente à "pista".

#### Permissão e privilégios

Ter autorização pra executar uma determinada ação ou não pode ser traduzido em permissões e privilégios.

Identificar se determinado acesso pode criar ou deletar alguma publicação é algo que pode mudar. Você pode ter acesso mínimo em um sistema mas, com o tempo (ou necessidade) receber novos privilégios nesse serviço fazendo com que o leque de funcionalidades que você pode acessar, aumente.

Outro exemplo é, pensando em um controle de uma empresa, você poder ou não gerenciar cadastros de outras pessoas desse mesmo sistema. Nem todo mundo é administrador ou tem acesso à uma ferramenta por diversas questões (incluindo segurança).

### Controle de acesso e algumas siglas comuns

Agora que já entendemos como o fluxo de identificação e restrição funcionam, podemos pensar em como essas "regras do jogo" são construídas e aplicadas.

Para gerenciar essas permissões, existem alguma estratégias utilizadas, geralmente identificadas pelas suas siglas.

#### Lista de controle de acesso (ou *access-control list*, ACL)

É o termo mais comum.

Uma lista de controle de acesso é um termo genérico pra falar sobre permissões em algum sistema, onde você simplesmente implementa diferentes regras baseadas na sua lista de usuários e geralmente lidando com operações básicas de algum recurso (como leitura, escrita ou deleção).

Na maioria das vezes não segue uma regra ou uma definição muito específica e é por isso é um termo "curinga" mais utilizado quando se fala de gerenciamento do assunto.

#### Controle de acesso baseado em "papéis/funções/cargo" (ou *role-based access control*, RBAC)

Quando pensamos em controle de acesso, uma estratégia comum e pensar em algumas funções (ou papéis) que determinados usuários podem exercer no nosso sistema.

Vamos voltar ao exemplo de postagem, poderíamos pensar em 3 papéis diferentes:

- Administração: usuários que são responsáveis por regras mais abrangentes, possuem permissões menos restritivas, podendo criar novas usuários (de qualquer categoria) e executar diversas ações dentro de um sistema;
- Criação: usuários que são responsáveis apenas por escrever postagens, sem "poder" de publicá-las ou criar e gerenciar demais usuários no sistema (um pouco mais restritivo que administração);
- Publicação: usuários que são responsáveis apenas por revisar e publicar conteúdo, sem possuírem acesso pra criar novas postagens (mais restritivo que os dois cenários anteriores).

Percebeu como nossa divisão foi feita através do papel (ou cargo) que é exercido dentro da empresa ou do sistema?

É justamente esse papel que pode ser entendido como "cargo" ou "função". Cada pessoa é responsável por determinado conjunto de operações no papel que exerce e todas essas regras são definidas

Definindo esses papeis é que os níveis de permissão são criados e, por isso, o termo "role" ("papel") é usado nessa estratégia.

#### Controle de acesso baseado em "atributos" (ou *attribute-based access control*, ABAC)

Parecido com o modelo anterior mas de uma forma ainda mais genérica, essa estratégia se baseia em atributos, ao invés de pensar no "papel" que determinada pessoa exerce dentro da empresa ou do sistema que está lidando com essas permissões.

Esses atributos podem ser relacionados à diferentes necessidades, como:
- O próprio usuário que está acessando (dados de cadastro e definições de perfil)
- O ambiente em que o acesso ocorre (horário de acesso, localização e restrições da empresa)
- O recurso que está sendo acessado (o conteúdo que está sendo acessado/alterado/criado no sistema)

Algumas restrições fáceis de imaginar quando pensamos nesses tipos de atributo são:
- Localização: habilitar/desabilitar um conteúdo baseado no local onde o acesso está ocorrendo (baseado no ambiente)
- Idade: restringir o conteúdo baseado na idade de quem acessa como conteúdo para maiores de 18 anos (baseado nos atributos do próprio usuário)

Por se basear em diferentes dados sobre diversos contextos em um único cenário de autorização, é uma estratégia que permite uma gama maior de combinações pra criar restrições e controlar acesso, mas acaba sendo mais complexa de ser implementada também.
