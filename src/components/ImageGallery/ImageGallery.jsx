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

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  openModal = image => {
    this.setState({
      selectedImage: image,
    });
    document.body.classList.add('modal-open');
  };

  closeModal = () => {
    this.setState({
      selectedImage: null,
    });
    document.body.classList.remove('modal-open');
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
            <ModalStyled id="modal">
              <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
            </ModalStyled>
          </OverlayStyled>
        )}
      </div>
    );
  }
}

export default ImageGallery;
