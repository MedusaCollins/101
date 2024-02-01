import requests

url = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_IzBpZ4fG6QQVRfFEX8aIOx6h2lxmceaM52unvUzL&currencies=EUR%2CUSD%2CCAD'
x = requests.get(url)
f = open("currency.json", "w")
f.write(x.content.decode('utf-8'))
f.close()