import React, { Component } from 'react';
import {
  StyledImageGallery,
  StyledImageGalleryItem,
  StyledItemImage,
  OverlayStyled,
  ModalStyled,
} from './ImageGalleryStyled';

class ImageGallery extends Component {
  state = {
    selectedImage: null,
  };

  images = this.props.images;

  openModal = image => {
    this.setState({
      selectedImage: image,
    });
  };

  closeModal = () => {
    this.setState({
      selectedImage: null,
    });
  };

  handleKeyDown = event => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  render() {
    const { selectedImage } = this.state;

    return (
      <div>
        <StyledImageGallery>
          {this.images.map(image => {
            const { id, webformatURL, tags } = image;
            return (
              <StyledImageGalleryItem
                key={id}
                onClick={() => this.openModal(image)}
              >
                <StyledItemImage src={webformatURL} alt={tags} />
              </StyledImageGalleryItem>
            );
          })}
        </StyledImageGallery>

        {selectedImage && (
          <OverlayStyled
            onClick={this.closeModal}
            onKeyDown={this.handleKeyDown}
            tabIndex={0}
          >
            <ModalStyled>
              <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
            </ModalStyled>
          </OverlayStyled>
        )}
      </div>
    );
  }
}

export default ImageGallery;
