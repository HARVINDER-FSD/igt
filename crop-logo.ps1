Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\harvinder Singh\OneDrive\Desktop\degital marketing website\public\companylogo.png"
$backupPath = "c:\Users\harvinder Singh\OneDrive\Desktop\degital marketing website\public\companylogo-original.png"
if (!(Test-Path $backupPath)) {
    Copy-Item $srcPath $backupPath
}

$bmp = [System.Drawing.Bitmap]::FromFile($backupPath)

$minX = $bmp.Width
$maxX = 0
$minY = $bmp.Height
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y += 4) {
    for ($x = 0; $x -lt $bmp.Width; $x += 4) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Found bounds: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"

$pad = 30
$cropX = [Math]::Max(0, $minX - $pad)
$cropY = [Math]::Max(0, $minY - $pad)
$cropW = [Math]::Min($bmp.Width - $cropX, ($maxX - $minX) + ($pad * 2))
$cropH = [Math]::Min($bmp.Height - $cropY, ($maxY - $minY) + ($pad * 2))

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$cropped = $bmp.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bmp.Dispose()

# Make white pixels transparent
for ($y = 0; $y -lt $cropped.Height; $y++) {
    for ($x = 0; $x -lt $cropped.Width; $x++) {
        $c = $cropped.GetPixel($x, $y)
        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } elseif ($c.R -gt 225 -and $c.G -gt 225 -and $c.B -gt 225) {
            $alpha = [int](255 - (($c.R + $c.G + $c.B) / 3 - 225) * 8.5)
            $alpha = [Math]::Max(0, [Math]::Min(255, $alpha))
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
        }
    }
}

$cropped.Save($srcPath, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
Write-Host "Done! Cropped transparent logo saved to $srcPath"
