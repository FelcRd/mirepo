def primer_indice_duplicado(arr):
  
    vistos = set()  # Conjunto para almacenar los números ya vistos

    for i, num in enumerate(arr):
        if num in vistos:
            return i  # Retorna el índice del primer duplicado
        vistos.add(num)

    return -1  # Si no se encuentran duplicados


# Ejemplos
print(primer_indice_duplicado([2, 3, 1, 5, 3, 2]))  # Output: 4
print(primer_indice_duplicado([1, 2, 3, 4]))         # Output: -1
