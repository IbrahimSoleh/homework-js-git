function generateRandomNumbers() {
    let randomNumbers = [];
    let angkaGenap = [];
    let angkaGanjil = [];
    for (let i = 0; i < 100; i++) {
      let randomNumber = Math.floor(Math.random() * 50) + 1;
     randomNumbers.push(randomNumber)
    }

    for (let i = 0; i < randomNumbers.length; i++) {
        if (randomNumbers[i] % 2 === 0) {
           angkaGenap.push(randomNumbers[i]);
        } else {
           angkaGanjil.push(randomNumbers[i]);
        }
    }

    console.log("Angka ganjil:", angkaGenap);
    console.log("Angka genap:", angkaGanjil);


      function compareStatistics(angkaGenap, angkaGanjil) {
        let totalGenap = 0;
        let genapMin = angkaGenap[0];
        let genapnMax = angkaGenap[0];
        let totalGanjil = 0;
        let ganjilMin = angkaGanjil[0];
        let ganjilMax = angkaGanjil[0];
      
        for (let j = 0; j < angkaGenap.length; j++) {
            totalGenap += angkaGenap[j];
            if (angkaGenap[j] < genapMin) {
                genapMin = angkaGenap[j];
            }
            if (angkaGenap[j] > genapnMax) {
                genapnMax = angkaGenap[j];
            }
        }
      
        for (let k = 0; k < angkaGanjil.length; k++) {
            totalGanjil += angkaGanjil[k];
            if (angkaGanjil[k] < ganjilMin) {
                ganjilMin = angkaGanjil[k];
            }
            if (angkaGanjil[k] > ganjilMax) {
                ganjilMax = angkaGanjil[k];
            }
        }
      
        let genapAvg = totalGenap / angkaGenap.length;
        let ganjilAvg = totalGanjil / angkaGanjil.length;
      
        console.log("Statistics angka genap:");
        console.log("Total:", totalGenap);
        console.log("Rata-rata:", genapAvg);
        console.log("Minimum:", genapMin);
        console.log("Maximum:", genapnMax);
      
        console.log("Statistics angka ganjil:");
        console.log("Total:", totalGanjil);
        console.log("Rata-rata:", ganjilAvg);
        console.log("Minimum:", ganjilMin);
        console.log("Maximum:", ganjilMax);
      
        console.log("Comparison:");
        console.log("Total genap", totalGenap > totalGanjil ? "lebih besar" : "kurang", "dari total ganjil.");
        console.log("Rata-rata genap", genapAvg > ganjilAvg ? "lebih besar" : "kurang", "dari rata-rata ganjil.");
        console.log("genap min", genapMin > ganjilMin ? "lebih besar" : "kurang", "dari jumlah min ganjil.");
        console.log("genap maks", genapnMax > ganjilMax ? "lebih besar" : "kurang", "dari ganjil maks.");
      }

      compareStatistics(angkaGenap, angkaGanjil);
  }
  
  generateRandomNumbers();
