/**
 * credit.c
 *
 * Genesis Gabiola
 * genesisbritanicogabiola@gmail.com
 *
 * In credit.c in ~/workspace/pset1/credit/, write a program that prompts the user for a credit card number and then reports (via printf) whether it is a valid American Express, MasterCard, or Visa card number, per the definitions of each’s format herein.
 * So that we can automate some tests of your code, we ask that your program’s last line of output be AMEX\n or MASTERCARD\n or VISA\n or INVALID\n, nothing more, nothing less, and that main always return 0.
 * For simplicity, you may assume that the user’s input will be entirely numeric (i.e., devoid of hyphens, as might be printed on an actual card).
 * Do not assume that the user’s input will fit in an int! Best to use get_long_long from CS50’s library to get users' input. (Why?)
 */

#include <cs50.h>
#include <stdbool.h>
#include <stdio.h>

int main(void)
{
    long long   card_number, orig_number;
    string      card_type;
    int         digits = 0, temp = 0, current = 0,
                even_digits = 0, odd_digits = 0, total_sum = 0;
    bool        is_even = false;

    // Get Card number
    do
    {
        printf("Number: ");
        card_number = get_long_long();
    }
    while (card_number < 0);

    // Save card number for later check;
    orig_number = card_number;

    // Process Card Number
    while (card_number != 0)
    {
        // Get last digit of number
        current = (card_number % 10);

        // Increase number of digits in card number
        digits += 1;

        // Check if digit is even or odd and increase appropriate sum
        if (is_even == true)
        {
            // Multiply digit by 2
            temp = current * 2;

            // Add each digit of product
            while (temp != 0)
            {
                even_digits += temp % 10;
                temp /= 10;
            }

            // Tell program next digit is odd
            is_even = false;
        }
        else
        {
            odd_digits += current;

            // Tell program next digit is even
            is_even = true;
        }

        // Remove last digit and continue
        card_number /= 10;
    }

    // Get total sum
    total_sum = even_digits + odd_digits;

    // Check sum and card type by first digit
    if (total_sum % 10 == 0)
    {
        // Check AMEX
        if (digits == 15)
        {
            if ((orig_number / (long long) 10E12) == 34 ||
                (orig_number / (long long) 10E12) == 37)
            {
                card_type = "AMEX";
            }
            else
            {
                card_type = "INVALID";
            }
        }
        else if (digits == 16)
        {
            // Check Mastercard
            if ((orig_number / (long long) 10E13) >= 51 &&
                (orig_number / (long long) 10E13) <= 55)
            {
                card_type = "MASTERCARD";
            }
            // Check some Visas
            else if ((orig_number / (long long) 10E14) == 4)
            {
                card_type = "VISA";
            }
            else
            {
                card_type = "INVALID";
            }
        }
        // Check Visa
        else if (digits == 13)
        {
            if ((orig_number / (long long) 10E11) == 4)
            {
                card_type = "VISA";
            }
            else
            {
                card_type = "INVALID";
            }
        }
        else
        {
            card_type = "INVALID";
        }
    }
    else
    {
        card_type = "INVALID";
    }

    // Print result
    printf("%s\n", card_type);

    return 0;
}