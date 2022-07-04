import styled from 'styled-components';
import React from 'react';

const AnimalStyle = styled.div`

`;

const AnimalCard = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.species}</p>
            <p>{props.status}</p>
            <p>{props.gender}</p>
        </div>

    );
}