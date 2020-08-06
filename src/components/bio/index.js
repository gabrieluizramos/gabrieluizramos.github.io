import React from 'react';

import Emoji from '@components/emoji';

import * as S from './styles';

const Bio = ({ avatar }) => {
  return (
    <S.Bio>
      <header>
        <h1>Oi <Emoji aria-label="smile" content="😀" /></h1>
      </header>
      <section>
        <p>
          Meu nome é Gabriel Ramos e eu sou desenvolvedor de software ou, como costumo brincar, <b>pintor de pixel</b>.
        </p>
        <p>
          Nasci e cresci no litoral de São Paulo e hoje em dia moro na própria capital.
        </p>
        <p>
          Meu primeiro contato com tecnologia foi em meados de 2011 e, desde então, cada dia que passa tenho o prazer de aprender (e tento compartilhar) alguma coisa nova.
        </p>
        <p>
          No aspecto profissional, iniciei minha carreira em 2014 e já tive a oportunidade de trabalhar com empresas de diversos tamanhos e segmentos: de e-commerces e companhias mais consolidadas (como Walmart e Mercado Livre) à startups unicórnios com produtos emergentes (como Loggi e, mais recentemente, Loft).
        </p>
        <p>
          Na área acadêmica, cursei o ensino técnico em informática junto ao ensino médio no IFSP (Instituto Federal de São Paulo) e me graduei como tecnólogo em Análise e Desenvolvimento de Sistemas pela FIAP (Faculdade de Informática e Administração Paulista). Nesse meio tempo tive a oportunidade de conhecer algumas outras instituições também.
        </p>
        <p>
          Apesar disso, trabalhei por anos sem uma graduação específica e, embora acredite que bases acadêmicas conseguem suprir algumas deficiências de conhecimentos computacionais (principalmente teóricos), defendo fortemente que as diversas formas de aprendizagem devem ser encorajadas. Acredito que não é uma faculdade que define a qualidade do trabalho de uma pessoa desenvolvedora.
        </p>
        <p>
          É com isso em mente que também faço parte de empresas relacionadas à formação e instrução na área da tecnologia, atuando como instrutor na Caelum e mentor na Laboratória. Também já tive a oportunidade de participar de alguns outros eventos e projetos no ramo.
        </p>
        <p>
          Fora isso, gosto muito de fotografia e música e, nas horas vagas, quando não estou vendo algum conteúdo relacionado à esses hobbies, provavelmente estou jogando video-game ou assistindo alguma série e brincando com meus gatos.
        </p>
        <p>
          No menu principal você consegue acessar todas as minhas redes sociais e conferir mais detalhadamente algumas outras informações sobre mim, profissionais e até sobre meus hobbies e minhas fotos que posto por aí.
        </p>
        <p>
          Ah! E antes que eu me esqueça... Caso ainda não nos conheçamos pessoalmente, esse da foto aí embaixo sou eu <Emoji aria-label="arrow" content="⤵" />
        </p>
      </section>
      <S.Avatar>
        <img src={avatar} loading="lazy" alt="Eu" />
      </S.Avatar>
    </S.Bio>
  );
};

export default Bio;
