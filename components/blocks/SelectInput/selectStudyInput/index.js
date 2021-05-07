import { useEffect, useState } from 'react';
import { SelectInput } from '../../../common';
import { useCertificateApi, useStudyApi } from '../../../hooks';

const SelectStudyInput = ({
  setSelected,
  selected,
  excludeStudyWithCertificate,
  disabled,
}) => {
  const { readerState, api } = useStudyApi();
  const { writeState } = useCertificateApi();
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    api.getAll();
  }, [writeState.success]);

  useEffect(() => {
    if (excludeStudyWithCertificate) {
      getStudyWithoutCertificate();
    } else {
      setStudies(readerState.payload);
    }
  }, [readerState.success]);

  const getStudyWithoutCertificate = async () => {
    let studiesWC = [];
    if (Array.isArray(readerState.payload)) {
      studiesWC = await readerState?.payload?.filter(
        (study) => !study.certificate
      );
    }
    setStudies(studiesWC);
  };

  return (
    <SelectInput
      setSelected={setSelected}
      selected={selected}
      options={studies}
      element_id="study_id"
      label="Study"
      disabled={disabled}
    />
  );
};

export default SelectStudyInput;
