import CardPage from './page';

const Card = (props) => {
  const { date, description, image, title } = props;
  return (
    <CardPage
      date={date}
      description={description}
      image={image}
      title={title}
      {...props}
    />
  );
};

export default Card;
