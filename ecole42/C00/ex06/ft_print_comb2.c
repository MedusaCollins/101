/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_print_comb2.c                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: eceylan <eceylan@student.42istanbul.com.t  +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/08/17 03:16:40 by eceylan           #+#    #+#             */
/*   Updated: 2024/08/17 03:46:05 by eceylan          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	write_number(char c)
{
	write(1, &c, 1);
}

void	ft_print_comb2(void)
{
	char	a;
	char	b;

	a = 0;
	b = 0;
	while (a <= 99)
	{
		b = a + 1;
		while (b <= 99)
		{
			write_number(a / 10 + '0');
			write_number(a % 10 + '0');
			write_number(' ');
			write_number(b / 10 + '0');
			write_number(b % 10 + '0');
			if (a != 98 || b != 99)
			{
				write(1, &", ", 2);
			}
			b++;
		}
		a++;
	}
}
