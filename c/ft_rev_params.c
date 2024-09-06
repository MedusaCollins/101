#include <unistd.h>

int	main(int argc, char *argv[])
{
	int	argsize;
	int	i;

	argsize = argc - 1;
	while (argsize > 0)
	{
		i = 0;
		while (argv[argsize][i] != '\0')
		{
			write(1, &argv[argsize][i], 1);
			i++;
		}
		write(1, "\n", 1);
		argsize--;
	}
	return (0);
}
