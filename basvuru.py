# Bir yazılım şirketine başvurmak isteyen yazılımcılardan başvuru formu alınacaktır. Bu başvuru formunda yazılımcıların algoritma bilgisini de ölçmek amaçlı,
# Bazı kriterler verilmesi gerekiyor. Bu anlamda bir başvuru formu oluşturun, oluşturacağınız başvuru formunda, sorular akıl oyunu barındırsın. Doğru cevabı vermeden,
# Diğer soruya geçemeyen başvuranlar 3 kere üst üste hata yaparlarsa hesabınız bloke olmuştur hatası verecek ve başvuru yapmaları engellenecek.

questNumber, quest1, quest2, quest3 = 1, "5*3 = ?", "10/2 = ?", "15-3 = ?"
answers = {quest1: "15", quest2: "5", quest3: "12"}
name, age, phone = input("İsim, yaş ve telefon numaranızı giriniz (virgülle ayırarak): ").split(",")

def quest(questNumber, quest):
    mistake = 0
    while mistake < 3:
        x = input(quest + "\n")
        if x == answers[quest]:
            print("Doğru cevap!")
            return questNumber + 1
        else:
            mistake += 1
            print("Yanlış cevap!") 
            if mistake == 3:
                print("Hesabınız bloke olmuştur."), quit()
            else:
                print(f"Kalan hakkınız: {3 - mistake}")

while questNumber <= 3:
    questNumber = quest(questNumber, eval(f"quest{questNumber}"))
print(f"Sayın {name.capitalize()}({age}) başvuru formunuz başarıyla alınmıştır, girmiş olduğunuz telefon numarasına({phone}) en kısa zamanda tarafımızca dönüş yapılacaktır, lütfen beklemede kalınız.")