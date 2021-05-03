import ToggleShowBtnPage from './page';

const ToggleShowBtn = (props) => {
  const { show, setShow } = props;
  return <ToggleShowBtnPage {...props} show={show} setShow={setShow} />;
};

export default ToggleShowBtn;
