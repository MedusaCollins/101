int	is_a_keyword(char word)
{
	if (word >= 'A' && word <= 'Z')
		return (1);
	else if (word >= 'a' && word <= 'z')
		return (1);
	else if (word >= '0' && word <= '9')
		return (1);
	else
		return (0);
}

int	is_uppercase(char word)
{
	if (word >= 'A' && word <= 'Z')
		return (1);
	return (0);
}

int	is_lowercase(char word)
{
	if (word >= 'a' && word <= 'z')
		return (1);
	return (0);
}

char	*ft_strcapitalize(char *str)
{
	int	i;

	i = 0;
	while (str[i] != '\0')
	{
		if (is_a_keyword(str[i]))
		{
			if (!is_a_keyword(str[i - 1]) && is_lowercase(str[i]))
			{
				str[i] -= 32;
			}
			else if (is_a_keyword(str[i - 1]) && is_uppercase(str[i]))
			{
				str[i] += 32;
			}
		}
		i++;
	}
	return (str);
}
