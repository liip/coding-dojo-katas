Roman numerals to arabic numerals converter
=

## Initial situation ##

This kata is about implementing a converter for roman numerals to arabic. A basic setup of the converter, as well as a few tests written in JsTestDriver are given.

The following table is to be used as a guideline to the converters behaviour:

| Roman | Arabic | Roman | Arabic | Roman | Arabic | Roman | Arabic | 
|--------|----|---------|----|----------|----|--------|------| 
| **I** | 1 | **XXXII** | 32 | **LXIII** | 63 | **XCIV** | 94 | 
| **II** | 2 | **XXXIII** | 33 | **LXIV** | 64 | **XCV** | 95 | 
| **III** | 3 | **XXXIV** | 34 | **LXV** | 65 | **XCVI** | 96 | 
| **IV** | 4 | **XXXV** | 35 | **LXVI** | 66 | **XCVII** | 97 | 
| **V** | 5 | **XXXVI** | 36 | **LXVII** | 67 | **XCVIII** | 98 | 
| **VI** | 6 | **XXXVII** | 37 | **LXVIII** | 68 | **XCIX** | 99 | 
| **VII** | 7 | **XXXVIII** | 38 | **LXIX** | 69 | **C** | 100 | 
| **VIII** | 8 | **XXXIX** | 39 | **LXX** | 70 |  |  | 
| **IX** | 9 | **XL** | 40 | **LXXI** | 71 | **DI** | 501 | 
| **X** | 10 | **XLI** | 41 | **LXXII** | 72 | **DL** | 550 | 
| **XI** | 11 | **XLII** | 42 | **LXXIII** | 73 | **DXXX** | 530 | 
| **XII** | 12 | **XLIII** | 43 | **LXXIV** | 74 | **DCCVII** | 707 | 
| **XIII** | 13 | **XLIV** | 44 | **LXXV** | 75 | **DCCCXC** | 890 | 
| **XIV** | 14 | **XLV** | 45 | **LXXVI** | 76 | **MD** | 15000 | 
| **XV** | 15 | **XLVI** | 46 | **LXXVII** | 77 | **MDCCC** | 1800 | 
| **XVI** | 16 | **XLVII** | 47 | **LXXVIII** | 78 | **CM** | 900 | 
| **XVII** | 17 | **XLVIII** | 48 | **LXXIX** | 79 | | | 
| **XVIII** | 18 | **XLIX** | 49 | **LXXX** | 80 | **M** | 1000 | 
| **XIX** | 19 | **L** | 50 | **LXXXI** | 81 | **D** | 500 | 
| **XX** | 20 | **LI** | 51 | **LXXXII** | 82 |  |  | 
| **XXI** | 21 | **LII** | 52 | **LXXXIII** | 83 |  |  | 
| **XXII** | 22 | **LIII** | 53 | **LXXXIV** | 84 |  |  | 
| **XXIII** | 23 | **LIV** | 54 | **LXXXV** | 85 |  |  | 
| **XXIV** | 24 | **LV** | 55 | **LXXXVI** | 86 |  |  | 
| **XXV** | 25 | **LVI** | 56 | **LXXXVII** | 87 |  |  | 
| **XXVI** | 26 | **LVII** | 57 | **LXXXVIII** | 88 |  |  | 
| **XXVII** | 27 | **LVIII** | 58 | **LXXXIX** | 89 |  |  | 
| **XXVIII** | 28 | **LIX** | 59 | **XC** | 90 |  |  | 
| **XXIX** | 29 | **LX** | 60 | **XCI** | 91 |  |  | 
| **XXX** | 30 | **LXI** | 61 | **XCII** | 92 |  |  | 
| **XXXI** | 31 | **LXII** | 62 | **XCIII** | 93 |  |  |