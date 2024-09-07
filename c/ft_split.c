#include <stdlib.h>
#include <string.h>
#include <stdio.h>

int is_a_keyword(char c)
{
  if(c >= 33 && c <= 126)
    return 1;
  return 0;
}

int ft_findBlank(char *str)
{
  int i = 0;

  while(str[i] != '\0' && is_a_keyword(str[i]))
    i++;

  return i;
}

char **ft_split(char *str) {
    int i = 0;
    int j = 0;
    char **array = malloc((strlen(str) / 2 + 1) * sizeof(char*)); // assuming worst case where every other character is a space

    while (str[i] != '\0') {
        if (!is_a_keyword(str[i])) {
            i++;
            continue;
        }
        int wordLength = ft_findBlank(str + i);
        array[j] = malloc((wordLength + 1) * sizeof(char));
        strncpy(array[j], str + i, wordLength);
        array[j][wordLength] = '\0';
        j++;
        i += wordLength;
    }
    array[j] = NULL; // mark the end of the array
    return array;
}

int main(void)
{
  char str[] = "55555 88888888 999999999 000";
  char **array;
  
  array = ft_split(str);
  for(int i = 0; array[i] != NULL;i++)
    printf("%s\n", array[i]);

  // Malloc part;
  for(int i = 0;array[i] != NULL;i++)
    free(array[i]);
  free(array);
}
