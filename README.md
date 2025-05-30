**Плагин для отслеживания системы контроля версий в VS Code**

**Выполнил:** Никита Данилов, гр. 353504

---

### Функциональная модель ПО
Функциональная модель программного средства представлена в виде диаграммы вариантов использования.

Программное средство поддерживает систему ролей: гость, авторизованный пользователь, администратор. Каждой роли соответствуют различные права на использование системы.

**Функциональность ролей:**
- **Гость** (неавторизованный пользователь): доступ к базовому просмотру состояния репозитория.
- **Авторизованный пользователь**: полный доступ к функционалу плагина, включая просмотр истории коммитов, сравнение версий, создание веток, управление изменениями.
- **Администратор**: управление пользователями, настройка параметров работы системы.

### Основные функции плагина

#### 1. Отслеживание изменений в файлах
- Автоматическое обнаружение изменений в файлах репозитория.
- Подсветка изменённых строк.
- Возможность быстрого просмотра внесённых правок.

#### 2. Просмотр истории коммитов
- Визуализация списка коммитов с указанием автора, даты и описания изменений.
- Возможность просмотра различий между версиями файлов.
- Фильтрация коммитов по дате, автору и ключевым словам.

#### 3. Работа с ветками
- Создание, удаление и переключение между ветками.
- Визуальный просмотр дерева ветвлений репозитория.
- Слияние веток с разрешением конфликтов.

#### 4. Управление изменениями
- Возможность отката к предыдущему состоянию файла.
- Сохранение текущих изменений без коммита (staging area).
- Возможность отмены последних коммитов.

#### 5. Настройка и уведомления
- Конфигурация параметров работы с репозиторием.
- Настройка автоматических уведомлений о коммитах и изменениях в коде.
- Поддержка пользовательских скриптов для обработки изменений.

![alt text](class-diagramm.png)

### Разработка модели сохранений данных
Для работы плагина необходима локальные сохранения, содержащая информацию о пользователях, репозиториях и изменениях. Основные сущности:

#### **Пользователь:**
- `id`
- `логин`
- `хешированный пароль`
- `email`
- `роль`
- `дата регистрации`

#### **Репозиторий:**
- `id`
- `имя`
- `путь`
- `id владельца`
- `дата последнего обновления`

#### **Коммит:**
- `id`
- `hash`
- `id репозитория`
- `автор`
- `дата создания`
- `сообщение`

#### **Файл:**
- `id`
- `путь`
- `id репозитория`
- `статус (изменён, удалён, добавлен)`

#### **Ветка:**
- `id`
- `имя`
- `id репозитория`
- `id последнего коммита`

### Функциональные требования

#### **1. Авторизация и аутентификация**
- Авторизация пользователя через логин и пароль.
- Восстановление пароля по email.
- Возможность смены пароля после входа.

#### **2. Отслеживание изменений в коде**
- Отображение изменений в реальном времени.
- Возможность отката изменений и отмены коммитов.
- Ведение истории изменений файлов.

#### **3. Просмотр и управление коммитами**
- Просмотр истории коммитов и их содержимого.
- Создание новых коммитов с описанием изменений.
- Возможность отката к конкретному коммиту.

#### **4. Работа с ветками**
- Создание и удаление веток.
- Переключение между ветками.
- Отображение графа веток.

#### **5. Поиск и фильтрация данных**
- Фильтрация истории коммитов по различным параметрам.
- Поиск изменений в файлах.
- Просмотр изменений, внесённых конкретным пользователем.
