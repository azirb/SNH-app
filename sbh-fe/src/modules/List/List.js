import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import ItemList from '../ItemList/ItemList'; 

const Container = styled.div`
    display : flex; 
    flex-direction : column; 
    width : 100% ; 
    box-sizing : border-box; 
    margin: 0 auto; 
`

const ListStyled = styled.ul`
    list-style: none; 
    padding: 0 ; 
`

const LinkStyle = styled(Link)`
    width:10%;
    color: black;
    margin: 0 auto; 
    text-decoration: none; 
    padding : 0 1em;
`

const SearchLine = styled.input`
    box-sizing: border-box; 
    width:90%;
    padding : 0 1em;
    border-radius : 45px;
    border: 1px solid black; 
    outline:none;
`

const LinkContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-content: center; 
    align-items: center; 
    box-sizing: border-box; 
    max-width: 1200px;
    width: 100%; 
    margin: 0 auto; 
`



export default class List extends Component {   

    render () {
        if (this.props.block === 'informatic') {
            return (
                <Container>
                <LinkContainer>
                <LinkStyle to='/'>Back</LinkStyle>
                <SearchLine type='serach'/>
                </LinkContainer>
                <ListStyled>
                <ItemList title='Informatic Formula 1'/>
                <ItemList title='Informatic Formula 2'/>
                <ItemList title='Informatic Formula 3'/>
                </ListStyled>
                </Container>
            )
        }
        if (this.props.block === 'math') {
            return (
                <Container>
                <LinkContainer>
                <LinkStyle to='/'>Back</LinkStyle>
                <SearchLine/>
                </LinkContainer>
                <ListStyled>
                <ItemList title='Math Formula 1'/>
                <ItemList title='Math Formula 2'/>
                <ItemList title='Math Formula 3'/>
                </ListStyled>
                </Container>
            )
        }
        if (this.props.block === 'physics') {
            return (
                <Container>
                <LinkContainer>
                <LinkStyle to='/'>Back</LinkStyle>
                <SearchLine/>
                </LinkContainer>
                <ListStyled>
                <ItemList title='Physics Formula 1'/>
                <ItemList title='Physics Formula 2'/>
                <ItemList title='Physics Formula 3'/>
                </ListStyled>
                </Container>
            )
        }
        if (this.props.block === 'geom') {
            return (
                <Container>
                <LinkContainer>
                <LinkStyle to='/'>Back</LinkStyle>
                <SearchLine/>
                </LinkContainer>
                <ListStyled>
                <ItemList title='Geometry Formula 1'/>
                <ItemList title='Geometry Formula 2'/>
                <ItemList title='Geometry Formula 3'/>
                </ListStyled>
                </Container>
            )
        }
    }
}