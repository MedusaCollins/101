int ft_iterative_power(int nb, int power)
{
  int ognb;
  ognb = nb;

  if(power == 0)
    return 1;
  if(power < 0)
    return 0;

  while(power > 1)
  {
    nb*= ognb;
    power--;
  }

  return nb;
}
