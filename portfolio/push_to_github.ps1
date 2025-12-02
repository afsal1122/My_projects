# GitHub Push Script for Portfolio
# This script syncs your current folder to the 'portfolio' subfolder of your GitHub repo.

$RepoUrl = "https://github.com/afsal1122/My_projects"
$TempDir = "temp_git_sync"
$TargetSubfolder = "portfolio"

Write-Host "1. Cloning repository..." -ForegroundColor Cyan
if (Test-Path $TempDir) { Remove-Item $TempDir -Recurse -Force }
git clone $RepoUrl $TempDir

if (-not (Test-Path $TempDir)) {
    Write-Error "Failed to clone repository."
    exit 1
}

Write-Host "2. Preparing files..." -ForegroundColor Cyan
$DestPath = Join-Path $TempDir $TargetSubfolder
if (-not (Test-Path $DestPath)) { New-Item -ItemType Directory -Path $DestPath | Out-Null }

# Copy files using Robocopy for speed and exclusion handling
# We exclude node_modules, .git, dist, and the temp folder itself
$Excludes = @("node_modules", ".git", "dist", ".gemini", $TempDir, "push_to_github.ps1")
$Source = Get-Location

# Robocopy syntax: robocopy <Source> <Dest> /MIR /XD <DirsToExclude>
# /MIR mirrors the directory (adds new, updates modified, deletes removed)
$RoboArgs = @($Source, $DestPath, "/MIR", "/XD") + $Excludes

Write-Host "Syncing files..." -ForegroundColor Yellow
& robocopy $RoboArgs

# Robocopy exit codes 0-7 are success
if ($LASTEXITCODE -gt 7) {
    Write-Error "Robocopy failed with exit code $LASTEXITCODE"
    exit 1
}

Write-Host "3. Pushing to GitHub..." -ForegroundColor Cyan
Push-Location $TempDir
git add .
git commit -m "Update portfolio $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push
Pop-Location

Write-Host "4. Cleanup..." -ForegroundColor Cyan
Remove-Item $TempDir -Recurse -Force

Write-Host "Done! Changes pushed to GitHub." -ForegroundColor Green
