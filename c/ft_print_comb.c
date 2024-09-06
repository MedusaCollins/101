#include <unistd.h>

void	ft_print_comb(void)
{
	char	i[5];

	i[0] = '0';
	i[3] = ',';
	i[4] = ' ';
	while (i[0] <= '7')
	{
		i[1] = i[0] + 1;
		while (i[1] <= '8')
		{
			i[2] = i[1] + 1;
			while (i[2] <= '9')
			{
				if (i[0] == '7' && i[1] == '8' && i[2] == '9')
					write(1, i, 3);
				else
					write(1, i, sizeof(i));
				i[2]++;
			}
			i[1]++;
		}
		i[0]++;
	}
}
