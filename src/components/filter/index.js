import React, { useState } from 'react';

import Input from '@components/form/input';

import * as S from './styles';

const filterByTerm = ({ path, title, subtitle, tags }, filter) =>
  path.toUpperCase().includes(filter) ||
  title.toUpperCase().includes(filter) ||
  subtitle.toUpperCase().includes(filter) ||
  tags.some(tag => tag.toUpperCase().includes(filter));

export const useFilter = ({ data, filter: initialFilter }) => {
  const [filter, setFilter] = useState(initialFilter);
  const onSetFilter = f => setFilter(f.toUpperCase());

  const filtered = data.filter(({ node }) => filterByTerm(node.frontmatter, filter));

  return [filtered, onSetFilter];
};

const Filter = ({ onFilter }) => (
  <S.Form onSubmit={e => e.preventDefault()}>
    <S.Command>ls | grep</S.Command>
    <Input type="text" placeholder="pesquisar por..." onChange={onFilter} />
  </S.Form>
);

export default Filter;
