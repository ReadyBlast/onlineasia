Вводим эти данные и выполняем по очереди все нужные команды для настройки сервера:

```bash
sudo apt update
```
```bash
sudo apt install git
```

Клонируем репозиторий с ботом на сервер:

```bash
git clone https://github.com/ReadyBlast/onlineasia.git
```
```bash
cd onlineasia
```

Создаем файл переменных окружения с токеном бота

```bash
echo BOT_API_KEY={Your bot api token} > .env
```

Далее устанавливаем nodejs и npm

```bash
sudo apt install nodejs
```
```bash
sudo apt install npm
```
Убедимся, что все установилось корректно:
```bash
node -v
```
```bash
npm -v
```
Версии этих пакетов по умолчанию ставятся старые, обновим их, используя пакет n:
```bash
sudo npm install -g n
```
```bash
sudo n stable
```

Устанавливаем все зависимости

```bash
npm i
```

Для запуска бота будем использовать менеджер процессов pm2

```bash
npm i pm2 -g
```

Запускаем бота (не забудьте перед этим убедиться, что остановили его локально, иначе возникнут конфликты)

```bash
pm2 start index.js
```

*можно добавить функцию автоматического перезапуска бота при рестарте. Перед использованием ознакомьтесь с документацией
```bash
pm2 save
```
