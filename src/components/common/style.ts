import styled from "styled-components";

const CardContainer = styled.div`
  font-size: 0.75rem;
  margin: 0.5rem;

  .CardContainer__link {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border: solid #444 2px;
    border-radius: 0.5rem;
    padding: 0.25rem;
    margin-bottom: 0.25rem;
    min-width: 250px;
    height: 100%;
    text-decoration: none;
    &[visited] {
      color: inherited;
    }
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .CardContainer__article {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    height: 100%;
    padding: 0.5rem;
  }

  .CardContainer__image {
    background-color: #fff;
    border-radius: 0.7rem;
    height: 4rem;
    width: 4rem;
    display: inline-block;

    object-fit: contain;
  }

  .CardContainer__title {
    font-size: 1rem;
    font-weight: 700;
    flex-grow: 1;
  }

  .CardContainer__subtitle {
    font-size: 0.9rem;
  }
`;

export { CardContainer };
