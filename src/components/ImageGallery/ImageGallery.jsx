import {
  StyledImageGallery,
  StyledImageGalleryItem,
  StyledItemImage,
} from './ImageGalleryStyled';

const ImageGallery = ({ images }) => {
  return (
    <StyledImageGallery>
      {images.map(image => {
        const { id, webformatURL, tags } = image;
        // largeImageURL,
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
