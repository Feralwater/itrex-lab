import React from 'react';
import {Error, ErrorMessage, ErrorNumber} from "./Error404Styles";
import {dictionary} from "../../dictionary/dictionary";

const Error404 = () => {
    return (
        <Error>
            <ErrorNumber>{dictionary.error404.errorNumber}</ErrorNumber>
            <ErrorMessage>{dictionary.error404.errorMessage}</ErrorMessage>
        </Error>
    );
};

export default Error404;