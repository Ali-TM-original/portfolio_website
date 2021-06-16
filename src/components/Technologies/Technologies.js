import React, { useEffect, useRef  } from 'react';
import { DiFirebase, DiReact, DiBootstrap , DiPython, DiNodejsSmall, DiMongodb} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ChangingText } from './TechnologiesStyles';
import { init } from 'ityped'


export default function Technologies() {

  const typing_text = useRef();

  useEffect(() => {
      init(typing_text.current, { showCursor: false, strings: ['React.js!', 'Next.js!',
      'FastApi!',
      'MongoDB!',
      'and much more!'
    ] })
  },[]);

  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>I am a Full Stack Web Dev, I am Experienced in<ChangingText ref={typing_text}> Exp</ChangingText></SectionText>
      <List>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Frontend</ListTitle>
            <ListParagraph>
              Experience with <br/>
              NextJS

            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Frontend</ListTitle>
            <ListParagraph>
              Experience with <br/>
              React.js

            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiPython size="3rem" />
          <ListContainer>
            <ListTitle>Backend</ListTitle>
            <ListParagraph>
              Experience with <br/>
              FastApi <br />
              <span>Flask</span>
              <span>Quart</span>
              <span>Django</span>

            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiNodejsSmall size="3rem" />
          <ListContainer>
            <ListTitle>Backend</ListTitle>
            <ListParagraph>
              Experience with <br/>
              NodeJS and PostGres

            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiBootstrap size="3rem" />
          <ListContainer>
            <ListTitle>Styling Frameworks</ListTitle>
            <ListParagraph>
              
              Experience with <br/>
              <span>Material-UI</span><br/>
              <span>BootStrap</span><br/>
              <span>Tailwind CSS</span>

            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiMongodb size="3rem" />
          <ListContainer>
            <ListTitle>Database</ListTitle>
            <ListParagraph>
              
              Experience with <br/>
              <span>Sqllite3</span><br/>
              <span>MySQL</span><br/>
              <span>MongoDb</span>
              <span>PostGres</span>

            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  )
}


