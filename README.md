# Final_project

The main idea of the project is modern realization of school-times game DOTS.

The game has few modes for 2 players (on 1 device) and one battlefield separated on many squares. 

Main idea of the game is to circle around as more DOTS, of your opponent, as you can. 
Both players make their steps by rotation during the game. Everyone have a 30sec timelaplse, for making step.
To connect circled DOTS player need to place all DOTS in a range of one square.
The game will ends by fulfillment of chosen mode condition.
(Soon... it could be a description of some game modes)

FEATURES

1. Choosing game mode
2. Picking personal color for each player
3. New game button during the game
4. To be continued...


БАЗОВЫЙ ПЛАН ДЕЙСТВИЙ

1. Первоначально создать поле:
 1.1 Оптимальный размер игрового поля
 1.2 Разметка горизонтальных и вертикальных линий и рамок поля
 1.3 Проставка точек на пересечаниях
 1.4 Добавление цветов, изменение точек на пересечениях при наведении
 ...
 
2. Логика игры: 
 2.1 Запоминание нажатых точек ,одним из цветов по очереди: 
  2.2 Складирование отмеченых цветом или вохможно каким то маркером игрока, занесение каких то данных для дальнейших действий и объединений
  2.3 Disable выбраных точек от повторного выбора
 !2.4 Соединение самих точек по каким условиям происходит, "описание условия"
  2.5 Отрисовка соединения, зарисовка занятой территории
  2.6 Подсчёт захвачанных точек противника (надо подумать нужно ли)
  ...
 
3. Отрисовка скелета странцы:
 3.1 Отрисовка основных блоков header с областями для игроков(возможно достаточно крупно все и жирно, для запонения места)
 3.2 Сайдбар (если будет) минимальное оформление и работа выпадающего списка
 3.3 
