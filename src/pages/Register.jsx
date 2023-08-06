import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #E9ECEF;

`;

const Wrapper = styled.div`
    width: 43%;
    height: 60%;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Title = styled.h1`

`;

const Form = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 20px;
`;


const Input = styled.input`
  flex: 1;
  background-color: #e5e5e5;
  border: grey;
  border-radius: 30px;
  margin-bottom: 20px;
  padding: 10px;
  width: 96%;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  outline: none;
  &:active {
    border: 1px solid #ffd60a;
    border-radius: 30px;
    margin-bottom: 20px;
  }
  &:focus {
    border: 1px solid #ffd60a;
    border-radius: 30px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  flex: 1;
  background-color: #003566;
  color: #fff;
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 30px;
  font-weight: 500;
`;

const Link = styled.a`
  color: #003566;
`;

export default function Register() {
  return (
    <Container>
        <Wrapper>

            <Title>
                Create an account
            </Title>
            <Form>
                <Input placeholder='first name'/>
                <Input placeholder='last name'/>
                <Input placeholder='phone number'/>
                <Input placeholder='username'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
                <Button>
                    Create
                </Button>
            </Form>
            <Link>
                Already have an account?
                <Link>
                    Login
                </Link>
            </Link>

        </Wrapper>

    </Container>
  )
}
