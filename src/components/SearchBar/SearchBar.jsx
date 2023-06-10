import { Component } from 'react';
import {
  StyledHeader,
  StyledSearchForm,
  StyledSearchBtn,
  StyledSearchInput,
} from './SearchBarStyled';

export class SearchBar extends Component {
  state = {};
  render() {
    return (
      <StyledHeader>
        <StyledSearchForm>
          <StyledSearchBtn type="submit">
            {/* <span class="button-label">Search</span> */}
          </StyledSearchBtn>

          <StyledSearchInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </StyledSearchForm>
      </StyledHeader>
    );
  }
}

// export default SearchBar;
