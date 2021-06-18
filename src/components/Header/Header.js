import Link from 'next/link';
import React from 'react';
import { AiFillGithub} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { IoLogoDiscord} from "react-icons/io5";
import { VscCode } from "react-icons/vsc";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a href="/" style={{ display: "flex", alignItems: "cemnter", color: "white",
        marginBottom:"20px",
      }}>
          <DiCssdeck size="3rem" />
          <Span>Ali's Rave</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Ali-TM-original">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/Ali-TM-original/portfolio_website/tree/master">
        <VscCode  size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://discord.com/users/410452466631442443">
        <IoLogoDiscord size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
