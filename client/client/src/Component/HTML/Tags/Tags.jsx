import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import style from './Tags.module.css';
import cover from './cover.png';

const Tags = () =>{
    return(
        <div className={style.block}>
            <Helmet>
                <title>Використання тегів</title>
            </Helmet>
            <div className={style.wrapper}>
                <h1 className={style.h1}>Використання тегів</h1>
                <p>
                    <img src={cover} alt='Hellow Attributes!' className={style.cover}/>
                </p>
                <section>
                    <p className={style.p}>
                    <b>HTML</b> використовує теги для визначення структури та розмітки веб-сторінки. Теги огортають контент і вказують браузеру, як цей контент повинен бути представлений. Теги можуть мати атрибути, які надають додаткову інформацію про елемент.</p>
                    <p><Link className={style.link}>
                        Список всіх тегів
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="20" fill='rgba(36, 101, 241, 1)'>
                            <path d="m592.5-482-314-314q-10.5-10.5-10.75-26.25t10.75-27.25q11-11.5 27-11.5t27.5 11.5L661-522q8.5 8.5 12.25 18.75T677-482q0 11-3.75 21.25T661-442L332.5-113.5q-11.5 11.5-27.25 11t-26.75-12q-11-11-11.25-26.5t11.25-27l314-314Z"/>
                        </svg>
                    </Link></p>
                    <p className={style.p}>
                            <p><b>Теги мають початковий та закривний теги, які огортають контент:</b></p>
                            <code className={style.code}>
                                {`<p>Це параграф з текстом.</p>`}<br />
                            </code>
                                <p>Теги можуть бути вкладені один в одного, створюючи деревоподібну структуру:</p>
                                <code className={style.code}>
                                {`<div>`}<br />
                                &nbsp;&nbsp;{`<h1>Заголовок</h1>`}<br />
                                &nbsp;&nbsp;{`<p>Це параграф з текстом.</p>`}<br />
                                {`<div>`}
                                </code>
                                <p>HTML має теги для різного текстового контенту:</p>
                                <ul className={style.text_content}>
                                    <li><b>{`<h1>`}</b> до <b>{`<h6>`}</b>: Заголовки різного рівня</li>
                                    <li><b>{`<p>`}</b>: Параграфи</li>
                                    <li><b>{`<span>`}</b>: Визначає невеликий текстовий блок</li>
                                </ul>
                                <p>HTML має теги для створення списків:</p>
                                <ul className={style.text_content}>
                                    <li><b>{`<ul>`}</b>: Невпорядкований список</li>
                                    <li><b>{`<ol>`}</b>: Впорядкований список</li>
                                    <li><b>{`<li>`}</b>: Елемент списку</li>
                                </ul>
                                <p>HTML має тег <i>{`<a>`}</i>, який створює гіперпосилання на інші веб-сторінки або ресурси:</p>
                                <code className={style.code}>
                                {`<a href="https://book.porozinskyi.com/">Front-end book</a>`}<br />
                                </code>
                                <p>HTML має теги для вставки зображень та мультимедіа:</p>
                                <ul className={style.text_content}>
                                    <li><b>{`<img>`}</b>: Вставка зображення</li>
                                    <li><b>{`<video>`}</b>: Вставка відео</li>
                                    <li><b>{`<audio>`}</b>: Вставка аудіо</li>
                                </ul>
                                <p>HTML має теги для створення форм для збору даних від користувача:</p>
                                <ul className={style.text_content}>
                                    <li><b>{`<form>`}</b>: Визначає форму</li>
                                    <li><b>{`<input>`}</b>: Поле вводу</li>
                                    <li><b>{`<textarea>`}</b>: Текстове поле для довшого тексту</li>
                                    <li><b>{`<select>`}</b> та <b>{`<option>`}</b>: Випадаючий список</li>
                                </ul>
                                <p>HTML має теги для створення таблиць:</p>
                                <ul className={style.text_content}>
                                    <li><b>{`<table>`}</b>: Визначає таблицю</li>
                                    <li><b>{`<tr>`}</b>: Визначає рядок таблиці</li>
                                    <li><b>{`<td>`}</b>: Визначає комірку даних в рядку таблиці</li>
                                </ul>
                                <p>HTML має теги для оформлення тексту:</p>
                                <ul className={style.text_content}>
                                    <li><b>{`<em>`}</b>: <em>Курсивний</em> текст</li>
                                    <li><b>{`<strong>`}</b>: <stron>Жирний</stron> текст</li>
                                    <li><b>{`<u>`}</b>: <u>Підкреслений</u> текст</li>
                                    <li><b>{`<del>`}</b>: <del>Закреслений</del> текст</li>
                                    <li><b>{`<code>`}</b>: Відображення <code>коду</code></li>
                                </ul>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Tags;