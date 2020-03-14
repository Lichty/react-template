import React from 'react';

function Title(props) {

    const h1Style = {
        padding: "80px",
        textAlign: "center"
    }

    return <>
        <h1 style={h1Style}>{props.children}</h1>
    </>
}

export default Title;