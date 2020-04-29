import React from 'react';

import { Form } from '@gabrieluizramos/preferences/components';
import schema from './schema';

import * as S from './styles';

const Newsletter = () => {
  const onSubmit = (values) => {
    console.log('onsubmit', values);
  };

  return (
    <>
      <hr />
      <S.Newsletter>
        <S.Title>
          Se inscreve na Newsletter!
        </S.Title>
        <S.Text>
          Assim você recebe por email as novidades :)
        </S.Text>
        <S.Form>
          <Form schema={schema} onSubmit={onSubmit} />
        </S.Form>
      </S.Newsletter>
    </>
  );
};

export default Newsletter;
