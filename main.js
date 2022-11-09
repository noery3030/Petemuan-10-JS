function hitung() {
		
    var x = document.getElementById('pilih_1').pilih1.value
    var y = document.getElementById('pilih_2').pilih2.value
    var input = parseFloat(document.getElementById("input").value);

    if (x == "rupiah" && y == "rupiah" || x == "pound" && y == "pound" || x == "dollar" && y == "dollar") {

        var hasil = input ;

        document.getElementById("tampil").innerHTML = hasil;

    } else if (x == "rupiah" && y == "dollar") {

        hasil = input * 0.000071;

        document.getElementById("tampil").innerHTML = hasil;
    }else if (x == "rupiah" && y == "pound") {

        hasil = input * 0.000053;

        document.getElementById("tampil").innerHTML = hasil;
    }else if (x == "pound" && y == "rupiah") {
        hasil = input / 0.000053;

        document.getElementById("tampil").innerHTML = hasil;
    }else if (x == "pound" && y == "dollar") {
        hasil = input * 1.34;

        document.getElementById("tampil").innerHTML = hasil;
    }else if (x == "dollar" && y == "rupiah") {
        hasil = input / 0.000071;

        document.getElementById("tampil").innerHTML = hasil;
    }else if (x == "dollar" && y == "pound") {
        hasil = input / 1.34;

        document.getElementById("tampil").innerHTML = hasil;
    }else{
        alert("Harap Masukan Inputan")
    }

}
