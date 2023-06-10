import { Component } from 'react';

import fetchApi from '../../src/services/fetchApi';
import { StyledApp } from './AppStyled';
import { SearchBar } from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreButton from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  initialState = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    isEmpty: false,
  };

  state = { ...this.initialState };

  async componentDidUpdate(_, prevState) {
    const { query, page, images } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });

      try {
        const fetchImage = await fetchApi(query, page);

        this.setState({
          images: [...images, ...fetchImage.hits],
          isLoading: false,
        });
      } catch (error) {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = value => {
    this.setState({ query: value });
  };

  handleIncreasePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <StyledApp>
          <SearchBar onSubmit={this.handleSubmit} />
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <ImageGallery images={this.state.images} />
          )}

          <LoadMoreButton onClick={this.handleIncreasePage} />
        </StyledApp>
      </>
    );
  }
}
