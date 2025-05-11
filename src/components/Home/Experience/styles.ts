import { BREAKPOINTS } from "@/styles/theme";
import styled from "@emotion/styled";

export const S = {
  Section: styled.section<{ $isVisible: boolean }>`
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "20px")});
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    margin-bottom: 4rem;
    min-height: 300vh;
    overflow: visible;
    position: relative;

    @media (max-width: ${BREAKPOINTS.mobile}) {
      min-height: auto;
    }
  `,

  ExperienceGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
    position: relative;

    @media (max-width: ${BREAKPOINTS.mobile}) {
      grid-template-columns: 1fr;
    }
  `,

  ExperienceCard: styled.div`
    position: sticky;
    top: 1px;
    height: fit-content;
    border-radius: 0 0 15px 15px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

    &:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
      position: relative;
      border-radius: 15px;
    }
  `,

  CardContainer: styled.div<{ $index: number }>`
    height: ${({ $index }) => 370 - $index * 100}vh;
    margin-top: ${({ $index }) => $index * 100}vh;
    position: relative;

    &::after {
      display: block;
      height: 25vh;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    @media (max-width: ${BREAKPOINTS.mobile}) {
      height: auto;
      margin-top: 2rem;

      &:first-of-type {
        margin-top: 0;
      }
    }
  `,

  CardTitle: styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
    text-transform: uppercase;
    color: var(--color-text);
    position: relative;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);

    &::after {
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 2rem;
      height: 3px;
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    }
  `,

  ItemContainer: styled.div`
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  `,

  ItemHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  `,

  ItemName: styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-text);
  `,

  ItemPeriod: styled.span`
    font-size: 0.9rem;
    color: #888;
  `,

  ItemRole: styled.p`
    font-size: 1rem;
    color: var(--color-text);
    opacity: 0.8;
    margin-bottom: 0.5rem;
  `,

  DetailsList: styled.ul`
    list-style-type: disc;
    margin-left: 1.2rem;
    margin-top: 0.5rem;

    li {
      font-size: 0.9rem;
      color: var(--color-text);
      opacity: 0.7;
      margin-bottom: 0.3rem;
    }
  `,

  ItemStatus: styled.span`
    display: inline-block;
    padding: 0.2rem 0.5rem;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    border-radius: 4px;
    font-size: 0.8rem;
    color: white;
    margin-top: 0.5rem;
  `,
};
