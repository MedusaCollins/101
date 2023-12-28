# Bir yazılım şirketine başvurmak isteyen yazılımcılardan başvuru formu alınacaktır. Bu başvuru formunda yazılımcıların algoritma bilgisini de ölçmek amaçlı,
# Bazı kriterler verilmesi gerekiyor. Bu anlamda bir başvuru formu oluşturun, oluşturacağınız başvuru formunda, sorular akıl oyunu barındırsın. Doğru cevabı vermeden,
# Diğer soruya geçemeyen başvuranlar 3 kere üst üste hata yaparlarsa hesabınız bloke olmuştur hatası verecek ve başvuru yapmaları engellenecek.

questions = [("5*3 = ?", "15"), ("10/2 = ?", "5"), ("15-3 = ?", "12")]
name, age, phone = input("İsim, yaş ve telefon numaranızı giriniz (virgülle ayırarak): ").split(",")
for question, answer in questions:
    for i in range(3):
        if input(f"{question}\n") == answer: 
            print("Doğru cevap!")
            break 
        if 2-i>0: print(f"Yanlış cevap girdiniz, {2-i} defa daha yanlış girerseniz başvurunuz geçersiz sayılacaktır!")
    else: 
        print("Çok defa yanlış girdiğinz için başvurunuz geçersizdir.")
        quit()
print(f"Sayın {name.capitalize()}({age}) başvuru formunuz alınmıştır, telefon numaranıza({phone}) en kısa zamanda dönüş yapılacaktır, lütfen beklemede kalınız.")