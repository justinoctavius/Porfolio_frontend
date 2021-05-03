import Item from '../Item';
const ItemCollectionPage = ({ items }) => {
  return items?.map((item, index) => <Item item={item} key={index} />);
};

export default ItemCollectionPage;
