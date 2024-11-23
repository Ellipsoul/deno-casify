#include <stdio.h>
#include <ctype.h>

// Convert a string to uppercase
void toUpperCase(char *str) {
    for (int i = 0; str[i] != '\0'; i++) {
        str[i] = toupper(str[i]);
    }
}
