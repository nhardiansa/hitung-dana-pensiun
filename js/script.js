// input pengeluaran
const pengeluaranTahun = document.querySelector("#spending")
const pengeluaranBulan = document.querySelector(".spending-now .input input:nth-child(2)")

function getValue(e){
    let num = e.target.value;
    
    pengeluaranTahun.value = "Rp."+num
}

// pengeluaranTahun.addEventListener("change", getValue)
