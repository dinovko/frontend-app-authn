# 🔧 Исправление ошибки webpack с путями к изображениям

## ❌ Ошибка:
```
Error: Can't resolve '/assets/login_page_bg.png' in '/openedx/app/src/modern-base-container'
```

## ✅ Решение:

### 1. **Проблема с путями**
Webpack не может разрешить абсолютный путь `/assets/login_page_bg.png` в SCSS файле.

### 2. **Исправление пути**
В `src/modern-base-container/ModernBaseContainer.scss` измените:

```scss
/* ❌ Неправильно - абсолютный путь */
.modern-layout {
  background-image: url('/assets/login_page_bg.png');
}

/* ✅ Правильно - относительный путь */
.modern-layout {
  background-image: url('../../public/assets/login_page_bg.png');
}
```

### 3. **Объяснение путей**
- `../../` - подняться на 2 уровня вверх из `src/modern-base-container/`
- `public/` - папка public в корне проекта
- `assets/login_page_bg.png` - файл изображения

## 🚀 Альтернативные решения:

### Вариант 1: Относительный путь (рекомендуется)
```scss
.modern-layout {
  background-image: url('../../public/assets/login_page_bg.png');
}
```

### Вариант 2: Импорт изображения в JS
```jsx
import backgroundImage from '../../public/assets/login_page_bg.png';

// В стилях
backgroundImage: `url(${backgroundImage})`
```

### Вариант 3: CSS переменные
```scss
:root {
  --background-image: url('../../public/assets/login_page_bg.png');
}

.modern-layout {
  background-image: var(--background-image);
}
```

## 📁 Структура проекта:
```
frontend-app-authn/
├── public/
│   ├── assets/
│   │   └── login_page_bg.png  ← Файл должен быть здесь
│   └── index.html
├── src/
│   ├── modern-base-container/
│   │   └── ModernBaseContainer.scss  ← Файл с ошибкой
│   └── ...
└── ...
```

## 🔧 Проверка исправления:

### 1. **Обновите путь в SCSS**
```scss
background-image: url('../../public/assets/login_page_bg.png');
```

### 2. **Перезапустите проект**
```bash
npm start
```

### 3. **Проверьте консоль**
Нет ошибок webpack с путями к изображениям

## 🎯 Результат:

После исправления:
- ✅ **Нет ошибок webpack** с путями к изображениям
- ✅ **Фоновое изображение** корректно загружается
- ✅ **Проект запускается** без ошибок

## 🚀 Готово!

Ошибка webpack исправлена, фоновое изображение должно корректно загружаться! 🎉
