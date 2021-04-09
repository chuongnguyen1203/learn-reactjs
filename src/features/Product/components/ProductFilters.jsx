import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterByCategory from './Filters/FilterByCategory';
import FiltersByPrice from './Filters/FiltersByPrice';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      'category.id': newCategoryId,
    };
    onChange(newFilters);
  };

  const handlePriceChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FiltersByPrice onChange={handlePriceChange} />
    </Box>
  );
}

export default ProductFilters;
