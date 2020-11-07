import React from 'react';
import Icon1 from '../../images/svg-6.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from './ServicesElements';

const Services = () => (
  <ServicesContainer id="services">
    <ServicesH1>Our services</ServicesH1>
    <ServicesWrapper>
      <ServicesCard>
        <ServicesIcon src={Icon1} />
        <ServicesH2>Reduce expenses</ServicesH2>
        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
      </ServicesCard>
      <ServicesCard>
        <ServicesIcon src={Icon2} />
        <ServicesH2>Virtual expenses</ServicesH2>
        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
      </ServicesCard>
      <ServicesCard>
        <ServicesIcon src={Icon3} />
        <ServicesH2>Access expenses</ServicesH2>
        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
      </ServicesCard>
    </ServicesWrapper>
  </ServicesContainer>
);

export default Services;
