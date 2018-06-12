/**
 * less/mario.c
 *
 * Genesis Gabiola
 * genesisbritanicogabiola@gmail.com
 *
 * Write, in a file called mario.c in ~/workspace/pset1/mario/less/, a program that recreates this half-pyramid using hashes (#) for blocks.
 * (the half-pyramid’s height should be a non-negative integer no greater than 23)
 * If the user fails to provide a non-negative integer no greater than 23, you should re-prompt for the same again.
 * Then, generate (with the help of printf and one or more loops) the desired half-pyramid.
 * Take care to align the bottom-left corner of your half-pyramid with the left-hand edge of your terminal window.
 *
 */

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int height, i, j, k;

    // Get height of pyramid from user
    do
    {
        printf("Height: ");
        height = get_int();
    }
    while (height < 0 || height > 23);

    // Print lines
    for (i = 1; i <= height; i++)
    {
        // Print spaces
        for (j = 0; j < (height - i); j++)
        {
            printf(" ");
        }

        // print hashes
        for (k = 0; k < i + 1; k++)
        {
            printf("#");
        }

        printf("\n");
    }

    return 0;
}