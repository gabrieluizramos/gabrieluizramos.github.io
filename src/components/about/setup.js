import React from 'react';
import Img from 'gatsby-image';

import Emoji from '@components/emoji';
import Link from '@components/link';

const Setup = ({ images }) => (
  <>
    <header>
      <h1>Setup <Emoji aria-label="ferramentas" content="🛠" /></h1>
      <Img fluid={images.setup.childImageSharp.fluid} />
      <h2>Hardware, software e ferramentas em geral</h2>
    </header>
    <section>
      <p>
        Sempre que possível eu tenho tentado melhorar a qualidade do ambiente em que trabalho, seja através de algum acessório físico que facilite meu dia-a-dia ou com algum software. É o tipo de coisa que eu vejo muito como investimento e não somente como um gasto, sabe?
      </p>
      <p>
        Após ser inspirado por páginas de setups por aí e depois de tanto carinho investido em tornar meu cantinho mais confortável, decidi que poderia valer a pena deixar isso registrado e atualizado por aqui também.
      </p>
      <hr />
      <section>
        <h2>Hardware</h2>
        <h3>Dispositivos</h3>
        <Img fluid={images.devices.childImageSharp.fluid} />

        <h4>Máquina</h4>
        <p>
          Como máquina pra trabalho e coisas pessoais eu utilizo um Macbook Pro de 13" modelo 2020. Ele tem um processador i7, 32Gb de RAM e 2Tb de armazenamento. <br />
          Comprei esse computador quando comecei a <Link href="/clt-pj-e-o-trabalho-remoto">trabalhar remotamente</Link>.
          </p>
        <p>
          Minha ideia desde o início foi montar uma configuração mais "limpa" (às vezes é inevitável, mas uma mesa organizada é sempre bom né?) sem muitos cabos e somente com o que eu precisava usar. Então depois de pensar durante um bom tempo, embora eu quisesse a portabilidade de um notebook (e, por isso um de 13" era ideal se comparado aos de 16") minha ideia era usá-lo como um desktop padrão. Embora eu deteste a touchbar, os modelos de Macbook Air (que só trazem a parte boa e o touchID) não possuiam tantas portas USB quando eu talvez precisasse.
        </p>
        <p>
          Claro que tudo fica muito bonitinho, mas também acaba sendo um inve$timento extra, de tempo e dinheiro. Mas no dia-a-dia e pra forma como eu trabalho, com certeza compensou muito!
        </p>
        <p>
          Com isso em mente, posso comentar um pouco mais dos periféricos que eu uso.
        </p>

        <h4>Tablet</h4>
        <p>
          Muitas vezes, no meio de uma explicação pra alguma turma ou ao pensar em alguma estrutura/arquitetura, às coisas ficam mais fáceis se você fizer uns rabiscos e desenhos enquanto fala.
        </p>
        <p>
          Costumo usar muito um site chamado <Link href="https://witeboard.com/">Witeboard</Link> pra isso e desenhar com mouse nem sempre é tão fácil.
        </p>
        <p>
          Além disso, algumas vezes deixar algum conteúdo de texto ou alguma "cola" pra alguma coisa em uma tela secundária, acabava sendo necessário. Nada que precisasse de um extra monitor (já vou comentar disso em breve), então um tablet resolvia muito bem essas necessidades.
        </p>
        <p>
          Claro que, quando você pensa em Tablet, geralmente a linha de iPad é o que vem à cabeça, né? Só que pro que eu uso, seria "até demais". Uso de vez em quando pra esses casos que comentei, em alguns cenários pra consumir algum conteúdo... Também não queria comprar algumas facilidades como a canetinha separado.
        </p>
        <p>
          Com isso, o <Link href="https://www.samsung.com/br/tablets/galaxy-tab-s/galaxy-tab-s6-lite-10-4-inch-gray-64gb-wi-fi-sm-p615nzavzto/">Tab S6 Lite</Link> da Samsung acabou sendo uma alternativa viável para o que eu buscava. Ele já vem completamente pronto pra uso, com capa, caneta (passiva) e, além de tudo, tem um design muito bonito quando você deixa tudo junto no case!
        </p>

        <h4>Kindle</h4>
        <p>
          Você muito provavelmente já conhece então nem tem muito o que falar né?
        </p>
        <p>
          Ajuda muito em quase todas as leituras que eu faço fora do computador. Além de ser prático e bem pequeno pra levar pra algum lugar.
        </p>
        <p>
          Única coisa interessante é que é o modelo que possui luz (paperwhite) mas de algumas boas gerações atrás, é uma funcionalidade que vale a pena entre os modelos. Fiquei sabendo que os mais novos tem até <em>dark-mode</em>, parece bem interessante!
        </p>
        <p>
          O aplicativo para computador ou celular também é bem legal de se usar caso queira ler em mais de um dispositivo.
        </p>

        <h3>Periféricos</h3>
        <Img fluid={images.peripherals.childImageSharp.fluid} />

        <h4>Monitor</h4>
        <p>
          Eu já fui daqueles obcedados por vários monitores... Durante um tempo cheguei a usar 3 telas simultâneas, sendo elas a do notebook e outros dois monitores externos e eu acabei percebendo algumas coisas: a maquina que eu usava acabava travando e esquentando muito mais, eu tinha dores de cabeça muito mais constantes (talvez por causa das diversas fontes de luz diretamente no meu rosto).
        </p>
        <p>
          Passei um bom tempo nessa configuração de notebook + 2 monitores. Eu sempre gostei de ter um espaço suficiente de tela que me permitisse deixar meu editor e meu terminal (que eu uso separado) abertos sem ficar mudando de tela. Se fosse possível então deixar a aba de DevTools então enquanto eu preciso <Link href="/depuracao-de-aplicacoes-javascript"><em>debuggar</em></Link> alguma coisa então, seria perfeito!
        </p>
        <p>
          Pensado nisso mas querendo reduzir a quantidade de "confusão" que tinha na minha mesa, resolvi dar uma chance pra um monitor UltraWide e pra ser sincero... Foi a melhor coisa que eu fiz!
        </p>
        <p>
          Pensei em comprar um curvo durante um tempo (e não excluo essa ideia pra um futuro) mas pela diferença de preço e por não saber como iria me adaptar, optei por usar um da LG sem ser curvo. No fim, acabei optando por um de 34", modelo LG <Link href="https://www.lg.com/br/monitores/lg-34WK650-W">34WK650-W</Link>. Ele não é 4k, não tem uma taxa absurda de atualização então está longe de ser um monitor gamer mas, para o que eu preciso, estava ótimo. Como não jogo no computador, me preocupei mais com o fato de ser um UltraWide de uma marca que me passasse confiança, com estética e visual que me agradasse em geral.
        </p>

        <h4>Teclado</h4>
        <p>
          Pode me julgar mas eu nunca fui muito fã de teclado mecânico pra ser sincero... Não vejo graça na grande maioria dos <em>switches</em> e achava que era só moda pra fazer barulho e piscar enquanto você digita.
        </p>
        <p>
          Até que eu conheci o <em>switch</em> Kailh Box White e o teclado <Link href="https://www.annepro.net/products/anne-pro-2">Anne Pro 2</Link>. Foi o único <em>switch</em> que eu realmente senti interessante de digitar.
        </p>
        <p>
          Na época, <Link href="https://pt.aliexpress.com/item/32838679826.html?spm=a2g0s.9042311.0.0.30e9b90apNB2F9">comprei pelo AliExpress com essas configurações que comentei</Link>, estava compensando bastante.
        </p>
        <p>
          Ele permite que você configure as teclas assim você pode mudar e ajustar tudo pra forma como for melhor pra você. Ele é um modelo 60% então é bem menor do que os teclados mais "tradicionais".
        </p>
        <p>
          Além disso, eu fiz uma pequena mudança e coloquei <Link href="https://pt.aliexpress.com/item/32791605680.html?spm=a2g0s.9042311.0.0.30e9b90apNB2F9">teclas (<em>keycaps</em>) pretas lisas</Link> (sem nada escrito) nele, ficou bem legal!
        </p>

        <h4>Mouse</h4>
        <p>
          Uma coisa que eu não conseguiria viver sem, são os atalhos do <em>trackpad</em> do MacOS. Cheguei a usar alguns outros mouses mas sempre tinha sensação de que estava "faltando alguma coisa", sabe?
        </p>
        <p>
          Depois de dar chance pra outros produtos, me rendi e comprei o <Link href="https://www.apple.com/br/shop/product/MLA02BE/A/magic-mouse-2-prateado">Magic Mouse</Link> mesmo, não teve jeito.
        </p>
        <p>
          Enquanto escrevia, percebi que o modelo que eu uso (<Link href="https://produto.mercadolivre.com.br/MLB-1409171427-magic-mouse-2-space-gray-mac-macbook-sem-fio-original-_JM">cinza espacial</Link>) foi descontinuado! Uma pena, acho esses produtos no modelo cinza bem mais bonitos...
        </p>
        <p>
          Fora isso, comprei uma <Link href="https://produto.mercadolivre.com.br/MLB-833372525-capa-pelicula-protetora-skin-silicone-apple-magic-mouse-1-2-_JM">película protetora no Mercado Livre</Link> também na cor preta pra ajudar a preservar o mouse, como sou bem calorento e às vezes minhas mãos ficam suadas enquanto trabalho.
        </p>

        <h4>Webcam</h4>
        <del>
          <p>
            Sempre ouvi falar (e depois de um tempo virei fã) dos produtos da Logitech. Atualmente utilizo uma webcam HD (720p) dessa marca, modelo <Link href="https://www.logitech.com/pt-br/products/webcams/c270-hd-webcam.960-000694.html">C270i</Link>. Olhando pelo site da Logitech, visualmente ela é igual à <Link href="https://www.logitech.com/pt-br/products/webcams/c505-hd-webcam.960-001363.html">C505</Link> ao invés do modelo C270, não sei se aconteceu alguma atualização ou mudança no modelo mas elas são praticamente similares.
          </p>
          <p>
            Ela possui microfone e funciona super bem! Gosto bastante. Futuramente talvez troque para uma do modelo <Link href="https://www.logitech.com/pt-br/products/webcams/brio-4k-hdr-webcam.960-001105.html">Brio</Link> mas é algo que ainda preciso pensar, já que pro meu uso essa atual já é o suficiente.
          </p>
          <p>
            Fora isso, aquele <Link href="https://produto.mercadolivre.com.br/MLB-1525377355-protetor-tampa-camera-webcam-notebook-tablet-c-3-unid-_JM">protetor</Link> é sempre interessante de usar também (já me salvou de passar algumas vergonhas na internet por aí, rs).
          </p>
        </del>
        <p>
          Comprei a <Link href="https://getlumina.com/">Lumina</Link> quando eles estavam no <Link href="https://www.indiegogo.com/projects/lumina-4k-webcam-look-great-on-every-call-with-ai/">IndieGogo</Link> e chegou recentemente.
        </p>
        <p>
          Tem sido bem interessante até então. Você consegue controlar várias definições de imagem/cor padrões, além de ter uma abertura bem ampla do cenário que você está.
        </p>
        <p>
          Por ter uns superpoderes usando inteligência artifical, tem umas funcionalidades bem interessantes. Minha favorita até agora é a "cameraman", onde a imagem fica sempre focada e centralizada em você, mesmo que você se mexa na cadeira (ou até fique em pé, rs), como se realmente tivesse uma pessoa ali "por trás da câmera" fazendo o trabalho. Até comentaram em algumas chamadas que dá uma cara mais "profissional" pro vídeo.
        </p>
        <p>
          Ela tem um <em>design</em> bem elegante, bonito e simples. Aproveitei até pra começar a brincar com algumas fotografias de produto quandoe ela chegou (se quiser ver as fotos, <Link href="https://unsplash.com/collections/nZCIGPBf9E4/product">estão nessa coleção do Unsplash</Link>).
        </p>

        <h4>Headphone</h4>
        <p>
          Por utilizar óculos e alguns modelos de fone acabarem incomodando com alguma horas de uso, acabei optando por fones modelo <em>over-ear</em> pra uma experiência mais imersiva.
        </p>
        <del>
          <p>
            Embora eu ache a ideia daqueles headphones com cancelamento de ruído ativo MUITO interessantes (como o da Sony <Link href="https://www.sony.com/et/electronics/headband-headphones/wh-1000xm4">WH-1000XM4</Link>), há uns anos atrás eu comprei um da Edifier modelo <Link href="https://edifier.com.br/headphone-bluetooth-w830bt-edifier-preto.html">W830BT</Link> e tem uma coisa nele que é imbatível: sua bateria.
          </p>
          <p>
            Eu uso esse fone por um bom tempo, muitas vezes alguns meses, sem precisar carregar. De acordo com a especificação técnica diz que ele dura até 95h de música e, com certeza, pelo menos umas 80h ele aguenta sem problema algum.
          </p>
          <p>
            A qualidade de áudio também é maravilhosa e não deixa nada a desejar. Na época comprei usado pra testar (já que não sabia como seria) e paguei absurdamente barato. De lá até hoje só fiz uma troca das espumas e ele ficou melhor que novo!
          </p>
        </del>
        <p>
          Me dei por vencido e comprei o Sony <Link href="https://www.sony.com/et/electronics/headband-headphones/wh-1000xm4">WH-1000XM4</Link> e tenho gostado bastante!
        </p>
        <p>
          No começo é um pouco estranha a sensação de pressão no ouvido por causa do cancelamento de ruído mas acredito que seja costume.
        </p>
        <p>
          Fora isso, vamo ver se a bateria chega a pelo menos uma semaninha, já que o meu antigo fone passava fácil de um mês.
        </p>

        <h4>Microfone</h4>
        <p>
          Embora a webcam já tenha um microfone muito interessante, há um tempo atrás eu pensei em melhorar essa questão pra algumas gravações e também pra chamadas em geral. Como eu gosto de tocar, às vezes penso até em utilizar para algumas brincadeiras futuras.
        </p>
        <p>
          Durante um tempo dei uma força pro <Link href="https://willianjusten.com.br/">Willian Justen</Link> no seu último curso <Link href="https://reactavancado.com.br/">React Avançado</Link> com alguns componentes, conversa vai e conversa vem e ele estava com o microfone parado lá e eu estava cogitando comprar um. Só juntamos esses dois pontos!
          </p>
        <p>
          Acabei ficando com o <Link href="https://www.bluemic.com/en-us/products/yeti/">Blue Yeti (blackout)</Link> que estava parado lá com ele.
        </p>

        <h3>Ergonomia & Visual</h3>
        <h4>Cadeira</h4>
        <p>
          Eu tenho azar com cadeiras... As últimas duas que eu tive morreram em menos de 1 ano de uso!
        </p>
        <p>
          Embora tenha alguns modelos <em>gamers</em> interessantes, não acho que combina muito comigo, então optei por algo que seguisse a mesma linha de estilo dos meus outros dispositivos e da minha mesa mas que não abrisse mão de uma boa ergonomia.
        </p>
        <p>
          Comprei recentemente a cadeira <Link href="https://www.flexform.com.br/loja/office-chairs/cadeira-de-escritorio-flexform-tecton-coffee-unique">Tecton Unique</Link> (modelo coffee, esse  marrom) e foi uma ótima escolha! Tive alguns problemas (eu disse que tinha azar) mas depois de um tempo o contato com a assistência funcionou, resolveram e eu tô bem satisfeito com o produto!
        </p>
        <p>
          Essa cadeira tem as regulagens necessárias pra grande maioria das coisas: braço, cabeça, lombar e distância do assento até às costas.
        </p>

        <h4>Apoios</h4>
        <p>
          Pra apoio na região do mouse, eu uso o <Link href="https://deltahub.io/products/carpio-2">Carpio</Link> da DeltaHub. Meu modelo é a versão 1.0, a versão mais nova (atualmente a 2.0) parece mais interessante e tem a cor preta, não só cinza e branco.
        </p>
        <p>
          Na região do teclado, comprei um apoio de um rapaz que vendia no <Link href="https://produto.mercadolivre.com.br/MLB-1508958883-apoio-para-teclado-mecnico-em-madeira-_JM">Mercado Livre</Link> que já fazia no tamanho certo. Só comentei o modelo do meu teclado que ele já tinha as medidas.
        </p>
        <p>
          E, por último mas não menos importante, um apoio de pé. Também comprei um basico no <Link href="https://produto.mercadolivre.com.br/MLB-1069302929-apoio-ergonmico-para-pes-mdf-tabaco-ajustavel-souza-3703-_JM?quantity=1">Mercado Livre</Link> que resolveu super bem algumas dores que eu tinha no joelho ao fim do dia.
        </p>

        <h4>HelpDesk</h4>
        <p>
          Pra elevar um pouco o tamanho do monitor, esconder um pouco os (únicos dois) cabos da mesa e também organizar o celular e o headphone, comprei recentemente o <Link href="https://www.woodskull.com.br/produto/help-desk-suportes-monitor-celular-480">Help Desk da WoodSkull</Link> e gostei bastante. Combinou bem com a tonalidade da mesa e ajudou adeixar as coisas ainda mais organizadinhas.
        </p>

        <h4>Deskpad</h4>
        <p>
          Taí uma das coisas que, embora sejam moda, valem a pena adotar.
        </p>
        <p>
          Queria algum modelo de couro que não fosse tão frágil e muitas marcas, pelas fotos, fazem os deskpads muito finos e com uma cara de que não iam ter uma durabilidade tão boa.
        </p>
        <p>
          Sempre gostei muito de uma marca chamada Cutterman e foi lá que eu encontrei o que mais me agradou. O <Link href="https://www.cutterman.co/produto/desk-pad-coffee-569">deskpad de couro marrom</Link> é o que eu uso, é bem firme e resistente.
        </p>

        <h3>Organização</h3>
        <p>
          Afinal, quem vê front-end não vê back-end, né não? <Emoji aria-label="ferramentas" content="🤣" />
        </p>
        <Img fluid={images.cableUp.childImageSharp.fluid} />
        <Img fluid={images.cableDown.childImageSharp.fluid} />

        <h4>Dock</h4>
        <p>
          Pra ligar todos os periféricos e facilitar minha vida, selecionei uma <em>dock</em> que permitisse usar tudo de forma centralizada. Além disso, que pudesse carregar minha máquina, tudo isso centralizado em um único cabo.
        </p>
        <p>
          A dock da Dell modelo <Link href="https://www.dell.com/ae/business/p/dell-wd19tb-dock/pd">WD19TB</Link> era o melhor pra máquina que eu tenho, com as portas thunderbolts e com várias entradas pra tudo que eu precisava. Pelo que vi, acho que ela foi substituída por um modelo mais novo também.
        </p>
        <p>
          De longe, foi um dos inve$timentos mais pesados de todo o setup, mas compensa cada centavo. A praticidade de ter tudo conectado só na dock e, se precisar, só conectar ou desconectar um único cabo, é indescritível.
        </p>
        <p>
          Além disso, também peguei o <Link href="https://www.dell.com/pt-br/shop/kit-de-montagem-da-dell-dock-station/apd/575-bbiv?ref=frommyaccount">kit de montagem</Link> pra poder parafusar ela embaixo da mesa, mas isso já entra no próximo ponto que eu queria comentar...
        </p>

        <h4>Cabeamento</h4>
        <p>
          E já que estamos falando de organização, um tópico que ajuda a deixar o espaço mais arrumado é justamente a disposição dos cabos. Uma saída interessante pra deixar a mesa mais organizada <del>e esconder os fios</del> foi colocar tudo na parte de baixo. Todos os cabos, fontes, dock, computador, tudo!
        </p>
        <p>
          Pra chegar nesse resultado, eu comprei duas <Link href="https://produto.mercadolivre.com.br/MLB-1284746394-cesto-gaveta-aramado-prateleira-organizador-preto-_JM">cestinhas de arame</Link> que podem ser usadas em alguns armários e "entortei" a haste delas pra frente pra que ficassem retas. Depois disso, só comprei uns <Link href="https://www.leroymerlin.com.br/parafuso-gancho-aco-bicromatizado-1,9x21mm-5-pecas_86947196">parafusos de gancho</Link> e prendi elas embaixo da mesa.
        </p>
        <p>
          Pronto, problemas de cabeamento resolvidos! Tudo fica embaixo da mesa, em uma cesta ficam todos os cabos e fontes ligadas em um filtro de linha (que vai até a tomada) e, na outra, fica o computador fechado. A dock também fica parafusada embaixo da mesa
        </p>
        <p>
          Pra finalizar e evitar que eu precise ficar ligando qualquer coisa embaixo da mesa toda vez que preciso carregar (como mouse, teclado), eu deixo um <Link href="https://produto.mercadolivre.com.br/MLB-1527247015-hub-usb-20-de-4-portas-ctomada-480mbps-500gb-sm-_JM">Hub USB</Link> só na mesa. Fora isso, o único fio que fica visível é o do microfone. Os do monitor e da webcam ficam presos numa "presilha" que o próprio monitor tem pra organização de cabos de forma que não fique aparente. Eu aproveito essa presilha pra deixar os cabos dos carregadores de celular e tablet ali também. Assim quando preciso, eu só pego atrás do monitor, já que tudo fica ligado em uma das cestinhas (aquela do filtro de linha).
        </p>
        <p>
          Com isso, toda ideia de um setup mais limpo já foi atingida. Essas cestinhas foram o toque que deu toda a diferença por aqui.
        </p>

        {/* <h4>Rede</h4>
        TODO: */}
      </section>
      <hr />
      <section>
        <h2>Software</h2>

        <p>
          Muitas das ferramentas que eu uso você consegue dar uma olhada lá nos meus <Link href="https://github.com/gabrieluizramos/dotfiles">dotfiles</Link> (inclusive, <Link href="/configure-seus-dotfiles">já comentamos por aqui</Link> sobre os motivos pelos quais é interessante você criar os seus também)!
        </p>
        <p>
          Mesmo assim, nem tudo que está lá está relacionado com trabalho e setup, propriamente dito, então vale a pena ressaltar algumas coisas por aqui.
        </p>
        <Img fluid={images.software.childImageSharp.fluid} />

        <h3>Navegadores</h3>
        <p>
          Utilizo o <Link href="https://www.google.com/intl/pt-BR/chrome/">Chrome</Link>, padrãozão pra grande maioria das coisas. É simples, já estou acostumado e tem algumas facilidades (como enviar páginas para outros dispositivos) que ajuda muito no dia-a-dia sem precisar de alguma extensão.
        </p>
        <p>
          Eu sei, eu sei... Você vai falar "mas nossa, Chrome come memória RAM a toa do seu computador, deixa super lento e blábláblá" mas, convenhamos, 32Gb de RAM não é pra fazer miséria com um navegador né? As facilidades do Chrome, pra mim, se sobressaem pelas desvantagens.
        </p>
        <p>
          Fora isso, uso o <Link href="https://brave.com/">Brave</Link> de vez em quando, especialmente pros sites de notícia que insistem em colocar um paywall que impede que você consuma conteúdo. Funcionou melhor do que qualquer extensão de AdBlock que eu tentei.
        </p>

        <h3>Notas</h3>
        <p>
          Agora é aquela hora que eu falo: eu sempre fui adepto ao <Link href="https://www.notion.so/">Notion</Link> antes mesmo de ser modinha!
        </p>
        <p>
          Brincadeiras à parte, já faz um bom tempo que utilizo pra tudo (trabalho, coisas pessoais, projetos paralelos) gosto muito! O modelo de "tudo ser página" é bem interessante, compartilhamento é super simples e eles só melhoram o produto a cada dia que passa. Fico muito feliz de ver a galera adotando ele como ferramenta de notas e organização em geral.
        </p>

        <h3>Editor e tema</h3>
        <p>
          Aqui não tem muito o que inventar também. Já faz uns bons anos que uso <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>.
        </p>
        <p>
          Gosto muito do tema <Link href="https://www.nordtheme.com/">Nord</Link>, ele possui cores bem "emaecidas" e nada muito colorido ou cheio de contraste (além da linha visual "nórdica", rs). Uma curiosidade é que, até os trechos de código que você encontra por aqui no site, também seguem esse tema! Lembro que na época até abri um PR no plugin de temas pra adicionar esse visual.
        </p>
        <p>
          Pra requisições, usei o Insomnia durante um tempo mas voltei pro bom e velho <Link href="https://www.postman.com/">Postman</Link>. As facilidades de deixar os workspaces salvos em nuvem e sincronizados sem precisar pagar são muito boas, embora a interface e a usabilidade do Insomnia em geral seja bem melhor.
        </p>

        <h3>Terminal</h3>
        <p>
          Também bem comum em usuários de MacOS, uso <Link href="https://iterm2.com/">iTerm2</Link> com <Link href="https://ohmyz.sh/">oh-my-zsh</Link> no tema padrão "af-magic" que já vem pronto pra usar. Mais uma curiosidade é que, a <Link href="/">home do site</Link> é exatamente a visualização do meu terminal!
        </p>

        <h3>Senhas</h3>
        <p>
          Há alguns anos eu trabalhei em uma empresa que usava o LastPass como gerenciador de senhas e a ideia me pareceu muito interessante.
        </p>
        <p>
          Eu não gostava dele especificamente e era cheio de bug... A aplicação web te fazia logar novamente se você recarregasse a página e a interface era muito poluída. Os plugins não funcionavam muito bem e no fim, não era uma opção muito boa.
        </p>
        <p>
          Foi aí então que eu conheci e adotei o <Link href="https://1password.com/">1Password</Link>, um ótimo gerenciador de senhas, com várias funcionalidades interessantes e os aplicativos em todas as plataformas funcionam que é uma maravilha!
        </p>
        <p>
          Desde então, brinco que eu espalho a "palavra do 1Password" pras pessoas. Já consegui convencer algumas à utilizarem e ninguém mais quer deixar de lado depois que conhece.
        </p>

        <h3>Janelas</h3>
        <p>
          Trabalhar com monitor UltraWide é ótimo, mas fica ainda melhor quando você consegue dividir as janelas de forma mais intuitiva. Seja pra colocar algo exatamente no meio, ou deixar alguma aba aberta nos 33% de tela que você tem nesse tipo de monitor.
        </p>
        <p>
          Ouvi falar muito bem de um app para gerenciamento de janelas chamado Spectacle, mas por algum motivo que não me lembro ao certo, optei pelo <Link href="https://rectangleapp.com/">Rectangle</Link> e não vivo mais sem.
        </p>
        <p>
          Como eu costumo deixar terminal nesse 1/3 de tela "que sobra" do monitor UltraWide, eu deixo o editor no restante do espaço. A mesma coisa pro DevTools do navegador, ficando nesse espaço "reservado" e permitindo que eu trabalhe com ele e ainda mantendo um tamanho "padrão" de monitor.
        </p>
        <p>
          Atualmente comecei a usar o <Link href="https://hazeover.com/">HazeOver</Link> também para diminuir o brilho dos apps que ficam em segundo plano quando alguma janela se sobressai e também o <Link href="https://raycast.com/">RayCast</Link> que é uma alternativa bem interessante ao spotlight padrão do MacOS, com várias funcionalidades e atalhos de outros apps e do próprio sistema operacional.
        </p>

        <h3>Wallpapers</h3>
        <p>
          Provaelmente você sabe que eu adoro fotografia e é um dos <em>hobbies</em> que eu tenho com carinho. Gosto bastante do <Link href="https://unsplash.com/@gabrieluizramos">Unsplash</Link> e nada mais justo do que usar o <Link href="https://apps.apple.com/us/app/unsplash-wallpapers/id1284863847?mt=12">app oficial de wallpaper</Link> deles né?
        </p>
        <p>
          Com ele, eu deixo configurado pra mudar o wallpaper uma vez por dia em algumas categorias já pré-definidas, mas existem várias configurações que você pode usar.
        </p>

        <h3>Fotografia</h3>
        <p>
          Já que estamos falando de fotografia, outro app que eu não vivo sem é o <Link href="https://www.adobe.com/br/products/photoshop-lightroom.html">Lightroom</Link> para fazer edições das minhas fotos.
        </p>
        <p>
          Sempre usei a versão CC (baseada em nuvem) e não cheguei a usar a versão clássica. Hoje em dia elas estão bem similares e não sei se a versão clássica tem alguma funcionalidade absurdamente melhor que a CC.
        </p>
        <p>
          De qualquer forma, pra forma que eu gosto de trabalhar, a CC sempre foi ideal. Dessa forma eu também deixo as minhas salvas na nuvem da própria Adobe e sempre posso olhar o histórico das edições quando quiser.
        </p>

        <h3>Vídeo-chamada</h3>
        <p>
          Praticamente todo mundo precisa ficar em vídeo-chamada hoje em dia é comum ter alguns barulhos no seu ambiente Isso é ainda pior se a pessoa que mora do seu lado tiver fazendo uma reforma ou caso você more perto de algum lugar barulhento com oficina e aeroporto (eu vi, eu tava lá, parecia que o avião ia entrar dentro de casa).
        </p>
        <p>
          Comecei a testar o <Link href="https://krisp.ai/">Krisp</Link> e tenho gostado muito! É um software pra cancelamento de ruído que atua tanto no seu microfone removendo os ruídos na sua fala como no seu fone de ouvido, removendo os ruídos que você ouve. Particularmente, só tenho usado no microfone pra não arriscar perder qualidade de áudio nas chamadas.
        </p>
      </section>
    </section>
  </>
);

export default Setup;
