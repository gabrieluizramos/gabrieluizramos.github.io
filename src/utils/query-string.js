import { parse } from 'query-string';

export const showDrafts = props => parse(props.location.search).draft === 'true';
