import Card from '../Card';
import Collection from '../Collection/page';

const StudyCollection = ({ studies }) => {
  return (
    <Collection>
      {studies?.length > 0 &&
        studies.map((study) => (
          <Card
            date={study.date}
            title={study.name}
            description={study.description}
            image={study?.certificate?.image.url}
            key={study.study_id}
          />
        ))}
    </Collection>
  );
};

export default StudyCollection;
