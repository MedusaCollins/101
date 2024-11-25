set terminal pngcairo enhanced font "Helvetica,12"
set output "graph.png"

set title "Energy and Step"
set xlabel "Step"
set ylabel "Energy"

plot "step2.txt" using ($0+1):1 with linespoints title "Energy Curve"
