import styled from "styled-components";

export const Container =styled.section`
    background: #fff
    position: fixed;
    width: 100%;
`

export const NavMenu = styled.div` 
max-width: 1500px;
margin: 10px auto;
display: flex;
justify-content: space-between;
height: 7vh;
`
export const LogoBox = styled.figure`
    img{
        width: 280px;
        height: 100%;
        
    }
`
export const MenuContainer = styled.nav`

width: 600px;
`
export const MenuList = styled.ul`

display: flex;
width: 100%;
height: 100%;
justify-content: space-between;
align-items: center;
`
export const MenuItem = styled.li`

width: 20%;
font-size: 20px;
list-style: none;
text-align: center;
transition: 400ms ease-in;
position:relative; 
  &::after {
    content:"";
    position:absolute;
    top:100%;
    left:12px;
    width:0;
    height:5px;
    background: #32CD32;
    transition:0.3s;
    border-radius:10px

  }
  &:hover:after{
    width:80%;
    background:#32CD32;
  }
a{
    text-decoration: none;
    color:inherit;
}
&:hover {
    color:#32CD32;
}

`
