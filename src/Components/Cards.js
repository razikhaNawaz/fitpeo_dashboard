import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import classes from "./Cards.module.css";

const Cards = () => {
  return (
    <div>
      <div className={classes.maincards}>
        <div className={classes.card}>
          <BsFillArchiveFill className={classes.cardicon1} />
          <div className={classes.cardInner}>
            <p>Earning</p>
            <h4>$198k</h4>
            <p>38.7% this month</p>
          </div>
        </div>
        <div className={classes.card}>
          <BsFillGrid3X3GapFill className={classes.cardicon2} />
          <div className={classes.cardInner}>
            <p>Orders</p>
            <h4>$2.4k</h4>
            <p>2% this month</p>
          </div>
        </div>
        <div className={classes.card}>
          <BsPeopleFill className={classes.cardicon3} />
          <div className={classes.cardInner}>
            <p>Balance</p>
            <h4>$2.4k</h4>
            <p>2% this month</p>
          </div>
        </div>
        <div className={classes.card}>
          <BsFillBellFill className={classes.cardicon4} />
          <div className={classes.cardInner}>
            <p>Total Sales</p>
            <h4>$89k</h4>
            <p>11% this month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
