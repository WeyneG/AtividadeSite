function isPrime() {
    let num = prompt("Digite um número:");
    num = parseInt(num);
    let isPrime = true;
    if (num < 2) isPrime = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    document.getElementById("output").innerText = isPrime ? `${num} é primo` : `${num} não é primo`;
}

function fibonacci() {
    let n = prompt("Quantos termos da sequência de Fibonacci você quer?");
    n = parseInt(n);
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.getElementById("output").innerText = `Fibonacci: ${fib.slice(0, n).join(', ')}`;
}

function sumNumbers() {
    let numbers = prompt("Digite números separados por vírgula:");
    let array = numbers.split(',').map(Number);
    let sum = array.reduce((a, b) => a + b, 0);
    document.getElementById("output").innerText = `Soma: ${sum}`;
}

function gcd() {
    let num1 = prompt("Digite o primeiro número:");
    let num2 = prompt("Digite o segundo número:");
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    function calcGCD(a, b) {
        if (!b) return a;
        return calcGCD(b, a % b);
    }

    let result = calcGCD(num1, num2);
    document.getElementById("output").innerText = `MDC(${num1}, ${num2}) = ${result}`;
}

function quickSort() {
    let numbers = prompt("Digite números separados por vírgula para ordenar:");
    let array = numbers.split(',').map(Number);

    function quicksort(arr) {
        if (arr.length <= 1) return arr;
        let pivot = arr[arr.length - 1];
        let left = arr.filter((el) => el < pivot);
        let right = arr.filter((el) => el > pivot);
        return [...quicksort(left), pivot, ...quicksort(right)];
    }

    let sortedArray = quicksort(array);
    document.getElementById("output").innerText = `Array ordenado: ${sortedArray.join(', ')}`;
}

function acessarJava() {
    let html = `
        <h1>Funções Matemáticas em Java</h1>
        <div class="button-container">
            <button onclick="abrirJava('https://replit.com/@weynegabrielra/Ativ#src/main/java/NumPrimo.java')">Número Primo</button>
            <button onclick="abrirJava('https://replit.com/@weynegabrielra/Ativ#src/main/java/Fibonacci.java')">Fibonacci</button>
            <button onclick="abrirJava('https://replit.com/@weynegabrielra/Ativ#src/main/java/SumNumbers.java')">Soma de Números</button>
            <button onclick="abrirJava('https://replit.com/@weynegabrielra/Ativ#src/main/java/GCD.java')">Máximo Divisor Comum (MDC)</button>
            <button onclick="abrirJava('https://replit.com/@weynegabrielra/Ativ#src/main/java/Quicsort.java')">Quicksort</button>
            <button class="access-button" onclick="voltarParaJavaScript()">Voltar para JavaScript</button>
        </div>
        <div id="outputJava"></div>
    `;
    document.body.innerHTML = html;
}

function abrirJava(url) {
    window.location.href = url;
}

function voltarParaJavaScript() {
    document.body.innerHTML = `
        <h1>Funções Matemáticas em JavaScript</h1>
        <div class="button-container">
            <button onclick="isPrime()">Número Primo</button>
            <button onclick="fibonacci()">Fibonacci</button>
            <button onclick="sumNumbers()">Soma de Números</button>
            <button onclick="gcd()">Máximo Divisor Comum (MDC)</button>
            <button onclick="quickSort()">Quicksort</button>
            <button class="access-button" onclick="acessarJava()">Acessar Java</button>
        </div>
        <div id="output"></div>
    `;
}
