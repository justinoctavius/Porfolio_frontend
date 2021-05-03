import CollectionPage from './page';

const Collection = (props) => {
  return <CollectionPage {...props}>{props.children}</CollectionPage>;
};

export default Collection;
