import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components';
import TimerContainer from '../timerContainer';
import EnterBtn from '../enterBtn';

const Home = props => (
  <div>
    <HeaderStyled>
      <img src="img/glamcam-logo.png" alt="glamcam"/>
    </HeaderStyled>
    <ContainerStyledDiv>
      <TitleStyledH1>Giveaway</TitleStyledH1>
      <TimerContainer/>
      <WrapperBtn>
        <EnterBtn/>
      </WrapperBtn>

      
    </ContainerStyledDiv>
  </div>
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

const HeaderStyled = styled.header`
  position: absolute;
  padding: 30px;
  width: 100%;
  
  img {
    display: block;
    margin: 0 auto;
    width: 250px;
  }
`;
const ContainerStyledDiv = styled.div`
  padding: 30px 0;
  background: #F29397;
`;

const TitleStyledH1 = styled.div`
  margin: 30px 0;
  font-family: DINProCondensedRegular;
  font-size: 100px;
  font-weight: bold;
  color: #ffffff;			
  text-align: center;
  text-transform: uppercase;
`;

const WrapperBtn = styled.div`

`;