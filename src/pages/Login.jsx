import React from 'react'
import styled from 'styled-components';

const Login = () => {
  return (
    <StyledWrapper>
      <form className="form">
        <div className="flex-column">
          <label>Email</label>
        </div>

        <div className="inputForm">
          <input 
            type="text" 
            className="input" 
            placeholder="Enter your Email" 
          />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>

        <div className="inputForm">
          <input 
            type="password" 
            className="input" 
            placeholder="Enter your Password" 
          />
        </div>

        <div className="flex-row">
          <div>
            <input type="checkbox"/>
            <label> Remember me</label>
          </div>

          <span className="span">Forgot password?</span>
        </div>

        <button className="button-submit">
          Sign In
        </button>

        <p className="p">
          Don't have an account? 
          <span className="span"> Sign Up</span>
        </p>

        <p className="p line">Or With</p>

        <div className="flex-row">
          <button className="btn">Google</button>
        </div>

      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
background:#f4f6fb;

.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: white;
  padding: 35px;
  width: 100%;
  max-width: 420px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.flex-column > label {
  font-weight: 600;
  color:#151717;
}

.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: .2s;
}

.input {
  border:none;
  width:100%;
  height:100%;
  padding-left:10px;
  border-radius:10px;
}

.input:focus{
  outline:none;
}

.inputForm:focus-within{
  border:2px solid #2d79f3;
}

.flex-row{
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:14px;
}

.span{
  color:#2d79f3;
  cursor:pointer;
  font-weight:500;
}

.button-submit{
  background:#151717;
  color:white;
  border:none;
  height:45px;
  border-radius:10px;
  cursor:pointer;
  font-weight:500;
  transition:.2s;
}

.button-submit:hover{
  background:#252727;
}

.p{
  text-align:center;
  font-size:14px;
}

.btn{
  width:100%;
  height:45px;
  border-radius:10px;
  border:1px solid #e5e7eb;
  background:white;
  cursor:pointer;
  transition:.2s;
}

.btn:hover{
  border:1px solid #2d79f3;
}

`;

export default Login;