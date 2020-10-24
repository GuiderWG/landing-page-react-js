import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {
  ArrowForward, ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContents,
  HeroH1,
  HeroP,
  VideoBg
} from './HeroElements';
import {Button} from '../ButtonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContents>
        <HeroH1>Virtual World Made Easy</HeroH1>
        <HeroP>Sign up for a new account today and receive $250 in credit towards your next payment.</HeroP>
        <HeroBtnWrapper>
          <Button to={'signup'} onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>
            Get started {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContents>
    </HeroContainer>
  );
};

export default HeroSection;