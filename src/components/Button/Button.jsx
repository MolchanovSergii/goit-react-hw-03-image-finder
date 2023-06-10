import { LoadMoreBtn } from './ButtonStyled';

const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
};

export default LoadMoreButton;
