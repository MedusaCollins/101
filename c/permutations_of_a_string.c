#include <stdio.h>
#include <string.h>

void swapChar(char text[], int q1, int q2)
{
	char temp = text[q1];
	text[q1]= text[q2];
	text[q2]= temp;
}

void generateSolution(char text[], int x, int length)
{
	if(x == length)	
	{
		printf("%s\n", text);
		return;
	}
	
	for(int i=x; i<length; i++)
	{
		swapChar(text, i, x);
		generateSolution(text, x+1, length);
		swapChar(text, i, x);
	}
}

int main()
{
	char text[] = "abcdefg";
	int length = strlen(text);
	generateSolution(text, 0, length);
}
