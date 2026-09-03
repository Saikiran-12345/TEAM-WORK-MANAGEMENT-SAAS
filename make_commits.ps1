# Commit 1
mkdir -Force "src/components/ui"
$badgeCode = "import React from 'react';`nexport const Badge: React.FC<{children: React.ReactNode}> = ({children}) => <span className='px-2 py-1 bg-primary text-white rounded-full text-xs font-bold'>{children}</span>;"
Set-Content -Path "src/components/ui/Badge.tsx" -Value $badgeCode -Encoding UTF8
git add "src/components/ui/Badge.tsx"
git commit -m "feat(ui): add reusable Badge component"

# Commit 2
mkdir -Force "src/hooks"
$debounceCode = "import { useState, useEffect } from 'react';`nexport function useDebounce<T>(value: T, delay: number): T {`n  const [debouncedValue, setDebouncedValue] = useState<T>(value);`n  useEffect(() => { const handler = setTimeout(() => setDebouncedValue(value), delay); return () => clearTimeout(handler); }, [value, delay]);`n  return debouncedValue;`n}"
Set-Content -Path "src/hooks/useDebounce.ts" -Value $debounceCode -Encoding UTF8
git add "src/hooks/useDebounce.ts"
git commit -m "feat(hooks): add useDebounce utility hook"

# Commit 3
$windowCode = "import { useState, useEffect } from 'react';`nexport function useWindowSize() {`n  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });`n  useEffect(() => { const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight }); window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize); }, []);`n  return size;`n}"
Set-Content -Path "src/hooks/useWindowSize.ts" -Value $windowCode -Encoding UTF8
git add "src/hooks/useWindowSize.ts"
git commit -m "feat(hooks): add useWindowSize hook for responsive layouts"

# Commit 4
$readmeAdd = "`n## Features`n- Task Management`n- Team Collaboration`n- Analytics Dashboard`n"
Add-Content -Path "README.md" -Value $readmeAdd -Encoding UTF8
git add "README.md"
git commit -m "docs: update README with features section"

# Commit 5
mkdir -Force "src/utils"
$constCode = "export const APP_VERSION = '1.0.0';`nexport const SUPPORT_EMAIL = 'support@teamflow.local';"
Set-Content -Path "src/utils/constants.ts" -Value $constCode -Encoding UTF8
git add "src/utils/constants.ts"
git commit -m "chore: add global application constants"

# Commit 6
$spinnerCode = "import React from 'react';`nexport const Spinner: React.FC = () => <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>;"
Set-Content -Path "src/components/ui/Spinner.tsx" -Value $spinnerCode -Encoding UTF8
git add "src/components/ui/Spinner.tsx"
git commit -m "feat(ui): add loading Spinner component"

# Commit 7
$strUtilsCode = "export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);`nexport const truncate = (s: string, len: number) => s.length > len ? s.substring(0, len) + '...' : s;"
Set-Content -Path "src/utils/stringUtils.ts" -Value $strUtilsCode -Encoding UTF8
git add "src/utils/stringUtils.ts"
git commit -m "feat(utils): add string formatting utilities"

# Commit 8
$pkgJson = Get-Content -Path "package.json" -Raw
$pkgJson = $pkgJson -replace '"version": "0.0.0"', '"version": "1.0.0"'
Set-Content -Path "package.json" -Value $pkgJson -Encoding UTF8
git add "package.json"
git commit -m "chore: bump application version to 1.0.0"
