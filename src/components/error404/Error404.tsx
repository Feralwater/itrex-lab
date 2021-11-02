import React from 'react';
import style from './Error404.module.scss'

const Error404 = () => {
    return (
        <section className={style.error}>
            <div className={style.error__number}>404 Error</div>
            <div className={style.error__message}>oops, the page you are looking for can`t be found!😭</div>
        </section>
    );
};

export default Error404;