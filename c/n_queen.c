#include <stdio.h>
#include <stdbool.h>
#define N 9

bool isSafe(int board[N][N], int row, int col)
{
  int x,y;

  for(y=0; y<N; y++)
    if(board[row][y])
      return false;
  
  for(x=row, y=col; x>=0 && y>=0; x--,y--)
    if(board[x][y])
      return false;

  for(x=row, y=col; y>=0 && x<N; x++,y--)
    if(board[x][y])
      return false;

  return true;
}

bool findSolution(int board[N][N], int col)
{
  if(col>=N)
    return true;

  for(int row=0; row<N; row++)
  {
    if(isSafe(board, row, col))
    {
      board[row][col] = 1;

      if(findSolution(board, col+1))
	return true;

      board[row][col] = 0;
    }
  }

  return false;
}

void drawBoard(int board[N][N])
{
  for(int x=0;x<N;x++)
  {
    for(int y=0;y<N;y++)
      printf("%s", board[x][y] ? "Q " : ". ");
    printf("\n");
  }
}

int main()
{
  int board[N][N] = {0};

  if(findSolution(board, 0) == false)
    printf("Solution does not exist.\n");
  else 
    drawBoard(board);

  return 0;
}
