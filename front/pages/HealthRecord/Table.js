import React from "react";
import * as S from "./styles";

const Table = ({ data }) => {
  return (
    <S.StyledTable>
      <thead>
        <tr>
          <th>측정일자</th>
          <th>몸무게</th>
          {/* 추가적인 열들 */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.measurement_date}</td>
            <td>{row.weight_figure}</td>
            {/* 추가적인 셀들 */}
          </tr>
        ))}
      </tbody>
    </S.StyledTable>
  );
};
