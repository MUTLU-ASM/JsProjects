const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((sound)=>{
    //* Yeni butonlar oluştur.
    const btn = document.createElement('button')
    btn.classList.add('btn')

    //* her butona isimleri aktar
    btn.innerText = sound
    
    // Bir butona tıklandığında
    btn.addEventListener("click",()=>{
        stopSongs();
        //* seçilen buton sesini çalıştır.
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

//* birden fazla butona tıklandığında diğer sesi durdurmasını sağlar
function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound)
        song.pause()
    })
}