/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strlcat.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: eceylan <eceylan@student.42istanbul.com    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/08/21 06:20:35 by eceylan           #+#    #+#             */
/*   Updated: 2024/08/21 06:20:36 by eceylan          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>
#include <string.h>

void ft_strlcat(char *dest, const char *src, unsigned int size)
{
    unsigned int i;
    unsigned int j;

	i = 0;
	j = 0;

    while (dest[i] != '\0' && i < size)
        i++;

    if (i >= size)
        return;

    // `src`'yi `dest`'in sonuna ekle
    while (src[j] != '\0' && j+i+1 < size) {
        dest[i + j] = src[j];
        j++;
    }

    dest[i + j] = '\0';
}

int main() {
    char dest2[20] = "Hello ";
    const char *src2 = "World";
    char dest[20] = "Hello ";
    const char *src = "World";

    strlcat(dest, src, 9);
    ft_strlcat(dest2, src2, 9);

    printf("%s\n", dest);  // Beklenen Çıktı: Hello World
    printf("%s\n", dest2); // Beklenen Çıktı: Hello World

    return 0;
}
