#include <cs50.h>
#include <stdio.h>

int main(void)
{
    char c = get_char("Answer: ");

    if (c == 'y' || c == 'Y')
    {
        printf("yes\n");
    }
    else if (c == 'n' || c == 'N')
    {
        printf("no\n");
    }
}