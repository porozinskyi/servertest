import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import style from './Attributes.module.css';
import cover from './cover.png';

const Attributes = () =>{
    return(
        <div className={style.block}>
            <Helmet>
                <title>Використання атрибутів</title>
            </Helmet>
            <div className={style.wrapper}>
                <h1 className={style.h1}>Використання атрибутів</h1>
                <p>
                    <img src={cover} alt='Hellow Attributes!' className={style.cover}/>
                </p>
                <section>
                    <p className={style.p}>
                    Атрибути в <b>HTML</b> - це додаткова інформація, яку можна додати до тегів для налаштування їх зовнішнього вигляду або поведінки. Вони визначаються в тегах за допомогою імені та значення, розділених знаком рівності.
                    </p>
                    <p><Link className={style.link}>
                        Список всіх атрибутів
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="20" fill='rgba(36, 101, 241, 1)'>
                            <path d="m592.5-482-314-314q-10.5-10.5-10.75-26.25t10.75-27.25q11-11.5 27-11.5t27.5 11.5L661-522q8.5 8.5 12.25 18.75T677-482q0 11-3.75 21.25T661-442L332.5-113.5q-11.5 11.5-27.25 11t-26.75-12q-11-11-11.25-26.5t11.25-27l314-314Z"/>
                        </svg>
                    </Link></p>
                    <p className={style.p}>
                        <ul className={style.Attributes_ul}>
                            <li className={style.li}>
                                <p>
                                    <b>Атрибут class</b>: Використовується для ідентифікації елементів та стилізації їх за допомогою CSS. Дозволяє задати кілька імен класів, розділених пробілами, що дозволяє застосовувати стилі до груп елементів:
                                </p>
                                <code className={style.code}>
                                    {`<p class="paragraph">Це параграф з класом "paragraph".</p>`}<br />
                                </code>
                            </li>
                            <li className={style.li}>
                                <p>
                                    <b>Атрибут id</b>: Використовується для унікальної ідентифікації окремого елемента на сторінці. Зазвичай використовується для стилізації або маніпулювання елементом за допомогою JavaScript:
                                </p>
                                <code className={style.code}>
                                    {`<div id="header">Це заголовок сторінки.</div>`}<br />
                                </code>
                            </li>
                            <li className={style.li}>
                                <p>
                                    <b>Атрибут style</b>: Використовується для прямого задання стилів внутрішньому стилізації елемента. Значення атрибуту <b>style</b> має бути записано в CSS-форматі:
                                </p>
                                <code className={style.code}>
                                    {`<p style="color: blue; font-size: 18px;">Цей текст буде синього кольору зі шрифтом розміру 18px.</p>`}<br />
                                </code>
                            </li>
                            <li className={style.li}>
                                <p>
                                    <b>Атрибут href</b>: Використовується для встановлення посилання на іншу веб-сторінку або ресурс. Значення атрибуту <b>href</b> - це URL, на який веде посилання.:
                                </p>
                                <code className={style.code}>
                                    {`<a href="https://u24.gov.ua">Посилання на United24</a>`}<br />
                                </code>
                            </li>
                            <li className={style.li}>
                                <p>
                                    <b>Атрибут src</b>: Використовується для вказання джерела зображення, аудіо, відео або іншого мультимедіа:
                                </p>
                                <code className={style.code}>
                                    {`<img src="image.jpg" alt="Зображення">`}<br />
                                    {`<audio src="audio.mp3" controls></audio>`}
                                </code>
                            </li>
                            <li className={style.li}>
                                <p>
                                    <b>Атрибут alt</b>: Використовується для надання текстового опису зображення для випадків, коли зображення не може бути відображено або для підвищення доступності:
                                </p>
                                <code className={style.code}>
                                    {`<img src="image.jpg" alt="Опис зображення">`}<br />
                                </code>
                            </li>
                            <li className={style.li}>
                                <p>
                                    <b>Атрибут title</b>: Використовується для відображення підказки під час наведення на елемент курсору миші. Значення атрибуту <b>title</b> - це текст підказки.:
                                </p>
                                <code className={style.code}>
                                    {`<a href="https://www.example.com" title="Офіційний сайт">Посилання на example.com</a>`}<br />
                                </code>
                            </li>
                        </ul>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Attributes;