# my-test-task

NodeJS Backend
Тестовое техническое задание

Реализовать REST API используя NodeJS фреймворк Express.
API должен содержать один метод для экспорта таблицы с Google Drive.
 
Формат таблицы:


| Ключ          | Значение           | Параметр |
| ------------- |:------------------:| --------:|
| test_key_1    | Value 1            | write    |
| test_key_2    | Value 2            | read     |


Метод API должен отдать JSON в формате:
 
{
  “test_key_1”: { “value”: “Value 1”, “param”: “write” },
  “test_key_2”: { “value”: “Value 2”, “param”: “read” }
}
 
