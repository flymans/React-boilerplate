import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: blue;
`;

const Title = styled.h1`
    color: white;
`;

const App = () => (
    <Wrapper>
        <Title>React Boilerplate</Title>
    </Wrapper>
);

export default App;
