import styled from "styled-components";

export const Container = styled.div`
    background: url(${props => props.back})no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    
`
export const Wrapper = styled.div`
    max-width: 60%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`
export const ContainerBox = styled.div`
    width: 600px;
    
`
export const BoxImg = styled.picture`
Img{
    width: 100%;
}
`
export const TextBox = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        color:#fff;
        font-weight: lighter;
        margin-bottom: 20px;
    }
    form{
        display:inline;
    }   
`
export const BtnBuy = styled.button`
width: 180px;
    height: 58px ;
    font-size: 21px;
    background-color: #fff;
    border: 1px solid #fff;
    margin-right: 20px;
    color:#000;
    cursor:pointer;
    transition-duration: 0.3s;
    &:hover {
        box-shadow: 0px 0px 0px 2px #fff;
    }
`
export const BtnMore = styled.button`
width: 180px;
    height: 58px ;
    font-size: 21px;
    background-color: transparent;
    border: 1px solid #fff;
    font-weight: 300;
    color:#fff;
    cursor:pointer;
    transition-duration: 0.3s;
    &:hover {
        box-shadow: 0px 0px 0px 2px #fff;
        }
    }
`