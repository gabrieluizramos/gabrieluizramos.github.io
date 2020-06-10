import React, { useState } from 'react';

import { useKonamiCode } from 'hooks';

import * as S from './styles';

const withKonami = Component => props => {
  const [active, setActive] = useState(false);
  const toggleKonami = () => {
    setActive(true)
    setTimeout(() => setActive(false), S.KONAMI_DURATION);
  };
  useKonamiCode(toggleKonami);

  return (
    <>
      <Component {...props} konami={active} />
      {active && <S.Konami />}
    </>
  );
};

export default withKonami;
