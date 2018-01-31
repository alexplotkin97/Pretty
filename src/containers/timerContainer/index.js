import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components';
import Timer from '../timer';

const TimerContainer = props => (
    <div>
      <img src="" alt=""/>
      <TimerContainerStyled>
        <SubtitleStyledH2>Win a <span>live</span> glam session with me!</SubtitleStyledH2>
        <div>
          <p>Giveaway ends in:</p>
          <Timer/>
        </div>
        <ProgressBarContainerStyled>
          <div>
            <div></div>
          </div>
          <p>66 of 100 entries<br/><span>(I’m giving away 1 session for every 100 entries!)</span></p>
        </ProgressBarContainerStyled>
      </TimerContainerStyled>
    </div>
    
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimerContainer)

const TimerContainerStyled = styled.div`

`;

const SubtitleStyledH2 = styled.h2`
  text-align: center;
  text-transform: uppercase;
  
  span {
    color: #ffffff;
  }
`;

const ProgressBarContainerStyled = styled.div`

`;