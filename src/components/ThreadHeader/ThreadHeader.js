import React from 'react';
import picSrc from '../../assets/threadPic.jpg';
import './ThreadHeader.css';

const ThreadHeader = () => {
    return (
        <div className="thread-header">
            <h3>Тред №150014</h3>
            <img src={picSrc} alt="thread"/>
            <h4>
                Google представила первый дудл на основе ИИ-технологий
            </h4>
            <p>
                Дудлы от Google известны большинству интернет-пользователей: эти интерактивные элементы, приуроченные к различным датам и событиям, регулярно сменяют друг друга на главной странице поискового гиганта. Сегодня компания решила вывести возможности привычных картинок на новый уровень благодаря возможностям искусственного интеллекта. 21 и 22 марта пользователи смогут опробовать профессию композитора с помощью оригинального дудла, в основе которого лежат ИИ-алгоритмы, «натренированные» на произведениях Баха.
            </p>
        </div>
    );
};

export default ThreadHeader;