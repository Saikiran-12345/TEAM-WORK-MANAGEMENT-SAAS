git reset --soft HEAD~8
git reset HEAD

git add src/components/ui/Badge.tsx
git commit -m "Added a badge component"

git add src/hooks/useDebounce.ts
git commit -m "Added debounce hook"

git add src/hooks/useWindowSize.ts
git commit -m "Added window size tracker"

git add README.md
git commit -m "Updated project README"

git add src/utils/constants.ts
git commit -m "Added global constants"

git add src/components/ui/Spinner.tsx
git commit -m "Added loading spinner"

git add src/utils/stringUtils.ts
git commit -m "Added string helpers"

git add package.json
git commit -m "Updated package version"

git push --force origin main
