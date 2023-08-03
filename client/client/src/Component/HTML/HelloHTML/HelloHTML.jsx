import { Helmet } from 'react-helmet';
import style from './HelloHTML.module.css';
import cover from './cover.png';

const HelloHTML = () =>{
    return(
        <div className={style.block}>
            <Helmet>
                <title>Знайомство з HTML, структура документа</title>
            </Helmet>
            <div className={style.wrapper}>
                <h1 className={style.h1}>Знайомство з HTML, структура документа</h1>
                <p>
                    <img src={cover} alt='Hello HTML!' className={style.cover}/>
                </p>
                <section>
                    <p className={style.p}>
                        HTML (HyperText Markup Language) - це мова розмітки, яка використовується для створення структури веб-сторінок.
                        <a className={style.link} href='https://uk.wikipedia.org/wiki/HTML#%D0%86%D1%81%D1%82%D0%BE%D1%80%D1%96%D1%8F_%D1%80%D0%BE%D0%B7%D0%B2%D0%B8%D1%82%D0%BA%D1%83_HTML'>
                            Історія
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="20" fill='rgba(36, 101, 241, 1)'>
                                <path d="m592.5-482-314-314q-10.5-10.5-10.75-26.25t10.75-27.25q11-11.5 27-11.5t27.5 11.5L661-522q8.5 8.5 12.25 18.75T677-482q0 11-3.75 21.25T661-442L332.5-113.5q-11.5 11.5-27.25 11t-26.75-12q-11-11-11.25-26.5t11.25-27l314-314Z"/>
                            </svg>
                        </a>
                    </p>
                    <p className={style.p}>
                        HTML використовує теги для створення різних елементів на сторінці. Теги зазвичай мають відкриваючий та закриваючий теги, які оточують вміст елемента. Ось приклад базової структури HTML-документа:
                    </p>
                    <div className={style.code__wrapper}>
                        <div className={style.code__header}>{`< HTML />`}<span><i>.code</i></span></div>
                        <code className={style.code}>
                            {`<!DOCTYPE html>`}<br />
                            {`<html>`}<br />
                            &nbsp;&nbsp;{`<head>`}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{`<title>Заголовок сторінки</title>`}<br />
                            &nbsp;&nbsp;{`<head>`}<br />
                            &nbsp;&nbsp;{`<body>`}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{`<h1>Привіт, це заголовок першого рівня</h1>`}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{`<p>Це параграф з текстом.</p>`}<br />
                            &nbsp;&nbsp;{`</body>`}<br />
                            {`<html>`}<br />
                        </code>
                    </div>
                    <p className={style.p}>
                        <h2>Структура документа:</h2>
                        <ul>
                            <li className={style.li}>
                                <b>{`<!DOCTYPE html>`}</b>: Цей тег вказує на тип документа, у даному випадку, це HTML5. Він повинен бути першим елементом в документі.
                            </li>
                            <li className={style.li}>
                                <b>{`<html>`}</b>: Кореневий елемент, який обгортає всі інші елементи на сторінці. Всередині цього елемента містяться два блоки - 
                                <b>{`<head>`}</b> та <b>{`<body>`}</b>.
                            </li>
                            <li className={style.li}>
                                <b>{`<head>`}</b>: Цей елемент містить інформацію про документ, таку як заголовок вікна браузера, підключені стилі, метатеги, тощо. Наприклад, <b>{`<title>`}</b> - це тег для встановлення заголовка вікна браузера.
                            </li>
                            <li className={style.li}>
                                <b>{`<body>`}</b>: Цей елемент містить весь вміст сторінки, який буде відображений у браузері. Тут розміщуються заголовки, параграфи, зображення, посилання та інші елементи.
                            </li>
                            <li className={style.li}>
                                Елементи внутрішнього вмісту: Внутрішні елементи розміщуються всередині <b>{`<body>`}</b> та можуть містити будь-який контент. Наприклад, <b>{`<h1>`}</b> - це тег для створення заголовка першого рівня, а <b>{`<p>`}</b> - для створення параграфу з текстом.
                            </li>
                        </ul>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default HelloHTML;