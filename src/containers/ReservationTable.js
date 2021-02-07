import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReservationTabs from '../components/ReservationTableUi/ReservationTabs';
import ReservationPersonCount from '../components/ReservationTableUi/ReservationPersonCount';
import ReservationDatePicker from '../components/ReservationTableUi/ReservationDatePicker';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1091px',
    boxShadow: '0px 2px 3px 2px rgba(152, 152, 152, 0.25)',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '25px 32px',
    margin: '20px auto',
  },
}));

const ReservationTable = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openPicker, setOpenPicker] = useState(false);
  const [personCount, setPersonCount] = useState(1);
  const [savedPersonCount, setSavedPersonCount] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [chosenDate, setChosenDate] = useState('');

  const handleChange = () => {
    setOpen(!open);
    setOpenPicker(false);
  };

  const handlePickerChange = () => {
    setOpenPicker(!openPicker);
    setOpen(false);
    if(chosenDate === 'Invalid date') return;
  };

  const onPersonIncrease = () => {
    setPersonCount(personCount + 1);
  };

  const onPersonDecrease = () => {
    if(personCount === 1) return;
    setPersonCount(personCount - 1);
  };

  const savePersonCountHandler = () => {
    setSavedPersonCount(personCount);
    setOpen(false);
  };

  const handleDatePickerChange = () => {
    setChosenDate(moment(startDate).format("MMM Do h:mm"));
    setOpenPicker(false);
  };

  return (
      <Grid className={classes.root} container xs={12}>
        <ReservationTabs />
        <ReservationDatePicker
          openPicker={openPicker}
          chosenDate={chosenDate}
          startDate={startDate}
          setOpenPicker={setOpenPicker}
          handlePickerChange={handlePickerChange}
          handleDatePickerChange={handleDatePickerChange}
          setStartDate={setStartDate}
        />
        <ReservationPersonCount 
          open={open} 
          personCount={personCount}
          savedPersonCount={savedPersonCount}
          handleChange={handleChange}
          setPersonCount={setPersonCount}
          onPersonIncrease={onPersonIncrease}
          onPersonDecrease={onPersonDecrease}
          savePersonCountHandler={savePersonCountHandler}
        />
      </Grid>
  );
};

export default ReservationTable;
