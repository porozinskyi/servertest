import { Helmet } from 'react-helmet';
import style from './CreatePage.module.css';
import cover from './cover.png';
import photo from './img/photo.png';

const CreatePage = () =>{
    return(
        <div className={style.block}>
            <Helmet>
                <title>Створення простої веб-сторінки</title>
            </Helmet>
            <div className={style.wrapper}>
                <h1 className={style.h1}>Створення простої веб-сторінки</h1>
                <p>
                    <img src={cover} alt='Hello HTML!' className={style.cover}/>
                </p>
                <section>
                    <p className={style.p}>
                    Створення простої веб-сторінки в HTML - це перший крок у розвитку веб-розробки. Проста веб-сторінка може містити заголовок, текстовий контент, зображення та посилання.
                    </p>
                    <p className={style.p}>
                        <ul className={style.CreactePage_ul}>
                            <li className={style.li}>
                                <h3>Відкрийте текстовий редактор:</h3>
                                <p>Почніть з відкриття текстового редактора, такого як: <a href='https://notepad-plus-plus.org/downloads/vd' className={style.link}>Notepad++</a>, <a href='https://code.visualstudio.com/' className={style.link}>VS Code</a> або <a href='https://www.sublimetext.com/' className={style.link}>Sublime Text</a>.
                                </p>
                            </li>
                            <li className={style.li}>
                                <h3>Створіть базову структуру HTML:</h3>
                                <code className={style.code}>
                                    {`<!DOCTYPE html>`}<br />
                                    {`<html>`}<br />
                                    &nbsp;&nbsp;{`<head>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<title>Заголовок вашої сторінки</title>`}<br />
                                    &nbsp;&nbsp;{`<head>`}<br />
                                    &nbsp;&nbsp;{`<body>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<!-- Тут буде контент сторінки -->`}<br />
                                    &nbsp;&nbsp;{`</body>`}<br />
                                    {`<html>`}<br />
                                </code>
                            </li>
                            <li className={style.li}>
                                <h3>Додайте заголовок сторінки:</h3>
                                <p>Використайте <b>{`<h1>`}</b> тег для створення заголовка сторінки. Заголовок буде розміщено в верхній частині сторінки.</p>
                                <code className={style.code}>
                                    {`<!DOCTYPE html>`}<br />
                                    {`<html>`}<br />
                                    &nbsp;&nbsp;{`<head>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<title>Заголовок вашої сторінки</title>`}<br />
                                    &nbsp;&nbsp;{`<head>`}<br />
                                    &nbsp;&nbsp;{`<body>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<h1>Вітаю на моїй першій веб-сторінці!</h1>`}<br />
                                    &nbsp;&nbsp;{`</body>`}<br />
                                    {`<html>`}<br />
                                </code>
                            </li>
                            <li className={style.li}>
                                <h3>Додайте текстовий контент:</h3>
                                <p>Використайте <b>{`<p>`}</b> тег для додавання текстового контенту. Цей тег визначає параграф з текстом.</p>
                                <code className={style.code}>
                                    {`<!DOCTYPE html>`}<br />
                                    {`<html>`}<br />
                                    &nbsp;&nbsp;{`<head>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<title>Заголовок вашої сторінки</title>`}<br />
                                    &nbsp;&nbsp;{`<head>`}<br />
                                    &nbsp;&nbsp;{`<body>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<h1>Вітаю на моїй першій веб-сторінці!</h1>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<p>Це моя перша веб-сторінка. Я дуже захоплений вивченням веб-розробки!</p>`}<br />
                                    &nbsp;&nbsp;{`</body>`}<br />
                                    {`<html>`}<br />
                                </code>
                            </li>
                            <li className={style.li}>
                                <h3>Вставте зображення:</h3>
                                <p>Використайте <b>{`<img>`}</b> тег для вставки зображення на сторінку. Атрибут <b>src</b> має містити шлях до зображення.</p>
                                <code className={style.code}>
                                    {`<!DOCTYPE html>`}<br />
                                    {`<html>`}<br />
                                    &nbsp;&nbsp;{`<head>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<title>Заголовок вашої сторінки</title>`}<br />
                                    &nbsp;&nbsp;{`<head>`}<br />
                                    &nbsp;&nbsp;{`<body>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<h1>Вітаю на моїй першій веб-сторінці!</h1>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<p>Це моя перша веб-сторінка. Я дуже захоплений вивченням веб-розробки!</p>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<img src="my_image.jpg" alt="Моя картинка">`}<br />
                                    &nbsp;&nbsp;{`</body>`}<br />
                                    {`<html>`}<br />
                                </code>
                            </li>
                            <li className={style.li}>
                                <h3>Додайте гіперпосилання:</h3>
                                <p>Використайте <b>{`<a>`}</b> тег для створення гіперпосилання. Атрибут <b>href</b> має містити посилання, на яке користувач перейде після кліку на посилання.</p>
                                <code className={style.code}>
                                    {`<!DOCTYPE html>`}<br />
                                    {`<html>`}<br />
                                    &nbsp;&nbsp;{`<head>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<title>Заголовок вашої сторінки</title>`}<br />
                                    &nbsp;&nbsp;{`<head>`}<br />
                                    &nbsp;&nbsp;{`<body>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<h1>Вітаю на моїй першій веб-сторінці!</h1>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<p>Це моя перша веб-сторінка. Я дуже захоплений вивченням веб-розробки!</p>`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<img src="my_image.jpg" alt="Моя картинка">`}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`<a href="https://u24.gov.ua/uk">Пітримай ЗСУ</a>`}<br />
                                    &nbsp;&nbsp;{`</body>`}<br />
                                    {`<html>`}<br />
                                </code>
                            </li>
                            <li className={style.li}>
                                <h3>Збережіть файл з розширенням '.html':</h3>
                                <p>Збережіть створений <b>HTML</b> код у файл з розширенням <i>.html</i>. Прийнято називати основну сторінку: index.html. Тепер ваша перша веб-сторінка готова!</p>
                            </li>
                            <li className={style.li}>
                                <h3>Перегляньте веб-сторінку у веб-браузері:</h3>
                                <p>Відкрийте створений файл <i>.html</i> у вашому веб-браузері. Ви повинні побачити вашу першу веб-сторінку з заголовком, текстовим контентом, зображенням та гіперпосиланнями.</p>
                                <img src={photo} alt='final_first_chapter' className={style.photo}/>
                            </li>
                        </ul>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default CreatePage;