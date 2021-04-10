import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { BorderTop } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

FiltersByPrice.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    BorderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  range: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',

    '& > span': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));

function FiltersByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const classes = useStyles();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(values);

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Chọn khoảng giá</Typography>

      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
        <span>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
      </Box>

      <Button variant="outlined" color="primary" size="small" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FiltersByPrice;
