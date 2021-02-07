import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Icons from '../Icons/Icons';
import { 
  PersonBlackIcon,
  MinusIcon,
  PlusIcon,
} from '../Icons/svg_icons';

import '../../styles/BtnStyle.css';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '405px',
    background: '#FFFFFF',
    boxShadow: '-2px 4px 8px rgba(70, 70, 70, 0.25)',
    borderRadius: '4px',
    position: 'absolute',
    top: '70px',
    right: 0,
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
}));

const ReservationPersonCardCount = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.cardHead}>
        <Typography component="h3" className={classes.cardWrapIcon}>
          <Icons IconType={PersonBlackIcon} className={classes.cardIcon} />
          Group Size
        </Typography>
        <div className={classes.cardHeadBtns}>
          <IconButton onClick={props.onPersonDecrease} aria-label="minus" className={classes.iconButton}>
            <Icons IconType={MinusIcon} className={classes.minusPlusIcon} />
          </IconButton>
          <Typography variant="subtitle1" className={classes.cardText}>
            {`${props.personCount} Person`}
          </Typography>
          <IconButton onClick={props.onPersonIncrease} aria-label="minus" className={classes.iconButton}>
            <Icons IconType={PlusIcon} className={classes.minusPlusIcon} />
          </IconButton>
        </div>
      </div>
      <div className={classes.cardBody}>
        <Link
          component="button"
          variant="body2"
          className="BtnStyles"
          onClick={() => {
            props.setPersonCount(1);
          }}
          disabled={props.personCount === 1 ? true : false}
        >
          Clear all
        </Link>
        <Button onClick={props.savePersonCountHandler} variant="contained" className={classes.doneBtn}>
          Done
        </Button>
      </div>
    </div>
  );
};

export default ReservationPersonCardCount;
