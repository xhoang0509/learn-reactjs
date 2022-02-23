import styled from 'styled-components';

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    background-color: #333;
`;

export const Item = styled.li`
    flex: 1;
    display: flex;
    justify-content: center;

    &:hover {
        cursor: pointer;
        background-color: #04aa6d;
        color: white;
    }

    & > a {
        flex: 1;
        text-align: center;
        padding: 20px;
        color: #f2f2f2;
        text-decoration: none;

        &.active {
            background-color: #04aa6d;
            color: white;
        }
    }
`;
