import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Ali's Rave
      </SectionTitle>
      <SectionText>
        I am a 17 Year old self taught web dev and a Student
      </SectionText>
      <a href="#about" style={{textDecoration:"none", color:'white'}}><Button > Learn More</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;