const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual a sua linguagem prefrerida?', (language) => {
    console.log(`A minha linguagem preferida é: ${language}`)
    readline.close()
})