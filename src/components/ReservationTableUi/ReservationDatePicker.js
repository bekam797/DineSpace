import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icons from '../Icons/Icons';
import ReservationDatePickerInput from './ReservationDatePickerInput';

// icons
import { 
  DateIcon,
  NavigationDownIcon, 
  NavigationUpIcon,
} from '../Icons/svg_icons';

const useStyles = makeStyles((props) => ({
  root: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    maxWidth: '219px',
    background: ((props) => props.openPicker ? '#ACB4D8' :'#E4E7F3'),
    color: '#000',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '3px',
    padding: '11px 15px',
    '&:hover': {
      background: ((props) => props.openPicker ? '#ACB4D8' :'#E4E7F3'),
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

const ReservationDatePicker = (props) => {
  const classes = useStyles(props);

  return (
    <Grid className={classes.root} item xs={3} >
      <Button
        variant="contained"
        className={classes.button}
        onClick={props.handlePickerChange}
        startIcon={<Icons className={classes.iconStyle} IconType={DateIcon} />}
        endIcon={<Icons IconType={props.openPicker ? NavigationUpIcon : NavigationDownIcon} />}
      >
        <Typography component="span" className={classes.text}>
          {props.chosenDate.length > 0 && props.chosenDate !== 'Invalid date' ? props.chosenDate : props.chosenDate === 'Invalid date' ? 'Date & Time' : 'Date & Time'}
        </Typography>
      </Button>
      {props.openPicker && <ReservationDatePickerInput startDate={props.startDate} setStartDate={props.setStartDate} handleChange={props.handleDatePickerChange} />}
    </Grid>
  );
};

export default ReservationDatePicker;