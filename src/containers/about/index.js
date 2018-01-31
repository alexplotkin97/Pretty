import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components';

const About = () => (
    <div>
      <img src="" alt="Victoria Jameson"/>
      <AboutTitleStyled>Victoria Jameson</AboutTitleStyled>
      <AboutTextStyled>

      </AboutTextStyled>
      <CheckProfileStyle>Check out my glamcam profile</CheckProfileStyle>
    </div>
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)

const AboutTitleStyled = styled.h3`

`;

const AboutTextStyled = styled.p`

`;

const CheckProfileStyle = styled.button`

`;

