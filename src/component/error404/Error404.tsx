import React from 'react';
import {Error, ErrorMessage, ErrorNumber} from "./Error404.styles";

const Error404 = () => {
    return (
        <Error>
            <ErrorNumber>404 Error</ErrorNumber>
            <ErrorMessage>oops, the page you are looking for can`t be found!😭</ErrorMessage>
        </Error>
    );
};

export default Error404;