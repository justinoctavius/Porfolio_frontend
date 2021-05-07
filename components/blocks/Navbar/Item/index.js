import ItemPage from './Page';

const Item = ({ item }) => {
  return (
    <ItemPage
      icon={item.icon}
      name={item.name}
      url={item.url}
      onClick={item?.onClick}
    />
  );
};

export default Item;
