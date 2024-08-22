/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_putchar.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: eceylan <eceylan@student.42istanbul.com.t  +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/08/18 13:49:16 by eceylan           #+#    #+#             */
/*   Updated: 2024/08/18 13:52:09 by eceylan          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	print_side_by_side(char symbol, int repeat_rate)
{
	int	counter;

	counter = 0;
	while (counter < repeat_rate)
	{
		write(1, &symbol, 1);
		counter++;
	}
}

void	ft_putchar(char left_symbol, char middle_symbol, char right_symbol,
		int repeat_rate)
{
	print_side_by_side(left_symbol, 1);
	print_side_by_side(middle_symbol, repeat_rate - 2);
	if (repeat_rate >= 2)
		print_side_by_side(right_symbol, 1);
	write(1, "\n", 1);
}
