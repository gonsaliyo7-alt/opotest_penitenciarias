$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open("$PWD\data\tests\RESPUESTAS COMENTADAS DEL 1º EXAMEN OFICIAL 14 DE NOVIEMBRE DE 2021 RESPUESTAS.docx")
$text = $doc.Content.Text
$doc.Close()
$word.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
$text | Out-File -FilePath "examen-2021-word.txt" -Encoding UTF8
Write-Host "Texto extraído exitosamente"
