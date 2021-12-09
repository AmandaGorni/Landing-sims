import React from 'react'
import * as S from './style'
import { graphql, useStaticQuery } from 'gatsby';

export default function Invite() {

    const data = useStaticQuery(graphql`
    query{
        alldata{
            inviteContents {
                logo {
                  url
                }
                subtitle
                btn
                backInvite {
                  url
                }
              } 
        }
    }
    
    `)
    const { logo, subtitle, btn, backInvite } = data.alldata.inviteContents[0]
    return (
        <S.Container back={backInvite.url}>
            <S.Wrapper>
                <S.ContainerBox>
                    <S.BoxImg>
                        <img src={logo.url}></img>
                    </S.BoxImg>
                    <S.TextBox>
                        <h2>{subtitle}</h2>
                        <div>
                            <form action="https://www.origin.com/bra/pt-br/store/the-sims/the-sims-4/expansion/the-sims-4-cottage-living" target="_blank">
                                <S.BtnBuy type="submit">{btn[0]}</S.BtnBuy>
                            </form>
                            <form action="https://www.ea.com/pt-br/games/the-sims/the-sims-4/news/cottage-living-reveal" target="_blank">
                                <S.BtnMore type="submit">{btn[1]}</S.BtnMore>
                            </form>
                        </div>
                    </S.TextBox>
                </S.ContainerBox>
            </S.Wrapper>
        </S.Container>
    )
}