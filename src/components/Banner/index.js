import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Banner = ({ text }) => (
  <S.Banner>
    <S.Logo href="/" title="Home">
      <svg width="100px" viewBox="0 0 1297 1297">
        <defs>
          <circle id="path-1" cx="486.0675" cy="486.0675" r="486.0675"></circle>
          <circle id="path-3" cx="486.0675" cy="486.0675" r="486.0675"></circle>
          <circle id="path-5" cx="486.0675" cy="486.0675" r="486.0675"></circle>
          <circle id="path-7" cx="486.0675" cy="486.0675" r="486.0675"></circle>
          <circle id="path-9" cx="486.0675" cy="486.0675" r="486.0675"></circle>
          <circle
            id="path-11"
            cx="486.0675"
            cy="486.0675"
            r="486.0675"
          ></circle>
          <circle
            id="path-13"
            cx="486.0675"
            cy="486.0675"
            r="486.0675"
          ></circle>
          <circle
            id="path-15"
            cx="486.0675"
            cy="486.0675"
            r="486.0675"
          ></circle>
          <circle
            id="path-17"
            cx="486.0675"
            cy="486.0675"
            r="486.0675"
          ></circle>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="V4-Logo-Original" transform="translate(10.000000, 10.000000)">
            <circle
              id="Oval"
              stroke="#C20000"
              strokeWidth="20"
              cx="638.5"
              cy="638.5"
              r="638.5"
            ></circle>
            <g id="Group" transform="translate(153.000000, 153.000000)">
              <g
                id="think-climate."
                transform="translate(200.000000, 301.000000)"
                fill="#FFFFFF"
                fontFamily="Helvetica"
                fontSize="153.9"
                fontWeight="normal"
              >
                <text id="think">
                  <tspan x="0.925" y="150.945">
                    think
                  </tspan>
                </text>
                <text id="climate">
                  <tspan x="2.3101" y="292.942893">
                    climate
                  </tspan>
                </text>
                <text id=".">
                  <tspan x="548.0395" y="292.02">
                    .
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <S.SR>{text}</S.SR>
    </S.Logo>
    {/* <S.Nav>
      <ul>
        <li>
          <a href="#">Program</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
      </ul>
    </S.Nav> */}
  </S.Banner>
);

Banner.defaultProps = {
  text: 'ThinkClimate'
};

Banner.props = {
  text: PropTypes.string
};

export default Banner;
