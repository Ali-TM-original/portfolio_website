import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '20+', text: 'Contributions Open Source'},
  { number: '50+', text: 'Successful Git repos', },
  { number: '150+', text: 'Successful Projects', },
  { number: '', text: 'Recognized as Professional Dev by Local Library', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Goals Achieved</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
