$ErrorActionPreference = 'Stop'

Set-Location -LiteralPath $PSScriptRoot

Write-Host ''
Write-Host '=== AI Card Knowledge Base: Sync to mobile website ===' -ForegroundColor Cyan
Write-Host '1/5 Set GitHub Pages base path...'
$env:BASE_PATH = '/ai-card-knowledge-base/'

if (-not (Test-Path -LiteralPath 'node_modules')) {
  Write-Host '2/5 Installing dependencies...'
  npm.cmd install
  if ($LASTEXITCODE -ne 0) { throw 'npm install failed. Check Node.js or network.' }
} else {
  Write-Host '2/5 Dependencies already exist. Skip install.'
}

Write-Host '3/5 Building website...'
npm.cmd run build
if ($LASTEXITCODE -ne 0) { throw 'Build failed. Please fix the error first.' }

Write-Host '4/5 Updating GitHub Pages root files...'
$generatedItems = @(
  'assets',
  'guide',
  'images',
  '404.html',
  'hashmap.json',
  'index.html',
  'vp-icons.css',
  '.nojekyll'
)

foreach ($item in $generatedItems) {
  if (Test-Path -LiteralPath $item) {
    Remove-Item -LiteralPath $item -Recurse -Force
  }
}

Copy-Item -Path 'docs\.vitepress\dist\*' -Destination '.' -Recurse -Force
New-Item -ItemType File -Path '.nojekyll' -Force | Out-Null

Write-Host '5/5 Committing and pushing to GitHub...'
$changes = git status --porcelain
if (-not $changes) {
  Write-Host 'No new changes. Mobile website is already up to date.' -ForegroundColor Yellow
  Write-Host 'URL: https://poiu89u.github.io/ai-card-knowledge-base/' -ForegroundColor Green
  exit 0
}

git add -A
if ($LASTEXITCODE -ne 0) { throw 'git add failed.' }

$timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
git commit -m "Update mobile site $timestamp"
if ($LASTEXITCODE -ne 0) { throw 'git commit failed.' }

git push origin main
if ($LASTEXITCODE -ne 0) { throw 'git push failed. Check network or GitHub login.' }

Write-Host ''
Write-Host 'Sync complete. Open this URL on your phone:' -ForegroundColor Green
Write-Host 'https://poiu89u.github.io/ai-card-knowledge-base/' -ForegroundColor Green
Write-Host 'If you still see the old page, wait 1-3 minutes and refresh.'
