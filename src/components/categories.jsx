import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import Category from './Category';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border-radius: 30px;
  overflow: hidden;
`;

 export default function Categories() {
  return (
    <Container>
        {categories.map(item => (
            <Category title={item.title} key={item.id} image = {item.img}/>
            ))}
    </Container>
  )
}
