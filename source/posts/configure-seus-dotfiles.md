---
path: /post/configure-seus-dotfiles/

title: Configure seus dotfiles
subtitle: Automatize suas preferências e viva mais tranquilamente
date: 2019-08-28
tags:
  - dev
  - general
---

Você já se viu em uma situação onde precisou formatar seu computador e precisou reinstalar manualmente todos os programas que utilizava? Ou então trocou de máquina e teve que ir na página de cada um dos softwares que usa (Google Chrome, Spotify e vários outros) e baixar e executar o instalador um por um? Ou até mesmo, realizar algumas configurações de mouse/teclado ou visualização do seu sistema operacional?

Depois de passar por essa situação algumas (várias) vezes, acredito que você deve se cansar. Afinal, é um tempo praticamente perdido só configurando sua máquina. E é exatamente aí que o conceito (e a prática) dos tão falados "dotfiles" vem ajudar!


### Ok, mas o que são esses dotfiles?

**Dotfiles** (ou **.files**, onde "dot" significa "ponto" e é explicado pelo fato desses arquivos iniciarem com um ponto final) é um padrão de escrita de arquivos que são ocultos em alguns alguns sistemas operacionais por padrão. Geralmente esses arquivos armazenam dados sobre configurações de programas e aplicações que você executa no seu cotidiano.

Um muito conhecido na comunidade entre os desenvolvedores é o famoso **.bashrc**, responsável por conter algumas configurações iniciais que são rodadasco ao abrir um novo terminal.


### E como isso pode me ajudar?

Basicamente, configurar e manter seus **dotfiles** atualizados consiste em automatizar todas as rotinas e processos manuais que você, como desenvolvedor ou até mesmo usuário, tem que executar toda vez que formata seu sistema operacional ou troca de computador.

Ou seja: se você precisa baixar uma lista de programas (como o seu navegador favorito, serviço de streaming de música, aplicativo para mensagens e comunicação) ou configurar seu sistema operacional (como o que acontece se você clicar e arrastar usando 3 dedos no trackpad do seu notebook), você pode deixar isso automatizado. Quando trocar de computador ou precisar formatar, basta executar esses arquivos responsáveis por fazer esse "setup" e boa parte do trabalho chato já estará pronto pra você!


### Primeiros passos

Para iniciar a escrever e manter seus **dotfiles** você vai precisar de um conhecimento (mesmo que mínimo) em programação, pois você precisará, de preferência, escrever arquivos que sejam rodados pelo terminal do seu sistema operacional.

Os comandos que vou exemplificar aqui são (e podem ser) executados em um MacOS (sistema operacional de um Macbook) mas, quando necessário, vou deixando exemplos relacionados a outros sitemas operacionais (como Linux ou Windows).


### Entendendo seu terminal

Por padrão, usuários de sistemas operacionais MacOS ou Linux, podem rodar comandos no terminal usando shell (ou bash) scripts. Isso quer dizer que a forma como os scripts serão escritos devem seguir um padrão.

Não cheguei a ter experiências recentes com Windows. A última vez que executei comandos pelo terminal seguia o padrão do DOS. Um padrão de escrita um pouco diferente, mas que não impede de seguir com suas configurações. Acho que com a chegada do PowerShell você consegue escrever usando shell scripts também, mas não cheguei a testar esse recurso pessoalmente.

Independente do seu sistema operacional, indico que você leia um pouco sobre o assunto para poder se familiarizar mais com o terminal existente no seu computador. Independente de manter ou não seus **dotfiles**, é algo super válido e acho que pode acrescenter bastante em seu conhecimento e em como você lida com seu sistema! :)


### Adotando um gerenciador de pacotes

Após entender, mesmo que superficialmente, como funciona seu terminal, você vai precisar escolher um **gerenciador de pacotes**.

