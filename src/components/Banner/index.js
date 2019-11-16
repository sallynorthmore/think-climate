import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideNav from '../SideNav';
import * as S from './styles';

const Banner = ({ text }) => {
  // const [navBarActive, setNavBarActive] = useState(false);
  // const [burgerActive, setburgerActive] = useState(false);
  // const toggleBurger = () => {
  //   // toggle the active boolean in the state
  //   setburgerActive(!burgerActive);
  //   // set the class in state for the navbar accordingly
  //   setNavBarActive(!burgerActive);
  // };
  const handleSideNav = () => {
    // ...
  };

  return (
    <S.Banner>
      <S.Logo href="/" title="Home">
        <svg width="150px" viewBox="0 0 1603 948">
          <g
            id="Website-Logo-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <path
              d="M161.8,413 L169,435 L168.187256,435.398893 C166.644874,436.143491 164.582469,437.077187 162,438.2 C158.933318,439.53334 155.40002,440.86666 151.4,442.2 C147.39998,443.53334 142.866692,444.733328 137.8,445.8 C132.733308,446.866672 127.400028,447.4 121.8,447.4 C115.933304,447.4 110.33336,446.600008 105,445 C99.66664,443.399992 95.00002,440.93335 91,437.6 C86.99998,434.26665 83.800012,430.066692 81.4,425 C78.999988,419.933308 77.8,414.0667 77.8,407.4 L77.8,258.2 L49,258.2 L49,236.6 L77.8,236.6 L77.8,166.2 L105,166.2 L105,236.6 L153,236.6 L153,258.2 L105,258.2 L105,399.8 C105.533336,407.533372 108.266642,413.199982 113.2,416.8 C118.133358,420.400018 123.799968,422.2 130.2,422.2 C137.933372,422.2 144.733304,420.933346 150.6,418.4 L152.427911,417.604087 C157.248963,415.486039 160.372966,413.951356 161.8,413 Z M378.2,445 L351,445 L351,328.6 C351,304.866548 346.933374,287.133392 338.8,275.4 C330.666626,263.666608 318.733412,257.8 303,257.8 C295.266628,257.8 287.600038,259.333318 280,262.4 C272.399962,265.466682 265.2667,269.66664 258.6,275 C251.9333,280.33336 246.133358,286.599964 241.2,293.8 C236.266642,301.000036 232.600012,308.866624 230.2,317.4 L230.2,445 L203,445 L203,153 L230.2,153 L230.2,283.8 C238.466708,268.066588 249.93326,255.666712 264.6,246.6 C279.26674,237.533288 295.133248,233 312.2,233 C324.20006,233 334.333292,235.199978 342.6,239.6 C350.866708,244.000022 357.66664,250.133294 363,258 C368.33336,265.866706 372.199988,275.333278 374.6,286.4 C377.000012,297.466722 378.2,309.6666 378.2,323 L378.2,445 Z M436.2,445 L436.2,236.6 L463.4,236.6 L463.4,445 L436.2,445 Z M436.2,193 L436.2,153 L463.4,153 L463.4,193 L436.2,193 Z M698.6,445 L671.4,445 L671.4,328.6 C671.4,303.799876 667.73337,285.800056 660.4,274.6 C653.06663,263.399944 641.800076,257.8 626.6,257.8 C618.59996,257.8 610.60004,259.266652 602.6,262.2 C594.59996,265.133348 587.200034,269.26664 580.4,274.6 C573.599966,279.93336 567.53336,286.26663 562.2,293.6 C556.86664,300.93337 553.000012,308.866624 550.6,317.4 L550.6,445 L523.4,445 L523.4,236.6 L548.2,236.6 L548.2,283.8 C556.733376,268.599924 568.933254,256.33338 584.8,247 C600.666746,237.66662 617.93324,233 636.6,233 C648.066724,233 657.79996,235.133312 665.8,239.4 C673.80004,243.666688 680.199976,249.666628 685,257.4 C689.800024,265.133372 693.266656,274.599944 695.4,285.8 C697.533344,297.000056 698.6,309.399932 698.6,323 L698.6,445 Z M905.4,445 L828.6,338.2 L783.8,379.8 L783.8,445 L756.6,445 L756.6,153 L783.8,153 L783.8,351.4 L901,237 L931.8,237 L846.6,322.2 L935,445 L905.4,445 Z M51.8,690.2 C51.8,675.53326 54.333308,661.666732 59.4,648.6 C64.466692,635.533268 71.733286,624.066716 81.2,614.2 C90.666714,604.333284 102.0666,596.533362 115.4,590.8 C128.7334,585.066638 143.666584,582.2 160.2,582.2 C181.800108,582.2 200.399922,586.933286 216,596.4 C231.600078,605.866714 243.266628,618.466588 251,634.2 L208.2,647.8 C203.133308,638.999956 196.333376,632.133358 187.8,627.2 C179.266624,622.266642 169.800052,619.8 159.4,619.8 C150.599956,619.8 142.400038,621.533316 134.8,625 C127.199962,628.466684 120.600028,633.333302 115,639.6 C109.399972,645.866698 105.000016,653.266624 101.8,661.8 C98.599984,670.333376 97,679.799948 97,690.2 C97,700.333384 98.66665,709.73329 102,718.4 C105.33335,727.06671 109.866638,734.599968 115.6,741 C121.333362,747.400032 127.999962,752.399982 135.6,756 C143.200038,759.600018 151.266624,761.4 159.8,761.4 C165.13336,761.4 170.46664,760.666674 175.8,759.2 C181.13336,757.733326 185.999978,755.66668 190.4,753 C194.800022,750.33332 198.66665,747.266684 202,743.8 C205.33335,740.333316 207.8,736.60002 209.4,732.6 L252.6,745.4 C245.666632,761.133412 234.066748,773.99995 217.8,784 C201.533252,794.00005 182.333444,799 160.2,799 C143.933252,799 129.1334,796.066696 115.8,790.2 C102.4666,784.333304 91.066714,776.40005 81.6,766.4 C72.133286,756.39995 64.800026,744.866732 59.6,731.8 C54.399974,718.733268 51.8,704.86674 51.8,690.2 Z M289.4,503 L333.4,503 L333.4,734.6 C333.4,742.333372 335.39998,748.399978 339.4,752.8 C343.40002,757.200022 348.999964,759.4 356.2,759.4 C359.133348,759.4 362.533314,758.866672 366.4,757.8 C370.266686,756.733328 373.933316,755.53334 377.4,754.2 L383.8,788.6 C377.399968,791.533348 369.800044,793.866658 361,795.6 C352.199956,797.333342 344.333368,798.2 337.4,798.2 C322.199924,798.2 310.400042,794.066708 302,785.8 C293.599958,777.533292 289.4,765.800076 289.4,750.6 L289.4,503 Z M409.4,795 L409.4,585.8 L453.4,585.8 L453.4,795 L409.4,795 Z M409.4,551.4 L409.4,503 L453.4,503 L453.4,551.4 L409.4,551.4 Z M826.2,795 L782.2,795 L782.2,677.8 C782.2,658.333236 779.000032,644.066712 772.6,635 C766.199968,625.933288 756.866728,621.4 744.6,621.4 C732.066604,621.4 720.666718,625.999954 710.4,635.2 C700.133282,644.400046 692.733356,656.33326 688.2,671 L688.2,795 L644.2,795 L644.2,677.8 C644.2,658.066568 641.000032,643.733378 634.6,634.8 C628.199968,625.866622 619.00006,621.4 607,621.4 C594.466604,621.4 583.000052,625.933288 572.6,635 C562.199948,644.066712 554.733356,655.93326 550.2,670.6 L550.2,795 L506.2,795 L506.2,585.8 L546.2,585.8 L546.2,627.8 C554.466708,613.13326 565.333266,601.866706 578.8,594 C592.266734,586.133294 607.66658,582.2 625,582.2 C642.33342,582.2 655.99995,586.733288 666,595.8 C676.00005,604.866712 682.199988,616.199932 684.6,629.8 C693.400044,614.333256 704.4666,602.533374 717.8,594.4 C731.1334,586.266626 746.333248,582.2 763.4,582.2 C775.666728,582.2 785.866626,584.53331 794,589.2 C802.133374,593.86669 808.599976,600.066628 813.4,607.8 C818.200024,615.533372 821.533324,624.533282 823.4,634.8 C825.266676,645.066718 826.2,655.933276 826.2,667.4 L826.2,795 Z M932.6,799 C922.466616,799 913.06671,797.33335 904.4,794 C895.73329,790.66665 888.266698,786.066696 882,780.2 C875.733302,774.333304 870.800018,767.40004 867.2,759.4 C863.599982,751.39996 861.8,742.73338 861.8,733.4 C861.8,723.533284 863.933312,714.60004 868.2,706.6 C872.466688,698.59996 878.533294,691.666696 886.4,685.8 C894.266706,679.933304 903.599946,675.400016 914.4,672.2 C925.200054,668.999984 937.133268,667.4 950.2,667.4 C960.066716,667.4 969.799952,668.266658 979.4,670 C989.000048,671.733342 997.666628,674.066652 1005.4,677 L1005.4,662.6 C1005.4,647.133256 1001.00004,635.06671 992.2,626.4 C983.399956,617.73329 970.733416,613.4 954.2,613.4 C942.999944,613.4 932.000054,615.466646 921.2,619.6 C910.399946,623.733354 899.266724,629.666628 887.8,637.4 L874.2,609.4 C901.133468,591.266576 929.133188,582.2 958.2,582.2 C987.000144,582.2 1009.39992,589.53326 1025.4,604.2 C1041.40008,618.86674 1049.4,639.933196 1049.4,667.4 L1049.4,743 C1049.4,752.33338 1053.26663,757.133332 1061,757.4 L1061,795 L1059.51903,795.271281 C1055.87888,795.921802 1052.7059,796.364705 1050,796.6 C1046.93332,796.866668 1043.93335,797 1041,797 C1032.46662,797 1025.86669,794.866688 1021.2,790.6 C1016.53331,786.333312 1013.66667,780.8667 1012.6,774.2 L1011.4,761 C1002.06662,773.266728 990.533402,782.666634 976.8,789.2 C963.066598,795.733366 948.333412,799 932.6,799 Z M944.6,766.6 C955.26672,766.6 965.333286,764.666686 974.8,760.8 C984.266714,756.933314 991.66664,751.533368 997,744.6 C1002.60003,739.799976 1005.4,734.73336 1005.4,729.4 L1005.4,701.8 C997.933296,698.866652 990.000042,696.6 981.6,695 C973.199958,693.399992 965.00004,692.6 957,692.6 C941.266588,692.6 928.40005,695.999966 918.4,702.8 C908.39995,709.600034 903.4,718.599944 903.4,729.8 C903.4,740.200052 907.266628,748.933298 915,756 C922.733372,763.066702 932.59994,766.6 944.6,766.6 Z M1209.8,749.4 L1219,784.2 L1218.0191,784.66041 C1212.5092,787.210622 1205.1029,790.057127 1195.8,793.2 C1185.93328,796.53335 1175.40006,798.2 1164.2,798.2 C1157.26663,798.2 1150.73336,797.266676 1144.6,795.4 C1138.46664,793.533324 1133.06669,790.733352 1128.4,787 C1123.73331,783.266648 1120.06668,778.40003 1117.4,772.4 C1114.73332,766.39997 1113.4,759.133376 1113.4,750.6 L1113.4,619.8 L1085.8,619.8 L1085.8,585.8 L1113.4,585.8 L1113.4,517 L1157.4,517 L1157.4,585.8 L1203,585.8 L1203,619.8 L1157.4,619.8 L1157.4,736.6 C1157.93334,744.066704 1160.26665,749.46665 1164.4,752.8 C1168.53335,756.13335 1173.66664,757.8 1179.8,757.8 C1185.93336,757.8 1191.79997,756.733344 1197.4,754.6 L1199.63354,753.740068 C1204.11234,751.996109 1207.50114,750.549431 1209.8,749.4 Z M1344.2,799 C1327.93325,799 1313.1334,796.133362 1299.8,790.4 C1286.4666,784.666638 1275.06671,776.866716 1265.6,767 C1256.13329,757.133284 1248.80003,745.666732 1243.6,732.6 C1238.39997,719.533268 1235.8,705.66674 1235.8,691 C1235.8,676.33326 1238.39997,662.400066 1243.6,649.2 C1248.80003,635.999934 1256.13329,624.40005 1265.6,614.4 C1275.06671,604.39995 1286.4666,596.533362 1299.8,590.8 C1313.1334,585.066638 1328.06658,582.2 1344.6,582.2 C1360.86675,582.2 1375.59993,585.133304 1388.8,591 C1402.00007,596.866696 1413.26662,604.666618 1422.6,614.4 C1431.93338,624.133382 1439.06664,635.466602 1444,648.4 C1448.93336,661.333398 1451.4,674.866596 1451.4,689 C1451.4,692.200016 1451.26667,695.199986 1451,698 L1450.82857,699.735719 C1450.61905,701.778577 1450.40952,703.533326 1450.2,705 L1282.6,705 C1283.4,714.33338 1285.59998,722.733296 1289.2,730.2 C1292.80002,737.666704 1297.46664,744.133306 1303.2,749.6 C1308.93336,755.066694 1315.46663,759.266652 1322.8,762.2 C1330.13337,765.133348 1337.79996,766.6 1345.8,766.6 C1351.6667,766.6 1357.46664,765.866674 1363.2,764.4 C1368.93336,762.933326 1374.19998,760.800014 1379,758 C1383.80002,755.199986 1388.06665,751.80002 1391.8,747.8 C1395.53335,743.79998 1398.46666,739.400024 1400.6,734.6 L1438.2,745.4 C1430.99996,761.133412 1419.06675,773.99995 1402.4,784 C1385.73325,794.00005 1366.33344,799 1344.2,799 Z M1407.8,674.6 C1407,665.799956 1404.80002,657.666704 1401.2,650.2 C1397.59998,642.733296 1393.00003,636.400026 1387.4,631.2 C1381.79997,625.999974 1375.2667,621.933348 1367.8,619 C1360.3333,616.066652 1352.46671,614.6 1344.2,614.6 C1335.93329,614.6 1328.13337,616.066652 1320.8,619 C1313.46663,621.933348 1307.00003,625.999974 1301.4,631.2 C1295.79997,636.400026 1291.26668,642.733296 1287.8,650.2 C1284.33332,657.666704 1282.2,665.799956 1281.4,674.6 L1407.8,674.6 Z M1485.4,795 L1485.4,743.8 L1521.8,743.8 L1521.8,795 L1485.4,795 Z"
              id="thinkclimate."
              fill="#FFFFFF"
              fillRule="nonzero"
            ></path>
            <path
              d="M62.5,885.5 L1516,886"
              id="Line-3"
              stroke="#C20000"
              strokeWidth="15"
              strokeLinecap="square"
            ></path>
          </g>
        </svg>
        <S.SR>{text}</S.SR>
      </S.Logo>
      <button onClick={handleSideNav}>Show nav</button>
      <SideNav />
    </S.Banner>
  );
};

Banner.defaultProps = {
  text: 'ThinkClimate'
};

Banner.props = {
  text: PropTypes.string
};

export default Banner;
