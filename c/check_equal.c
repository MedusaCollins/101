#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <stdlib.h>

void swapChar(char *text, int q1, int q2)
{
    char temp = text[q2];
    text[q2] = text[q1];
    text[q1] = temp;
}

bool solution(char *str1, char *str2)
{
    if (strlen(str1) != strlen(str2))
        return false;

    char *mutableStr1 = strdup(str1);
    if (!mutableStr1)
        return false;

    if (strcmp(mutableStr1, str2) == 0)
    {
        free(mutableStr1);
        return true;
    }

    int len = strlen(str2);
    for (int i = 0; i < len; i++)
    {
        for (int x = 0; x < len; x++)
        {
            swapChar(mutableStr1, x, i);
            if (strcmp(mutableStr1, str2) == 0)
            {
                free(mutableStr1);
                return true;
            }
            swapChar(mutableStr1, x, i);
        }
    }

    free(mutableStr1);
    return false;
}

int main(void)
{
    printf("%i\n", solution("knab", "kanb"));
    return 0;
}
