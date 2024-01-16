Kvk=(input("Verilerininz KVKK uygun bir şekilde kulanılacaktır kabul ediyormusunuz"))
if Kvk == ('evet'):
  print("verileriniz bizimle güvende")
  İsim=(input("adınız soyadınız"))
  Tel=int(input("tel no"))
  eposta=(input("email"))
  başvurmak=(input("basvurmak istdiğiniz iş kolu"))
  print("başvurmak icin önce soruları dogru bilmenız lazım" )
  for  i in range(3):
    soru1=(input("Selam dünya...bu koddaki profesyonel bakış açısıyla yanlışı bulunuz ,"))
    if soru1 =='Turkce karakter kulanımı':
      print('dogru')
      break
    else:
      print(f'hakkınız{2-i}') 
    if (i==2) :
      print('uzgunuz elendiniz')
  for i in range(3):
    soru2=(input("25*2")) 
    if soru2 == ('50'):
      print('dogru')
      break
    else:
      print(f'hakkınız{2-i}')
    if (i==2) :
      print('uzgunuz elendiniz')
  for soru3 in range(3):
    soru3=(input("14+14"))
    if soru3 ==('28'):
      print('dogru')
      break
    else:
      print(f'hakkınız{2-i}')
    if (i==2) :
      print('uzgunuz elendiniz')
else:
  print("Kabul etmeden devam edemezsiniz")