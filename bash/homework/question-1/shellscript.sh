#!/bin/bash

awk '{ortalama = ($2 + $3 + $4) / 3; printf "%s\t%.f\n", $1, ortalama}' notes.txt > Result-step1.txt
tail -n +2 Result-step1.txt > Result-step2.txt

gnuplot plotter.pl
