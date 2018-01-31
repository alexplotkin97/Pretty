import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components';

const EnterBtn = props => (
    <WrapperEnterStyled>
      <button>Enter now!</button>
    </WrapperEnterStyled>
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EnterBtn)

const WrapperEnterStyled = styled.div`
  button {
    width: 300px;	
    height: 95px;	
    border: 10px solid rgba(0,0,0,.09);	
    border-radius: 82px;	
    background: #ffffff;	
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.13);
    font-family: DINProCondensedRegular, sans-serif;	
    font-size: 34px;	
    font-weight: bold;		
    color: #555555;	
    text-align: center;
    text-transform: uppercase;
  }
`;