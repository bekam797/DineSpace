import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Icons from '../Icons/Icons';

// icons
import { 
  DineOutBlackIcon, 
  DineOutWhightIcon,
  ReservBlackIcon,
  ReservWhiteIcon, 
  TakeAwayBlackIcon,
  TakeAwayWhightIcon,
} from '../Icons/svg_icons';

const useStyles = makeStyles((theme) => ({
  root: {
    // borderBottom: '1px solid rgba(230, 233, 237, .6)',
  },
  indicator: {
    height: '3px',
    backgroundColor: '#5B6BC8',
    borderRadius: '3px',
    transition: 'all 0ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  selectedTab: {
    backgroundColor: '#5B6BC8',
    opacity: '0.69 !important',
    color: '#ffffff',
  },
  tabStyle: {
    padding: 15,
  },
  tabsStyle: {
    width: '93%',
    borderBottom: '3px solid rgba(230, 233, 237, .6)',
  },
  tabLableStyle: {
    display: 'flex'
  },
  iconStyle: {
    width: '24px',
    height: '24px',
    marginRight: 10,
  },
}));

const ReservationTabs = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root} item xs={6} >
      <Tabs 
        value={value}
        onChange={handleChange}
        classes={{ indicator: classes.indicator, flexContainer: classes.tabsStyle }}
        >
        <Tab 
          label={
            <div className={classes.tabLableStyle}>
              <Icons className={classes.iconStyle} IconType={value === 0 ? DineOutWhightIcon : DineOutBlackIcon} />
              Dine Out
            </div>
          }
          className={classes.tabStyle}
          classes={{ selected: classes.selectedTab }}
        />
        <Tab 
          label={
            <div className={classes.tabLableStyle}>
              <Icons className={classes.iconStyle} IconType={value === 1 ? ReservWhiteIcon : ReservBlackIcon} />
              Reservation
            </div>
          } 
          className={classes.tabStyle}
          classes={{ selected: classes.selectedTab }}
        />
        <Tab 
          label={
            <div className={classes.tabLableStyle}>
              <Icons className={classes.iconStyle} IconType={value === 2 ? TakeAwayWhightIcon : TakeAwayBlackIcon} />
              Pick Up
            </div>
          }
          className={classes.tabStyle}
          classes={{ selected: classes.selectedTab }}
        />
      </Tabs>
    </Grid>
  );
};

export default ReservationTabs;
