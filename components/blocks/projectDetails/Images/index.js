import { useState } from 'react';
import ImagesPage from './page';

const Images = ({ images }) => {
  const [selected, setSelected] = useState(1);
  const setNext = () => {
    if (selected < images?.length) {
      setSelected(selected + 1);
    } else {
      setSelected(1);
    }
  };

  const setBefore = () => {
    if (selected > 1) {
      setSelected(selected - 1);
    } else {
      setSelected(images.length);
    }
  };

  return (
    <ImagesPage
      images={images}
      selected={selected}
      setNext={setNext}
      setBefore={setBefore}
    />
  );
};

export default Images;
