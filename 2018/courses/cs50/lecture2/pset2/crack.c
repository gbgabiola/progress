/**
 * crack.c
 *
 * Genesis Gabiola
 * genesisbritanicogabiola@gmail.com
 *
 * Design and implement a program, crack, that cracks passwords.
 * Implement your program in a file called crack.c in a directory called crack.
 * Your program should accept a single command-line argument: a hashed password.
 * If your program is executed without any command-line arguments or with more than one command-line argument, your program should print an error (of your choice) and exit immediately, with main returning 1 (thereby signifying an error).
 * Otherwise, your program must proceed to crack the given password, ideally as quickly as possible, ultimately printing the password in the clear followed by \n, nothing more, nothing less, with main returning 0.
 * Assume that each password has been hashed with C’s DES-based (not MD5-based) crypt function.
 * Assume that each password is no longer than five (5) characters. Gasp!
 * Assume that each password is composed entirely of alphabetical characters (uppercase and/or lowercase).
 */

#define _XOPEN_SOURCE
#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main(int argc, string argv[])
{
    void incrementChar(char string[], int index);

    // Check if correct # of arguments given
    if (argc != 2)
    {
        printf("Wrong number of arguments. Please try again.\n");

        return 1;
    }

    // Get Salt
    char salt[3];
    strncpy(salt, argv[1], 2);
    salt[2] = '\0';

    // Load dictionary of words
    FILE *dict = fopen("/usr/share/dict/words", "r");
    char word[255];

    // Check if file loads, otherwise return error
    if (dict == NULL)
    {
        printf("Error opening file");

        return 1;
    }

    // Loop through file to get strings
    while (fgets(word, 255, (FILE *)dict) != NULL)
    {
        // Check if word is 8 chars and if running crypt on word equals input
        if (strlen(word) <= 9 && strcmp(crypt(word, salt), argv[1]) == 0)
        {
            // Print password
            printf("%s", word);

            return 0;
        }
    }

    // Close file
    fclose(dict);

    // If not in the dictionary, brute force it
    // Initialize string to all null characters
    char test[9] = { '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0' };

    do
    {
        // Compares until next null character
        if (strcmp(crypt(test, salt), argv[1]) == 0)
        {
            // Print password
            printf("%s\n", test);

            return 0;
        }

        // Increment letter
        incrementChar(test, 0);
    }
    while (test[8] == '\0');

    printf("Password not found\n");

    return 0;
}

// Function to increment character and carry over if necessary
void incrementChar(char string[], int index)
{
    if (string[index] == '\0')
    {
        string[index] = '!';
    }
    else if (string[index] == '~')
    {
        string[index] = '!';
        incrementChar(string, index + 1);
    }
    else
    {
        string[index]++;
    }
}