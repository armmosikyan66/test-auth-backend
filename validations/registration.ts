import {body} from 'express-validator';

const registerValidations = [
    body('email', 'Введите E-Mail')
        .isEmail()
        .withMessage('Неверный E-Mail')
        .isLength({
            min: 10,
            max: 40
        })
        .withMessage('Допустимое кол-во символов в почте от 10 до 40.'),
    body('username', 'Укажите логин')
        .isString()
        .isLength({
            min: 2,
            max: 40,
        })
        .withMessage('Допустимое кол-во символов в логине от 2 до 40.'),
    body('password', 'Укажите пароль')
        .isString()
        .isLength({
            min: 6,
        })
        .withMessage('Минимальная длина пароля 6 символов'),
];

export default registerValidations;