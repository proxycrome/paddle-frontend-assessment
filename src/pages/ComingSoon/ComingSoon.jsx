import React from 'react';
import Navbar from '../../components/Navbar';
import classes from './ComingSoon.module.css';
import styled from 'styled-components';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = styled.div`
  height: 300px;
  position: relative
`;

const Semi = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -10%);
  height: 300px;
  width: 800px;
  border-radius: 650px 650px 0 0;
  background-color: #FFFFFF20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ComingSoon = () => {
  return (
    <div className={classes.root}>
      <Navbar/>
      <div className={classes.main}>
        <div className={classes.section}>
          <h1 className={classes.h1}>SOMETHING AWESOME IS COMING SOON</h1>
          <p className={classes.text}>Your all-in-one affiliate marketing tracking software <b>track</b>, <b>automate</b> and <b>optimize</b> your campaigns.</p>
          <div className={classes.countdown}>
            <div className={classes.card}>
              <h2>7</h2>
              <small>Days</small>
            </div>
            <div className={classes.card}>
              <h2>24</h2>
              <small>Hours</small>
            </div>
            <div className={classes.card}>
              <h2>54</h2>
              <small>Minutes</small>
            </div>
            <div className={classes.card}>
              <h2>11</h2>
              <small>Seconds</small>
            </div>
          </div>
          <form className={classes.form}>
            <div className={classes.formGroup}>
              <input type="text" placeholder="First Name..." className={classes.formTextControl}/>
              <input type="text" placeholder="Last Name..." className={classes.formTextControl}/>
            </div>
            <div className={classes.submit}>
              <input type="email" placeholder="Enter your email address..." className={classes.formEmailControl}/>
              <button className={classes.button}>JOIN OUR WAITING LIST</button>
            </div>
          </form>
        </div>
      </div>
      <Footer>
        <Semi>
          <div style={{ width: '300px', display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <YouTubeIcon style={{ fontSize: '36px' }} />
            <FacebookIcon style={{ fontSize: '36px', color: '#FFFFFF60' }}/>
            <LinkedInIcon style={{ fontSize: '36px', color: '#FFFFFF60' }}/>
            <InstagramIcon style={{ fontSize: '36px', color: '#FFFFFF60' }}/>
            <TwitterIcon style={{ fontSize: '36px', color: '#FFFFFF60' }}/>
          </div>
          <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '36px', color: '#FFFFFF60'}}>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
          <div style={{ color: '#FFFFFF60'}}>
            <span>Copyright 2021 @ Peddle Technologies. All Right Reserved</span>
          </div>
        </Semi>
      </Footer>
    </div>
  );
};

export default ComingSoon;