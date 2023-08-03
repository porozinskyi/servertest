import { Link } from 'react-router-dom';
import style from './HomeHTML.module.css';
import { Helmet } from 'react-helmet';

const HomeHTML = () => {
    return (
        <div className={style.block}>
            <Helmet>
                <title>HTML</title>
            </Helmet>
            <div className={style.wrapper}>
                <h1 className={style.title}>HTML</h1>
                <h2 className={style.subtitle}>Зміст</h2>
                <section className={style.section}>
                    <ul className={style.section__ul}>
                        <h3 className={style.label}>Основи:</h3>
                        <ul>
                            <li><Link to={'/html/hello'} className={style.link}>Знайомство з HTML, структура документа</Link></li>
                            <li><Link to={'/html/tags'} className={style.link}>Використання тегів</Link></li>
                            <li><Link to={'/html/attributes'} className={style.link}>Використання атрибутів</Link></li>
                            <li><Link to={'/html/create_page'} className={style.link}>Створення простої веб-сторінки</Link></li>
                        </ul>
                        <h3 className={style.label}>Текстові елементи:</h3>
                        <ul>
                            <li>Заголовки, абзаци, списки</li>
                            <li>Форматування тексту, гіперпосилання</li>
                        </ul>
                        <h3 className={style.label}>Форми та інтерактивні елементи:</h3>
                        <ul>
                            <li>Створення форм</li>
                            <li>Валідація форм</li>
                            <li>Таблиці для структурування інформації</li>
                        </ul>
                        <h3 className={style.label}>Мультимедіа елементи:</h3>
                        <ul>
                            <li>Вставлення зображень та відео</li>
                            <li>Аудіо та відео в HTML5</li>
                        </ul>
                        <h3 className={style.label}>Семантична розмітка:</h3>
                        <ul>
                            <li>Використання семантичних тегів для покращення доступності</li>
                            <li>Заголовки, статті, секції, коментарі, тощо.</li>
                        </ul>
                        <h3 className={style.label}>Подальше розширення:</h3>
                        <ul>
                            <li>Вбудовування інших ресурсів (шрифтів, іконок, тощо)</li>
                            <li>Мікродані та розмітка для пошукових систем</li>
                        </ul>
                        <h3 className={style.label}>SEO (Search Engine Optimization):</h3>
                        <ul>
                            <li>Оптимізація сторінок для пошукових систем</li>
                            <li>Використання мета-тегів та заголовків</li>
                        </ul>
                        <h3 className={style.label}>Валідність та сумісність:</h3>
                        <ul>
                            <li>Перевірка валідності HTML-коду</li>
                            <li>Забезпечення сумісності з різними браузерами</li>
                        </ul>
                        <h3 className={style.label}>Best Practices:</h3>
                        <ul>
                            <li>Структура проекту та організація файлів</li>
                            <li>Корисні інструменти для розробки та налагодження</li>
                        </ul>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default HomeHTML;