import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styled from 'styled-components';

import 'react-accessible-accordion/dist/fancy-example.css';

const AccordionHeader = styled(AccordionItemHeading)`
  font-size: 1.2vw;
  font-family: EconomicBold;
`;

const AccordionContent = styled(AccordionItemPanel)`
  padding: 2em;
  font-size: 1vw;
`;

const BasicAccordion = ({ tech }) => (
  <Accordion allowZeroExpanded>
    {tech.skills.map((skill) => (
      <AccordionItem>
        <AccordionHeader>
          <AccordionItemButton>{skill.name}</AccordionItemButton>
        </AccordionHeader>
        <AccordionContent>
          <div dangerouslySetInnerHTML={{ __html: skill.summary }} />
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default BasicAccordion;
