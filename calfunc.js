<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <script src="calfunc.js"></script>
    <link rel="stylesheet" href="stylecal.css">
</head>

<body>
    <h1>Calculadora em HTML, CSS e JS</h1>
    <div class="caixa">
        <input type="number" placeholder="Digite um número:" id="num1">
        <input type="number" placeholder="Digite um número:" id="num2">
    </div>
    <br>
    <div class="botao">
        <button onclick="soma()">+</button>
        <button onclick="sub()">-</button>
        <button onclick="mult()">*</button>
        <button onclick="div()">/</button>
        <button onclick="limp()">Limpar</button>
    </div>
    <p id="resultado">Resultado:</p>
</body>

</html>