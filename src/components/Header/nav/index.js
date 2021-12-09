import React from 'react'
import * as S from './style'
import { graphql, useStaticQuery } from 'gatsby'

export default function Nav() {

    const data = useStaticQuery(graphql`
    query{
        alldata{
            navContents {
                logo {
                  url
                }
                menu
              }  
        }
    }
    `)

        const {menu, logo} = data.alldata.navContents[0]

    return (
        <S.Container>
            <S.NavMenu>
                <S.LogoBox>
                    <img src={logo.url} alt="the sims 4"/>
                </S.LogoBox>
                <S.MenuContainer>
                    <S.MenuList>
                        <S.MenuItem><a href="">{menu[0]}</a></S.MenuItem>
                        <S.MenuItem><a href="">{menu[1]}</a></S.MenuItem>
                        <S.MenuItem><a href="">{menu[2]}</a></S.MenuItem>
                        <S.MenuItem><a href="">{menu[3]}</a></S.MenuItem>
                        <S.MenuItem><a href="">{menu[4]}</a></S.MenuItem>
                        </S.MenuList>
                </S.MenuContainer>
            </S.NavMenu>
        </S.Container>
    )
}
