import React from 'react';
import DatePicker from 'react-datepicker';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Icons from '../Icons/Icons';
import { 
  DateIcon,
  TimeIcon
} from '../Icons/svg_icons';

import "react-datepicker/dist/react-datepicker.css";
import '../../styles/ReservationDatePickerInput.css';
import '../../styles/BtnStyle.css';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '600px',
    background: '#FFFFFF',
    boxShadow: '-2px 4px 8px rgba(70, 70, 70, 0.25)',
    borderRadius: '4px',
    position: 'absolute',
    top: '70px',
    right: '18px',
  },
  cardHead: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 25px',
    borderBottom: '1px solid #D6D6D6',
  },
  cardIcon: {
    marginRight: '10px'
  },
  cardWrapIcon: {
    fontSize: '20px',
  },
  cardHeadBtns: {
    display: 'flex',
    alignItems: 'center',
  },
  cardText: {
    margin: '0 7px'
  },
  cardBody: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 25px',
  },
  iconButton: {
    width: '34px',
    height: '34px',
    border: '1px solid #000000',
  },
  minusPlusIcon: {
    display: 'flex',
  },
  doneBtn: {
    width: '100%',
    maxWidth: '135px',
    background: '#FC6C44',
    borderRadius: '4px',
    color: '#fff',
    '&:hover': {
      background: '#FC6C44',
    }
  },
  calendarIcon: {
    position: 'absolute',
    zIndex: 1,
    top: '31px',
    left: '90px',
  },
  timeIcon: {
    position: 'absolute',
    zIndex: 1,
    top: '31px',
    right: '175px',
  }
}));

const ReservationDatePickerInput = (props) => {
  const classes= useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.cardHead}>
        <Icons className={classes.calendarIcon} IconType={DateIcon} />
        <DatePicker
          selected={props.startDate}
          onChange={date => props.setStartDate(date)}
          minDate={new Date()}
          useWeekdaysShort
          locale="en-GB"
          inline
        />
        <Icons className={classes.timeIcon} IconType={TimeIcon} />
        <DatePicker
          selected={props.startDate}
          onChange={date => props.setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Arrival Time"
          timeFormat="HH:mm"
          inline
        />
      </div>
      <div className={classes.cardBody}>
        <Link
          component="button"
          variant="body2"
          className="BtnStyles"
          onClick={() => {
            props.setStartDate('');
          }}
          disabled={props.startDate === '' ? true : false}
        >
          Clear all
        </Link>
        <Button onClick={props.handleChange} variant="contained" className={classes.doneBtn}>
          Done
        </Button>
      </div>
    </div>
  );
};

export default ReservationDatePickerInput;
