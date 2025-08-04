const tahminInput = document.querySelector('.number');
const buton = document.querySelector('#formtahmini');
const popup = document.querySelector('#popup');
const kapatBtn = document.querySelector('#kapatBtn');

let dogruSayi = Math.floor(Math.random() * 10) + 1;
let hak = 3;

buton.addEventListener('click', () => {
    const kullaniciTahmini = parseInt(tahminInput.value);

    if (isNaN(kullaniciTahmini)) {
        popup.innerHTML = `<span class="kapat" id="kapatBtn">&times;</span> Lütfen geçerli bir sayı gir!`;
    } else if (kullaniciTahmini === dogruSayi) {
        popup.innerHTML = `<span class="kapat" id="kapatBtn">&times;</span>  Tebrikler! Doğru tahmin ettiniz.`;
        buton.disabled = true;
    } else {
        hak--;

        if (hak > 0) {
            const ipucu = kullaniciTahmini < dogruSayi ? "Daha büyük bir sayı girin." : "Daha küçük bir sayı girin.";
            popup.innerHTML = `<span class="kapat" id="kapatBtn">&times;</span> ${ipucu} Kalan hakkınız: ${hak}`;
        } else {
            popup.innerHTML = `<span class="kapat" id="kapatBtn">&times;</span>  Hakkınız bitti. Doğru sayı: ${dogruSayi}`;
            buton.disabled = true;
        }
    }

    popup.style.display = 'block';
    tahminInput.value = ""; temizle
});


document.addEventListener('click', function (e) {
    if (e.target.id === 'kapatBtn') {
        popup.style.display = 'none';
    }
});

