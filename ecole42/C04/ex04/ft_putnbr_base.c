/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_putnbr_base.c                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: eceylan <eceylan@student.42istanbul.com.t  +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/08/22 18:00:08 by eceylan           #+#    #+#             */
/*   Updated: 2024/08/22 18:00:10 by eceylan          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_putchar(char c)
{
	write(1, &c, 1);
}

int	isvalid(const char *base)
{
	int	i;
	int	j;

	i = 0;
	while (base[i] != '\0')
	{
		j = i + 1;
		while (base[j - 1] != '\0')
		{
			if (base[i] == base[j])
				return (0);
			j++;
		}
		if (base[i] == ' ' || base[i] == '+' || base[i] == '-')
			return (0);
		i++;
	}
	return (i >= 2);
}

void	ft_putnbr_base(int nbr, const char *base)
{
	int	baselen;

	baselen = 0;
	if (!isvalid(base))
		return ;
	while (base[baselen] != '\0')
		baselen++;
	if (nbr == -2147483648)
	{
		ft_putchar('-');
		ft_putnbr_base(-(nbr / baselen), base);
		ft_putchar(base[-(nbr % baselen)]);
		return ;
	}
	if (nbr < 0)
	{
		nbr *= -1;
		ft_putchar('-');
	}
	if (nbr >= baselen)
	{
		ft_putnbr_base(nbr / baselen, base);
	}
	ft_putchar(base[nbr % baselen]);
}