Para usuários Mac, o mais comum é o [Homebrew](https://brew.sh/) e o [Homebrew Cask](https://github.com/Homebrew/homebrew-cask)(extensão do Brew responsável por instalar aplicações que possuem interface visual no sistema operacional).
Para usuários Windows, existem alguns como o [Chocolatey](https://chocolatey.org) e o [Scoop](https://scoop.sh/).
Para usuários Linux, os gerenciadores são um pouco mais variados. Acredito que o mais comum (em distribuições como Ubuntu) seja o [wget](https://www.gnu.org/software/wget/).

O gerenciador de pacotes vai ser o sistema responsável por baixar seus programas pelo terminal. Ou seja: ao invés de ir no site do seu sistema X, você vai deixar configurado um comando que, ao ser executado, vai fazer esse trabalho pra você.

Cada um desses instaladores tem sua peculiaridade e sua forma de utilização, por serem aplicações diferentes. Vale ler sobre eles também pra facilitar os próximos passos.

### Iniciando sua automatização

Vamos escrever agora um pequeno arquivo responsável por instalar o gerenciador de pacotes e instalar, por exemplo, o Spotify:

Em um arquivo como *instalador-spotify.sh*.
```sh
#!/bin/sh

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew cask

brew cask install spotify
```

Pode parecer um pouco complicado olhando pela primeira vez, mas é bem simples, vamos explicar cada uma das linhas:
- Na linha 1: existe um comentário, que indica ao terminal que deve processar esse arquivo como um *shell script*, é algo recorrente quando se está escrevendo scripts para serem executados no terminal.
- Na linha 2 (ou 3, se contarmos a quebra de linha extra) está sendo instalado o Homebrew. Esse comando foi retirado exatamente do site indicado. Basicamente copiei e colei o conteúdo.
- Na linha 3: o *brew cask* está sendo instalado. Ao rodar esse comando o *brew* (que já foi instalado anteriormente) identifica automaticamente que o *cask* é uma de suas extensões e o instala para você.
- Na linha 4: o *brew cask* é utilizado para instalar o spotify para você

Executando esse arquivo pelo seu terminal rodando:

```sh
sh instalador-spotify.sh
```

Você verá uma série de logs sobre o processo e, ao finalizar, você pode pesquisar no seu sistema operacional (no caso o MacOS) que o Spotify estará instalado!

Fácil, não é? Você pode agora identificar quais os programas que deseja instalar e automatizar essa parte do processo ao configurar sua máquina.

Vale lembrar que, por estar executando esses comandos dentro de um terminal, você tem todos os benefícios como criação de variáveis, loops, condições, copiar arquivos de uma pasta para outra, criar *symlinks* (links simbólicos) e etc. O que abre um leque de possibilidades gigante para te ajudar a automatizar e deixar suas configurações bem fáceis de manter.

### Automatizando definições do sistema operacional

Algumas configurações (como ações de clicar/arrastar mouse/trackpad ou onde a barra de preferências do seu sistema operacional vai ficar localizada) do seu sistema operacional podem ser configuradas também.

Essas preferências são salvas em alguns arquivos de configuração e podem, na maioria das vezes, ser customizadas para serem configuradas via terminal também.

Por exemplo: eu, particularmente, gosto de olhar a porcentagem da bateria na barra superior no Macbook. Essa configuração pode ser feita rodando o seguinte comando via terminal:

```sh
defaults write com.apple.menuextra.battery ShowPercent -string "YES"
```

Esse comando basicamente configura (ou escreve e, por isso o "write") um valor padrão (default) para a propriedade *ShowPercent* presente dentro das configurações em *com.apple.menuextra.battery* e insere o valor *"YES"* como string.

E, caso eu quisesse checar uma configuração salva, bastaria executar:

```sh
defaults read com.apple.menuextra.battery ShowPercent
```

Dessa forma, o comando retorna (lê e, por isso o "read") o valor configurado em *com.apple.menuextra.battery*

Cada sistema operacional tem sua peculiaridade, o MacOS mantém essas preferências através do comando "defaults" no terminal (você pode dar uma olhada em alguns outros [aqui](https://ss64.com/osx/defaults.html)). Sistemas Linux como o Ubuntu utilizam o [gsettings](https://manpages.ubuntu.com/manpages/xenial/en/man1/gsettings.1.html), responsável por configurar essas preferências gráficas.


### Evite copiar dotfiles de terceiros

Os **dotfiles** refletem suas configurações pessoais. A forma como você usa seu sistema operacional é diferente da forma como seus amigos e colegas de trabalho usam. Embora olhar e se inspirar nos **dotfiles** de outras pessoas seja bacana, não é muito recomendado simplesmente "copiar" essas configurações, já que pode acabar modificando suas preferências e a forma como você utiliza sua máquina.

Pesquise, olhe, discuta sobre o assunto, mas mantenha seus **dotfiles** da forma que mais agrada e se adequa ao **seu** jeito.


### Conclusões

Espero que esses exemplos básicos sobre o conceito e funcionamento dos **dotfiles** possam ter ajudado e ter te dado umas boas ideias.

Eu costumo manter os meus no [github](https://github.com/gabrieluizramos/dotfiles), lá você vai encontrar link para alguns outros que usei como referência e como eu estruturo meus **dotfiles** atualmente, contendo tanto configurações gráficas, como arquivos usados para *symlinks* e definições do meu terminal.

Existe também uma [página no github](https://dotfiles.github.io) que contém links bem bacanas para alguns **dotfiles** que são vistos como referências na comunidade.

Torço para que a próxima formatação do seu sistema operacional ou troca de computador gaste menos tempo e facilite sua vida pelo menos um pouquinho! :)
