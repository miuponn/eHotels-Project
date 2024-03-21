import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8, 
  },
}));

export const CustomButton = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const classes = useStyles();

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return (
    <Button
      type={type}
      onClick={onClick}
      className={classes.root} 
    >
      {children}
    </Button>
  );
};
