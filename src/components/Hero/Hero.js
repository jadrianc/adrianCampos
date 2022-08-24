import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
      Frontend developer. +2 years of experience creating adaptive solutions for non-technical teams, with Liferay, JavaScript, and React, in enterprise and government environments
      </SectionText>
      <Button>Download my resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;