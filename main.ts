

type InputLetter = 'A' | 'B' | 'Z' | 'L' | 'C' | 'D'| 'R';
function isValidInput(str: string): str is string {
  return /^[ABZLCDR]*$/.test(str);
}

const AlienCodeNumbers = {
                      A:1,
                      B:5,
                      Z:10,
                      L:50,
                      C:100,
                      D:500,
                      R:1000,  
                    }

function AlienNumber(input:string){
    input = input.replace(/\s+/g, '');
    if(!isValidInput(input)){
      console.log(`Invalid input (${input}): only characters A, B, Z, L, C, D, R are allowed.`)
      console.log("------------------")
      return
    }
    let sum = 0
    for (let i = 0; i < input.length; i++) {
      const letter = input[i] as InputLetter;
      const NextLetter = input[i+1] as InputLetter;
      const num = AlienCodeNumbers[letter]
      if (['AB', 'AZ','ZL','ZC','CD','CR'].includes(letter + NextLetter)) {
        sum+=AlienCodeNumbers[NextLetter]-AlienCodeNumbers[letter]
        i++; 
      }else{
        sum+=num
      }
    }
    console.log(`input: ${input}`)
    console.log(`output: ${sum}`)
    console.log('----------------')
      
}

AlienNumber("AAA") 
AlienNumber("LBAAA")
AlienNumber("RCRZCAB")

//invalid input
AlienNumber("AAAS") 