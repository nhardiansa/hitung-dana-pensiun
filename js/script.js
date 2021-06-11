// input pengeluaran
const pengeluaranTahun = document.querySelector("#spending")
const pengeluaranBulan = document.querySelector(".spending-now .input input:nth-child(2)")

function getValue(e){
    let num = e.target.value
                .toLowerCase()
                .split(".")
                .filter((word) => !isNaN(word))
                .join("")
    

    // num = num.split(".")
    // num = num.
    
    console.log(parseInt(num))
    // console.log(num)
}

pengeluaranTahun.addEventListener("change", getValue)
