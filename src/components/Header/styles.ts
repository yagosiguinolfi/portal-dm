import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    position: absolute;
    top:0;
    left: 0;
    z-index:10;
    background-color: #373334;
    height: 80px;
    justify-content: space-between;
    width: 100%;
    padding: 0;

    img {
        width: 360px;
        /*height: 100px;*/
    }

    button {
        color: white;
        background-color: transparent;
        border: 0px;
        margin-right: 10px;

    }


`
export const Content = styled.header`
    //max-width: 1120px;
    //width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    width: 100%;
`

export const LeftGroup = styled.header`
    display: flex;
    justify-items: left;
    align-items: center;
    padding: 0 1rem;
`
export const LabelHeader = styled.header`
    color: #ffffff;
    margin-left: 2rem;

    strong{
        color: var(--name);
        margin-left: 0.5rem;
    }
`
export const MenuSideBarPosicao = styled.header`    
    color: #ffffff;
`

export const RightGroup = styled.header`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    margin-right: 30px;
    
    img {
        width: 50px;
        margin-left: 10px;
        cursor: pointer;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.7);
        }

    }
`