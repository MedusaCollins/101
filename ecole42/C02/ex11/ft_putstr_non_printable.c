/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_putstr_non_printable.c                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: eceylan <eceylan@student.42istanbul.com    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/08/20 21:29:15 by eceylan           #+#    #+#             */
/*   Updated: 2024/08/20 21:29:16 by eceylan          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	print_hex(int np)
{
	char	*hex;
	char	buffer[2];

	hex = "0123456789abcdef";
	buffer[0] = hex[np / 16];
	buffer[1] = hex[np % 16];
	write(1, buffer, 2);
}

void	ft_putstr_non_printable(char *str)
{
	int	i;

	i = 0;
	while (str[i])
	{
		if ((str[i] >= 0 && str[i] <= 31) || str[i] >= 127)
		{
			write(1, "\\", 1);
			print_hex(str[i]);
		}
		else
		{
			write(1, &str[i], 1);
		}
		i += 1;
	}
}
