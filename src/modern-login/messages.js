import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'login.page.title': {
    id: 'modern.login.page.title',
    defaultMessage: 'Вход в систему',
    description: 'Title for the modern login page',
  },
  'login.user.identity.label': {
    id: 'modern.login.user.identity.label',
    defaultMessage: 'Логин',
    description: 'Label for the username/email field',
  },
  'login.password.label': {
    id: 'modern.login.password.label',
    defaultMessage: 'Пароль',
    description: 'Label for the password field',
  },
  'sign.in.button': {
    id: 'modern.sign.in.button',
    defaultMessage: 'Войти',
    description: 'Text for the sign in button',
  },
  'forgot.password': {
    id: 'modern.forgot.password',
    defaultMessage: 'Забыли пароль?',
    description: 'Text for the forgot password link',
  },
  'institution.login.page.title': {
    id: 'modern.institution.login.page.title',
    defaultMessage: 'Вход в систему',
    description: 'Title for institution login page',
  },
  'email.validation.message': {
    id: 'modern.email.validation.message',
    defaultMessage: 'Пожалуйста, введите логин',
    description: 'Validation message for empty email/username',
  },
  'username.or.email.format.validation.less.chars.message': {
    id: 'modern.username.or.email.format.validation.less.chars.message',
    defaultMessage: 'Логин должен содержать минимум 2 символа',
    description: 'Validation message for username/email too short',
  },
  'password.validation.message': {
    id: 'modern.password.validation.message',
    defaultMessage: 'Пожалуйста, введите пароль',
    description: 'Validation message for empty password',
  },
});

export default messages;
