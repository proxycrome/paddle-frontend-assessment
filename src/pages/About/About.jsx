import React from 'react'
import Navbar from '../../components/Navbar';
import classes from './About.module.css';
import styled from 'styled-components';

const BackgroundRect = styled.div`
    width: 250px;
    height: 80%;
    background: linear-gradient(177deg, #FF00F7 0%, #1D0040 100%);
    position: absolute;
    top: 60px;
    right: 45%;
`; 

const BackgroundCircle = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(177deg, #213F72 0%, #1D0040 100%);
    position: absolute;
    top: 120px;
    right: 0;
`;

const BackgroundOverlay = styled.div`
    width: 60%;
    height: 100%;
    background: linear-gradient(180deg, #FFFFFF20 , #19073B );
    fill-opacity: 0%;
    position: absolute;
    z-index: 100;
    backdrop-filter: blur(16px);
`;

const Text = styled.div`
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 150;
`;

const Join = styled.div`
    position: absolute;
    top: 150px;
    right: 50%;
`;

const Dash = styled.div`
    border-bottom: 2px solid #FFFFFF;
    width: 50px;
    display: inline-block;
    margin-right: 20px;
`;

const Head = styled.span`
    font-weight: 300;
`;

const Topic = styled.p`
    width: 400px;
    position: absolute;
    top: 200px;
    right: 25%;
    line-height: 1.3;
    font-size: 40px;
`;

const Caption = styled.p`
    font-weight: 300;
    width: 400px;
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 5%;
`;

const About = () => {

  const linkColor = "#FF00F7"

  return (
    <div className={classes.root}>
        <Navbar color={linkColor}/>
        <div className={classes.section1}>
            <BackgroundRect />
            <BackgroundCircle />
            <BackgroundOverlay />
            <Text>
                <Join>
                    <Dash />
                    <Head>ABOUT US</Head>
                </Join>
                <Topic>Built for SaaS and E-commerce</Topic>
                <Caption>Our tools are easy to set up and use with a user friendly dashboard that enables you set up, launch, automate and manage multi-affiliate campaigns in 5 minutes. </Caption>   
            </Text>            
        </div>
    </div>
  )
}

export default About