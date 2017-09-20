$ScriptPath = Split-Path $MyInvocation.MyCommand.Path
$BuildScript = Join-Path $ScriptPath "buildext.ps1"
Write-Host "Running script: $BuildScript"
Invoke-Expression $BuildScript
Write-Host "Running Electron Packager"
npm run-script package