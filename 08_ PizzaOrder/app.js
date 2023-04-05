let listePizza = document.getElementById("listePizza")
let btnListele = document.getElementById("btnListele")
let listeEkSecimler =document.getElementById("listeEkSecimler")
let txtIndirimKodu = document.getElementById("txtIndirimKodu")
let dogrulama = document.getElementById("dogrulama")
let btnKodEkle = document.getElementById("btnKodEkle")
let btnHesapla = document.getElementById("btnHesapla")
let sonuc = document.getElementById("sonuc")

//* Listede seçiilmiş olan malzemeleri buton ile listeye aktarma.
btnListele.addEventListener("click" ,()=>{
    let [...grupEkMalzeme] = document.getElementsByName("grupEkMalzeme")
    let secilmis =[]
    listeEkSecimler.innerHTML=""
    for(let degerler of grupEkMalzeme){    
        if (degerler.checked==true) {
            secilmis.push(degerler.value)
        }
    }
    for (let i = 0; i < secilmis.length; i++) { 
        options =`<option value='${i}'> ${secilmis[i]} </option>`
        listeEkSecimler.innerHTML += options
    }
})

//* Radio'lardan birinin true olmasına göre txtIndirimKodu olan yerin disabled olup olmaması
function toogle() {
    const indirimKod= document.querySelector("input[type='radio'][name=grupIndirim]:checked").value;
    indirimKod=="True"?txtIndirimKodu.disabled = false:txtIndirimKodu.disabled = true

}

//* Secilenleri fonksiyonlardaki tutar hesaplamalarına göre sonuc kısmına yazdırmak.

btnHesapla.addEventListener("click",()=>{
    try {
        let secilenPizza = (listePizza.options[listePizza.selectedIndex].text).toLowerCase();
        pizza = pizzaTutar(secilenPizza)
        ekMalzeme = malzemeTutar(listeEkSecimler)

        try {
            indirim = indirimTutar(txtIndirimKodu.value)
        } catch {
            indirim = 0
        }
        indirim != 0 ? indirimToplamTutar=(pizza+ekMalzeme)-(indirim*(pizza + ekMalzeme))+" TL":indirimToplamTutar="İndirim Kodu bulunamadı"
        
        toplamTutar =(pizza+ekMalzeme)
        
        sonuc.innerHTML=(`Pizza boyut tutarı : ${pizzaTutar(secilenPizza)} TL <br>
                         Pizza malzeme tutarı : ${malzemeTutar(listeEkSecimler)} TL <br>
                         Toplam Tutar : ${toplamTutar} TL <br>
                         İndirimli Tutar :${indirimToplamTutar}`)
        
    } catch {
        sonuc.innerHTML="Lütfen Eksiksiz doldurun!!!"
    }
})



function pizzaTutar(deger) {
    let fiyat
    deger=="Süper boy"? fiyat=50
    :deger=="büyük boy"? fiyat=40
    :deger=="orta boy"? fiyat=30
    :fiyat=60
    return fiyat
}

function malzemeTutar(deger) {
    let fiyat = deger.length*2
    return fiyat
}

function indirimTutar(deger) {
    let kodlar=['JS2023','HTML2023','CSS2023']
    if(kodlar.find(s=>s.toLowerCase()==deger||s.toUpperCase()==deger)){
      fiyat = 0.03
    }
    return fiyat
}