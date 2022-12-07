// import PropTypes from 'prop-types';
import React from 'react';
import { PropTypes } from 'prop-types';

import { FilterLabel, FilterInput, FilterWrapper } from './Filter.syled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="search"
          value={value}
          onChange={onChange}
        ></FilterInput>
      </FilterLabel>
    </FilterWrapper>
  );
};

export default Filter;

Filter.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
