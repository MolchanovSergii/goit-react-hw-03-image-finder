import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Formik } from 'formik';
import {
  StyledHeader,
  StyledSearchForm,
  StyledSearchBtn,
  StyledSearchInput,
} from './SearchBarStyled';

export class SearchBar extends Component {
  state = {};

  handleSubmit = (values, { resetForm }) => {
    console.log('data for form', values);
    resetForm();
  };

  render() {
    return (
      <StyledHeader>
        <Formik
          initialValues={{
            search: '',
          }}
          onSubmit={this.handleSubmit}
        >
          <StyledSearchForm>
            <StyledSearchBtn type="submit">
              <FaSearch />
            </StyledSearchBtn>

            <StyledSearchInput
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </StyledSearchForm>
        </Formik>
      </StyledHeader>
    );
  }
}

// export default SearchBar;
