import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icons from '../Icons/Icons';

import ReservationPersonCardCount from './ReservationPersonCardCount';

// icons 
import { 
  PersonIcon,
  NavigationDownIcon, 
  NavigationUpIcon,
} from '../Icons/svg_icons';

const useStyles = makeStyles((props) => ({
  root: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    width: '100%',
    maxWidth: '219px',
    background: ((props) => props.open ? '#ACB4D8' :'#E4E7F3'),
    color: '#000',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '3px',
    padding: '11px 15px',
    '&:hover': {
      background: ((props) => props.open ? '#ACB4D8' :'#E4E7F3'),
    }
  },
  iconStyle: {
    width: '16px',
    height: '16px',
    display: 'flex',
  },
  text: {
    width: '100%',
    fontSize: 14,
    textTransform: 'capitalize',
    fontWeight: 500,
    display: 'flex',
  },
}));

const ReservationPersonCount = (props) => {
  const {open, handleChange, personCount, setPersonCount, onPersonIncrease, onPersonDecrease, savedPersonCount, savePersonCountHandler} = props;
  const classes = useStyles(props);

  return (
    <Grid className={classes.root} item xs={3}>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleChange}
        startIcon={<Icons className={classes.iconStyle} IconType={PersonIcon} />}
        endIcon={<Icons IconType={open ? NavigationUpIcon : NavigationDownIcon} />}
      >
        <Typography component="span" className={classes.text}>
          {`${savedPersonCount} Person`}
        </Typography>
      </Button>
      {open && 
        <ReservationPersonCardCount 
          personCount={personCount} 
          setPersonCount={setPersonCount}
          savedPersonCount={savedPersonCount}
          savePersonCountHandler={savePersonCountHandler}
          onPersonIncrease={onPersonIncrease} 
          onPersonDecrease={onPersonDecrease} 
        />
      }
    </Grid>
  );
};

export default ReservationPersonCount;
