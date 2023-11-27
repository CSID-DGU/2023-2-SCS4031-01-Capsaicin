import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #b9b9b9;
    font-weight: bold;
  }

  td {
    font-weight: normal;
  }
`;
