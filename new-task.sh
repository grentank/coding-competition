#!/bin/bash

# Получаем текущую ветку
CURRENT_BRANCH=$(git branch --show-current)

# Проверяем, что текущая ветка не main
if [ "$CURRENT_BRANCH" == "main" ]; then
  echo "Вы находитесь на ветке main. Выполнение скрипта запрещено."
  exit 1
fi

# Добавляем все изменения, коммитим и пушим в текущую ветку
git add -A
git commit -m "done"
git push origin $CURRENT_BRANCH

# Переключаемся на основную ветку, обновляем её и возвращаемся на текущую ветку
git checkout main
git pull origin main
git checkout $CURRENT_BRANCH
git merge main
