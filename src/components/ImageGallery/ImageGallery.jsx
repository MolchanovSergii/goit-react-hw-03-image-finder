import {
  StyledImageGallery,
  StyledImageGalleryItem,
  StyledItemImage,
} from './ImageGalleryStyled';

const ImageGallery = ({ images }) => {
  return (
    <StyledImageGallery>
      {images.map(image => {
        const { id, webformatURL, largeImageURL, tags } = image;
        return (
          <StyledImageGalleryItem key={id}>
            <StyledItemImage src={webformatURL} alt={tags} />
          </StyledImageGalleryItem>
        );
      })}
    </StyledImageGallery>
  );
};

export default ImageGallery;
