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

void	ft_putchar(char leftSymbol, char middleSymbol, char rightSymbol,
			int repeat_rate);

void	rush(int x, int y)
{
	int	repeat_rate;
	int	counter;

	x += '0';
	y += '0';
	counter = 0;
	repeat_rate = x - '0';
	while (counter < y - '0')
	{
		if (counter == 0)
			ft_putchar('A', 'B', 'C', repeat_rate);
		else if (counter >= 1 && counter < y - '0' - 1)
			ft_putchar('B', ' ', 'B', repeat_rate);
		else
			ft_putchar('A', 'B', 'C', repeat_rate);
		counter++;
	}
}
