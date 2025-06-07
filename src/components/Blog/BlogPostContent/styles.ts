"use client";

import { BREAKPOINTS } from "@/styles/theme";
import styled from "@emotion/styled";

export const S = {
  ContentWrapper: styled.article`
    line-height: 1.8;
    font-size: 1.1rem;
    color: var(--color-text);
    margin-bottom: 3rem;
  `,

  H1: styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    margin: 2rem 0 1rem 0;
    line-height: 1.3;
    color: var(--color-text);
    border-bottom: 2px solid var(--color-primary);
    padding-bottom: 0.5rem;

    @media (max-width: ${BREAKPOINTS.mobile}) {
      font-size: 2rem;
    }
  `,

  H2: styled.h2`
    font-size: 2rem;
    font-weight: 600;
    margin: 2.5rem 0 1rem 0;
    line-height: 1.4;
    color: var(--color-text);
    position: relative;

    &::before {
      content: "#";
      color: var(--color-primary);
      margin-right: 0.5rem;
      font-weight: 700;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
      font-size: 1.6rem;
    }
  `,

  H3: styled.h3`
    font-size: 1.6rem;
    font-weight: 600;
    margin: 2rem 0 1rem 0;
    line-height: 1.4;
    color: var(--color-text);

    &::before {
      content: "##";
      color: var(--color-primary);
      margin-right: 0.5rem;
      font-weight: 700;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
      font-size: 1.4rem;
    }
  `,

  Paragraph: styled.p`
    margin: 1.5rem 0;
    line-height: 1.8;
    color: var(--color-text);
    white-space: pre-wrap;
  `,

  InlineCode: styled.code`
    background: rgba(102, 126, 234, 0.1);
    color: var(--color-primary);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: "Fira Code", "Monaco", "Consolas", monospace;
  `,

  CodeBlock: styled.pre`
    background: var(--color-card-background);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 1.5rem;
    margin: 2rem 0;
    overflow-x: auto;
    font-family: "Fira Code", "Monaco", "Consolas", monospace;
    font-size: 0.9rem;
    line-height: 1.6;

    code {
      background: none;
      color: var(--color-text);
      padding: 0;
      border-radius: 0;
    }
  `,

  Blockquote: styled.blockquote`
    border-left: 4px solid var(--color-primary);
    background: rgba(102, 126, 234, 0.05);
    margin: 2rem 0;
    padding: 1rem 1.5rem;
    border-radius: 0 8px 8px 0;
    font-style: italic;

    p {
      margin: 0.5rem 0;
    }
  `,

  UL: styled.ul`
    margin: 1.5rem 0;
    padding-left: 2rem;

    li {
      margin: 0.5rem 0;
    }
  `,

  OL: styled.ol`
    margin: 1.5rem 0;
    padding-left: 2rem;

    li {
      margin: 0.5rem 0;
    }
  `,

  LI: styled.li`
    line-height: 1.7;
    color: var(--color-text);
  `,

  Link: styled.a`
    color: var(--color-primary);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease;

    &:hover {
      border-bottom-color: var(--color-primary);
    }
  `,

  Image: styled.img`
    width: 70%;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    object-fit: contain;
    display: block;

    @media (max-width: ${BREAKPOINTS.mobile}) {
      width: 100%;
      margin: 1rem auto;
    }
  `,
};
