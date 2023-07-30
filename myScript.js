//1- Belirlediğimiz sayı aralığında rasgele sayı üreten fonksiyonu yazınız

function rastgele(min,max){
    return Math.floor(Math.random() *(max-min+1))+1
}
let minNamber=1
let maxNamber=10
let rastGele= rastgele(minNamber,maxNamber)
console.log(rastGele)

//2- Elimizdeki people dizisiyle people2 yi oluşturalım.
// let people = ["Greg", "Mary", "Devon", "James"];
// console.log(people2)  -> ["Greg", "Elizabeth", "Mary", "Artie", "James"]

let people =["Greg","Mary","Devon","james"];


let people2 = [];

people2.push(people[0]);
people2.push("Elizabeth");
people2.push(people[1]); 
people2.push("Artie");
people2.push(people[3]);

console.log(people2);


// 3- 
// function dönüştürücü(text1) text1= mustafa_selman@gmail.com -> Mustafa Selman
// function dönüştürücü(text2) text1= mehmet_colak@hotmail.c om -> Mehmet Colak
// function dönüştürücü(text3) text1= yasin_sezer@yandex.com -> Yasir Sezer
// bu üç veriyi de yanda yazılan çıktılara dönüştüren fonksiyonu yazın. (üç ayrı fonksiyon değil tek fonksiyon istiyoruz.)


function ismiÇıkar(email) {
    
    const parts = email.split("@");
  
   
    let yeniİsim = [];
  
  
    for (let part of parts[0].split("_")) {
      yeniİsim.push(part.charAt(0).toUpperCase() + part.slice(1));
    }
  

    return yeniİsim.join(" ");
  }
  

  let text1 = "mustafa_selman@gmail.com";
  let text2 = "mehmet_colak@hotmail.com";
  let text3 = "yasin_sezer@yandex.com";
  
  
  console.log(ismiÇıkar(text1)); 
  console.log(ismiÇıkar(text2)); 
  console.log(ismiÇıkar(text3)); 


  // 4- let sayilar = [12,34,2,3,67,66,5,24]
  // function maxSecond(sayilar) -> elimizdeki dizinin en büyük ikinci değerini veren fonksiyon
  // function minSecond(sayilar) -> elimizdeki dizinin en küçük ikinci değerini veren fonksiyon
  // yukarıdaki fonksiyonları oluşturunuz.



let sayılar = [12, 34, 2, 3, 67, 66, 5, 24];

function ikinciEnYüksek(sayılar){
  sayılar.sort((a,b)=>a-b);
  sayılar.pop();
  return sayılar [sayılar.length-1];

}
function ikinciEnDüşük(sayılar){
  sayılar.sort((a,b)=>a-b);
  sayılar.shift();
  return sayılar [0];

}
console.log("ikinci en yüksek sayı:"+ikinciEnYüksek(sayılar))
console.log("ikinci en düşük sayı:"+ikinciEnDüşük(sayılar))
