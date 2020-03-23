/*
1.
ALGORITMA--> Menghitung resultan gaya pada sebuah mobil
-  Mencatat angka massa benda 
-  Mencatat angka percepatan benda
-  Resultan gaya sama dengan massa benda dikalikan percepatan benda

PSEUDOCODE -->
SET "mass of objects" to 600
SET "acceleration of objects" to 2
SET "resultant force" without any value

CALCULATE "mass of objects" times "acceleration of objects"
SET "resultant force" value with calculation result

DISPLAY "resultant force"

2.
ALGORITMA --> Cara mencari tahun kabisat
- Masukkan tahun yang mau dicek kabisat/bukan kabisat
- Jika tahun habis di bagi 4 dan tidak habis di bagi 100 maka tahun tersebut adalah kabisat
- Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400 maka tahun tersebut adalah kabisat
- Tahun lainnya adalah bukan kabisat

PSEUDOCODE -->

SET "year" to any value

INPUT "year"
IF "year" mod 4 EQUAL 0 AND "year" mod 100 NOT EQUAL 0 THEN
    DISPLAY "It's a leap year."
ELSEIF "year" mod 4 EQUAL 0 AND "year" mod 100 EQUAL 0 AND "year" mod 400 EQUAL 0 THEN
    DISPLAY "It's a leap year."
ELSE 
    DISPLAY "It's not a leap year."
ENDIF

3.
ALGORITMA -->
- Simpan jumlah baju sebagai "clothes number" dengan angka 0
- Memasukkan jumlah baju ke "clothes number" 
- Selama "clothes number" masih dibawah 20, Increment "clothes number" dengan 1, sampai memenuhi batas angka "clothes number".
- Kondisi terpenuhi lakukan "Turn On Wash Machine"

PSEUDOCODE -->

SET "clothes number" to 0

WHILE "clothes number" LESS THAN 21
  INCREMENT "clothes number"

IF "clothes number" EQUAL TO 20 THEN
    DO Turn On Wash Machine
ENDIF

ENDWHILE



4.
ALGORITMA -->
- Jumlah murid 40, guru akan mengecek kuku satu persatu
- Jika kuku murid panjang maka guru akan menghukum murid
- Lainnya guru akan memuji murid


PSEUDOCODE -->

SET "student count" to 0
SET "student nail" to any value

WHILE "student count" LESS THAN 41
    INCREMENT "student count"

    DETERMINE student nail
    IF nail is long THEN
        DO Punish the student
    ELSE
        DO Praise the student
ENDIF

ENDWHILE


*/
