Бит четности, или контрольный бит, — это бит, добавляемый к строке битов для обеспечения того, чтобы общее количество единичных битов в строке было четным или нечетным. Биты четности используются как самая простая форма кода для обнаружения ошибок.

У вас есть два параметра: первый — требуемая четность (всегда 'even' или 'odd'), второй — двоичное представление числа, которое вы хотите проверить.

Ваша задача — вернуть целое число (0 или 1), бит четности, который вам нужно добавить к двоичному представлению, чтобы четность результирующей строки была такой, как ожидается.

Пример:

Четность: 'even'
Двоичное: '0101010'
Результат: 1
Поскольку количество единичных битов нечетное (3), нужно добавить еще одну единицу, чтобы получить четное количество единичных битов.
