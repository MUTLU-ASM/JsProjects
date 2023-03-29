function krediHesapla(){
   const cekilecekTutar = document.getElementById('txtKrediTutar').value;
   const selectValue = document.getElementById('slctVade');
   const vadeSayisi = selectValue.options[selectValue.selectedIndex].value;

   odenecekTutar = kontrol(vadeSayisi);
   aylikTaksit = odenecekTutar / vadeSayisi;
   document.querySelector("#sonuc").innerHTML=`Çekilecek tutar : ${cekilecekTutar} TL<br><br> 
                                               Aylık Vade : ${vadeSayisi} Ay <br><br> 
                                               Geri Ödenecek Tutar : ${aylikTaksit.toFixed(2)} TL`
}

function kontrol(e)
{
    const cekilecekTutar = document.getElementById('txtKrediTutar').value;

    switch(e){
        case "12" :  odenecekTutar = cekilecekTutar * 1.1; break;
        case "24" :  odenecekTutar = cekilecekTutar * 1.2; break;
        case "36" :  odenecekTutar = cekilecekTutar * 1.3; break;
        case "48" :  odenecekTutar = cekilecekTutar * 1.4; break;
        default : 0; break;
    }
    return odenecekTutar;
}