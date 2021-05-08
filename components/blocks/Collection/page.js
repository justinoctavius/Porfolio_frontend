import CollectionStyled from './style';

const CollectionPage = ({ children, maxCols }) => {
  return <CollectionStyled maxCols={maxCols}>{children}</CollectionStyled>;
};

export default CollectionPage;
