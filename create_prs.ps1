git checkout main
git fetch origin
git reset --hard origin/main

# PR 3
git checkout -b pr-3-update
Add-Content -Path "src/utils/constants.ts" -Value "`nexport const MAX_FILE_SIZE = 5000000;"
git add .
git commit -m "feat: add max file size constant"
git push -u origin pr-3-update
gh pr create --title "Add max file size constant" --body "Updates constants." --base main --head pr-3-update
gh pr merge pr-3-update --merge --delete-branch
git checkout main
git fetch origin
git reset --hard origin/main

# PR 4
git checkout -b pr-4-update
Add-Content -Path "src/utils/constants.ts" -Value "`nexport const DEFAULT_TIMEOUT = 5000;"
git add .
git commit -m "feat: add default timeout constant"
git push -u origin pr-4-update
gh pr create --title "Add default timeout constant" --body "Updates constants." --base main --head pr-4-update
gh pr merge pr-4-update --merge --delete-branch
git checkout main
git fetch origin
git reset --hard origin/main

# PR 5
git checkout -b pr-5-update
Add-Content -Path "src/utils/constants.ts" -Value "`nexport const MAX_RETRY_COUNT = 3;"
git add .
git commit -m "feat: add max retry count constant"
git push -u origin pr-5-update
gh pr create --title "Add max retry count constant" --body "Updates constants." --base main --head pr-5-update
gh pr merge pr-5-update --merge --delete-branch
git checkout main
git fetch origin
git reset --hard origin/main

# PR 6
git checkout -b pr-6-update
Add-Content -Path "src/utils/constants.ts" -Value "`nexport const MIN_PASSWORD_LENGTH = 8;"
git add .
git commit -m "feat: add min password length constant"
git push -u origin pr-6-update
gh pr create --title "Add min password length constant" --body "Updates constants." --base main --head pr-6-update
gh pr merge pr-6-update --merge --delete-branch
git checkout main
git fetch origin
git reset --hard origin/main
