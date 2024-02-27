num1 = input("İlk sayıyı giriniz: ")
num2 = input("İkinci sayıyı giriniz: ")


def ebob_bul(num1, num2):
    while num2:
        num1, num2 = num2, num1 % num2
    return num1


ebob = ebob_bul(num1, num2)
print(f"{num1} ve {num2} sayılarının EBOB'u: {ebob}")
