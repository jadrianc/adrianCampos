import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've been working with the following technologies:
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <listParagraph>
            Experience with <br />
            Javascript, React, Redux, and React Router.
          </listParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>CMS</ListTitle>
          <listParagraph>
            Experience with <br />
            Liferay
          </listParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          <ListTitle>Ui / UX</ListTitle>
          <listParagraph>
            Experience with <br />
            Figma
          </listParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
