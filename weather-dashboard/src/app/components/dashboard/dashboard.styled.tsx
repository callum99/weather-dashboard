import styled, { css } from 'styled-components';

export const DashContainer = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background: #000000;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DashLeftContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 35%;
  max-width: 555px;
  background: #1E213A;
  padding: 3% 2%;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 3% 5%;
    max-width:100%;
  }
`;

export const DashRightContainer = styled.div`
  display:flex;
  flex-direction: column;
  background: #100E1D;
  width: 65%;
  padding: 3% 5%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TodayLocation = styled.div`
  font-family: __capriola_b990cb;
  font-size: 64px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 1px;
  text-align: center;
  display:flex;
  justify-content: center;
  width:100%;
  color: #ffffff;
  margin: 20px 0px;

  @media screen and (max-width: 1215px) {
    font-size: 48px;
    line-height: 33px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 22px;
    margin: 20px 0px 10px 0px;
  }
`;
export const TodayDate = styled.div`
  font-family: __capriola_b990cb;
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 1px;
  text-align: center;
  display:flex;
  justify-content: center;
  width:100%;
  color: #ffffff;
  margin: 20px 0px;

  @media screen and (max-width: 1215px) {
    font-size: 27px;
    line-height: 33px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
    margin: 10px 0px;
  }
`;
export const TodayTemp = styled.div`
  font-family: __capriola_b990cb;
  font-size: 120px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 1px;
  text-align: center;
  display:flex;
  justify-content: center;
  width:100%;
  color: #ffffff;
  margin: 20px 0px;

  @media screen and (max-width: 1215px) {
    font-size: 90px;
    line-height: 100%;
  }

  @media screen and (max-width: 768px) {
    font-size: 60px;
    line-height: 100%;
  }
`;
export const TodayCondition = styled.div`
  font-family: __capriola_b990cb;
  font-size: 48px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 1px;
  text-align: center;
  display:flex;
  justify-content: center;
  width:100%;
  color: #ffffff;
  margin: 20px 0px;

  @media screen and (max-width: 1215px) {
    font-size: 36px;
    line-height: 33px;
    margin: 10px 0px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 22px;
    margin: 10px 0px;
  }
`;

export const ImageContainer = styled.div`
  display:flex;
  justify-content: center;
  @media screen and (max-width: 1215px) {
    & > img {
      width: 175px;
      height: auto;
    }
  }
  @media screen and (max-width: 768px) {
    & > img {
      width: 117px;
      height: auto;
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

