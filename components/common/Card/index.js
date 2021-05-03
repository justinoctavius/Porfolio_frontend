import CardPage from './page';

const Card = ({ date, description, image, title }) => {
  return (
    <CardPage
      date={date}
      description={description}
      image={image}
      title={title}
    />
  );
};

export default Card;
