npm create vite@latest NameOfProject

# Invitation Wedding

Beautiful Wedding Invitation App

### Task

задача: нужно создать сайт визитка на свадьбу

1. секции разделить по компонентам
2. для компонентов использовать ComponentTitle.module.css
3. компоненты собрать в pages/Home.jsx

архитектура:
App.jsx -> Home.jsx -> components

### Общие принципы разработки

Каждая секция — отдельный React-компонент.
Для каждого компонента используется собственный CSS Module.
Стили не должны конфликтовать между компонентами.
Home.jsx отвечает только за композицию секций.
App.jsx отвечает за подключение страницы.

### Адаптивность предусматриваем сразу для мобильных устройств.

Можем реализовать полноценный сайт по этой архитектуре, постепенно создавая каждый компонент.

### стиль

Elegant — минимализм, бежевый, элегантная типографика.
Romantic — цветы, нежные оттенки, романтика.
Modern — современный дизайн, крупные фотографии, анимации.
Classic — традиционное свадебное оформление.

### Main Style

1. Какой вариант главного экрана предпочитаешь?
   - A — большое фото молодожёнов на весь экран, текст поверх.
   - B — слева имена и дата, справа большое фото.
   - C — минималистичный экран с именами, датой и небольшим фото.

### Что рекомендую сделать дальше

Header — фиксированное меню с плавной прокруткой к секциям.
Анимации — плавное появление секций при прокрутке.
RSVP Backend — реальное сохранение ответов гостей.
Музыка — фоновая мелодия с кнопкой включения/выключения.
Адаптивность — финальная проверка мобильной версии.

## React Compiler

## Expanding the ESLint configuration

## Structure of project

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   │
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   │
│   ├── Invitation/
│   │   ├── Invitation.jsx
│   │   └── Invitation.module.css
│   │
│   ├── Timer/
│   │   ├── Timer.jsx
│   │   └── Timer.module.css
│   │
│   ├── Location/
│   │   ├── Location.jsx
│   │   └── Location.module.css
│   │
│   ├── Program/
│   │   ├── Program.jsx
│   │   └── Program.module.css
│   │
│   ├── DressCode/
│   │   ├── DressCode.jsx
│   │   └── DressCode.module.css
│   │
│   ├── RSVP/
│   │   ├── RSVP.jsx
│   │   └── RSVP.module.css
│   │
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.module.css
│
├── pages/
│   ├── Home.jsx
│   └── Home.module.css
│
├── App.jsx
└── main.jsx
```
