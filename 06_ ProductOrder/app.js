const btnListele = document.getElementById("btnGetir")
const urunListesi = document.getElementById("urunListesi")
const btnAraToplam = document.getElementById("btnAraToplam")
const urunAdedi = document.getElementById("urunAdedi")
const urunTaksidi = document.getElementById("urunTaksidi")
const txtAraToplam = document.getElementById("txtAraToplam")
const txtKargo =document.getElementById("txtKargo")
const alisverisOzeti = document.getElementById("alisverisOzeti")

//* Taksitleri listeye aktarma
function taksit() {
    for(i=1; i <= 6; i++)
    {
     options =`<option value='${i}'> ${[i]} </option>`;
     urunTaksidi.innerHTML += options
    }
}


const parfumListesi=[
    {
        cinsiyet:"E",
        parfum:"Avon",
        adet:20,
        fiyat:10
    },
    {
        cinsiyet:"E",
        parfum:"Bergello",
        adet:18,
        fiyat:20
    },
    {
        cinsiyet:"E",
        parfum:"Adidas",
        adet:26,
        fiyat:30
    },
    {
        cinsiyet:"K",
        parfum:"Polo",
        adet:20,
        fiyat:40
    },
    {
        cinsiyet:"K",
        parfum:"Altınyıldız",
        adet:18,
        fiyat:50
    },
    {
        cinsiyet:"K",
        parfum:"Nike",
        adet:26,
        fiyat:60
    }
]



btnListele.addEventListener("click",()=>{
    //! Doğru ise çalışacak kısım
    try{ 
      //* radio ile secilen value alınır.
      const cinsiyet= document.querySelector("input[type='radio'][name=urunTipi]:checked").value;

      let filtreliUrunler = [];
      //* Listedeki tum parfumleri getirir.
      for(let liste of parfumListesi){
          if(cinsiyet==liste.cinsiyet){
              filtreliUrunler.push(liste.parfum)
            }
        }
        
      //* secilen cinsiyete göre listedeki parfumleri listeler.
      for (let i = 0; i < filtreliUrunler.length; i++) {
          options =`<option value='${i}'> ${filtreliUrunler[i]} </option>`
          urunListesi.innerHTML += options
      }

    }
    //! Hatalı ise çalışacak kısım
    catch{
          alisverisOzeti.innerText="Lütfen bilgileri Eksiksiz giriniz !!"
    }
})


urunListesi.addEventListener("click",()=>{
    //! Doğru ise çalışacak kısım
    try{
    //* Anlık olarak secilmis olan text'tin adetini alır ve adet listesinde gösterilir.
      const secilenParfum = (urunListesi.options[urunListesi.selectedIndex].text); 
      for(let liste of parfumListesi){
          if(secilenParfum==liste.parfum){
              for(i=1; i < liste.adet; i++)
              {
              options =`<option value='${i}'> ${[i]} </option>`
              urunAdedi.innerHTML += options
          }
        }
      }

    }
    //! Hatalı ise çalışacak kısım
    catch{
           alisverisOzeti.innerText="Lütfen bilgileri Eksiksiz giriniz !!"
    }
})

btnAraToplam.addEventListener("click",()=>{
    //! Doğru ise çalışacak kısım
    try{
      //* secilen parfum ve taksit degerleri alınır.
      const secilenParfum = (urunListesi.options[urunListesi.selectedIndex].text)
      const secilenTaksit = (urunTaksidi.options[urunTaksidi.selectedIndex].value)

      //* secilen parfumun listedeki fyatı alınır. urun fiyati,adeti,taksit,kargo ucreti hesaplanır.
      for(let liste of parfumListesi){
          if(secilenParfum==liste.parfum){
               let kargoUcreti = 15
               txtKargo.value = kargoUcreti + " TL"
               sonuc=(((liste.fiyat*urunAdedi.value) / secilenTaksit ) + kargoUcreti).toFixed(2)
               txtAraToplam.value=sonuc+ " TL"
               alisverisOzeti.innerHTML=(`Seçmiş olduğunuz parfüm ${secilenParfum} markalı <br>
                                         Ürün adedi : ${urunAdedi.value} adet <br>
                                         Bir ürün tutarı : ${liste.fiyat} TL  <br>
                                         Taksit : ${secilenTaksit} Taksit     <br>
                                         ${secilenTaksit} Taksitli tutar : ${sonuc} TL `                          
            )}        
       }

    }
    //! Hatalı ise çalışacak kısım
    catch{
          alisverisOzeti.innerText="Lütfen bilgileri Eksiksiz giriniz !!"
    }
 })
