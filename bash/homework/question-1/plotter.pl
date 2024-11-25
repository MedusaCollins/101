set terminal pngcairo enhanced font "Helvetica,12"
set output "graph.png"

set title "Notların Ortalama Değerleri"
set xlabel "Öğrenciler"
set ylabel "Not Ortalaması"

plot "Result-step2.txt" using 2:xtic(1) with linespoints title "Ortalama Notlar"
