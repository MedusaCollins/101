#!/bin/sh

SRC="ft_putchar.c ft_swap.c ft_putstr.c ft_strlen.c ft_strcmp.c"
OBJ="ft_putchar.o ft_swap.o ft_putstr.o ft_strlen.o ft_strcmp.o"

gcc -Wall -Wextra -Werror -c $SRC
ar rc libft.a $OBJ
ranlib libft.a

rm -f $OBJ
