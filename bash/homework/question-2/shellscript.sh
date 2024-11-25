#!/bin/bash

grep "E(" energy.log > step1.txt
cat step1.txt | cut -d ' ' -f 8 > step2.txt
gnuplot plotter.pl
