/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rush03.c                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: eceylan <eceylan@student.42istanbul.com.t  +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/08/18 13:44:21 by eceylan           #+#    #+#             */
/*   Updated: 2024/08/18 13:50:32 by eceylan          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_putchar(char leftSymbol, char middleSymbol, char rightSymbol,
			int repeat_rate);

void	rush(int x, int y)
{
	int	counter;

	counter = 0;
	if (x <= 0 || y <= 0)
	{
		write(1, "Hatalı giriş, pozitif tam sayı giriniz. \n", 56);
	}
	else
	{
		while (counter < y)
		{
			if (counter == 0)
				ft_putchar('A', 'B', 'C', x);
			else if (counter >= 1 && counter < y - 1)
				ft_putchar('B', ' ', 'B', x);
			else
				ft_putchar('A', 'B', 'C', x);
			counter++;
		}
	}
}
