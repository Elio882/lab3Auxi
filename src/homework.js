(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  for(let i=0 ; i < numbers.length ; i++){
    numbers[i]= numbers[i]*5;
  }
  console.log(numbers)
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];
  names.sort((a, b) => {
    if (b > a) return -1;
    if (a > b) return 1;
    return 0;
  });
  console.log(`Orden alfabetic:${names}`);

  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];
  let mySet = new Set();
  for(let i=0 ; i < data.length ; i++){
    mySet.add(data[i]);
  }
  console.log(mySet);

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";
  const frecuencia = {};
  for (let a of largeWord) {
    frecuencia[a] = (frecuencia[a] || 0) + 1;
  }
  console.log(frecuencia);

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */

})();
