function hitung() {
		
    var x = document.getElementById('pilih_1').pilih1.value
    var y = document.getElementById('pilih_2').pilih2.value
    var input = parseInt(document.getElementById("input").value);

    if (x == "celcius" && y == "celcius" || x == "fahrenheit" && y == "fahrenheit" || x == "kelvin" && y == "kelvin" ) {

        var hasil = input ;

        document.getElementById("tampil").innerHTML = hasil;

    } else if (x == "celcius" && y == "fahrenheit") {
        //celcius ke fahrenheit
        hasil = ((9/5) * input) + 32;

        document.getElementById("tampil").innerHTML = hasil + " Fahrenheit ";
    }else if (x == "celcius" && y == "kelvin") {
        // celcius ke kelvin
        hasil = input * 273;

        document.getElementById("tampil").innerHTML = hasil + " Kelvin";
    }else if (x == "kelvin" && y == "fahrenheit") {
        //kelvin ke fahrenheit 
        hasil = parseInt((input -273.15) * (9/5) + 32)

        document.getElementById("tampil").innerHTML = hasil + " Fahrenheit ";
    }else if (x == "kelvin" && y == "celcius") {
        //kelvin ke celcius
        hasil = parseInt(input - 273.15)

        document.getElementById("tampil").innerHTML = hasil + " Celcius";
    }else if (x == "fahrenheit" && y == "celcius") {
        // fahrenheit ke celcius
        hasil = parseInt((input - 32) * 5/9)

        document.getElementById("tampil").innerHTML = hasil + " Celcius";
    }else if( x == "fahrenheit" && y == "kelvin"){
        // fahrenheit ke kelvin
        hasil = parseInt((input - 32) * (5/9) +273.15) 

        document.getElementById("tampil").innerHTML = hasil + " Kelvin";
    }else{
        alert("Harap Masukan Inputan")
    }

}
