const btnHesapla=document.getElementById("hesapla");     
const selectValue = document.getElementById('aracTipi');
const cikti = document.getElementById("sonuc");
const aracYili = document.getElementById("aracYili");

//* Yılları listeye aktarma
for (let i = 2000; i <= 2023; i++) {
        diziYil=[i];
        options =`<option value='${i}'> ${diziYil} </option>`;
        aracYili.innerHTML += options
}

//* Vergiyi hesapla butonuna tıklandığında gerçekleşecek olay.
btnHesapla.addEventListener("click",()=>{
    
    //! Doğru ise çalışacak kısım
    try{ 
        //* secilen arac tipini ceker ve butun harflerini kucultur.
        const secilenTip = (selectValue.options[selectValue.selectedIndex].value).toLowerCase();  

        //* secilen arac gucunu ceker ve ilk 4 haneli sayiyi alır.
        const aracGucu= document.querySelector("input[type='radio'][name=motorGucu]:checked").value;   
        secilenGuc = aracGucu.slice(0,4)
        
        //* secilen yili ceker.
        const secilenYil = aracYili.options[aracYili.selectedIndex].value;

        let toplamTutar =gucTutar(secilenGuc) + tipTutari(secilenTip) + yilTutar(secilenYil);

        cikti.innerHTML=`${secilenTip} seçtiniz.
              <br>   Araç fiyatlandırması  : ${tipTutari(secilenTip)}
              <br>   Motor fiyatlandırması : ${gucTutar(secilenGuc)}
              <br>   Araç model yılı fiyatlandırması : ${yilTutar(secilenYil)}
              <br>   Toplam fiyat          : ${toplamTutar} TL`
              
 
    }
    //! Hata varsa çalışacak kısım.
    catch(err){
        cikti.innerHTML=(`Lütfen eksiksiz giriniz 
                <br> Hata Mesajı : ${err.message}`) 
    }
    
})


//! Seçilen Arac tipine göre fiyatlandırma işlemini yapıp döner.
function tipTutari(deger) {
      deger=="otomobil" ? fiyat = 100 
    : deger=="motorsiklet" ? fiyat = 200
    : fiyat = 0;

    return fiyat
}

//! Seçilen Arac gücüne göre fiyatlandırma işlemini yapıp döner.
function gucTutar(deger) {
      deger<1000 ? fiyat = 10 
    : deger>=1000 && deger<1601 ? fiyat = 20 
    : deger>=1600 && deger<2001 ? fiyat = 30 
    : fiyat = 40;

    return fiyat
}

//! Seçilen yıla göre fiyatlandırma işlemini yapıp döner.
function yilTutar(deger) {
      deger < 2005 ? fiyat = 20
    : deger >= 2005 && deger < 2011 ? fiyat = 40
    : deger >= 2011 && deger < 2016 ? fiyat = 60
    : deger >= 20016 && deger < 2021 ? fiyat = 80
    : fiyat = 100

    return fiyat
}




