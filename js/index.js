var buttons = $('.buttons')
var current = []
var newScreen = document.createElement('div')
var currentScreen = $('#screen').append(newScreen)

for (i = 0; i < buttons.length; i++) {
    $(buttons).click(function(event) {
        var $target = $(event.target).html()

        if ($target === '=') {
            var operand1 = current.indexOf('+')
            var operand2 = current.lastIndexOf('-')
            var operand3 = current.indexOf('x')
            var operand4 = current.indexOf('÷')
            var num1 = []
            var num2 = []

            if (current[operand1] === '+') {
                for (i = 0; i < operand1; i++) {
                    num1 += (current[i])
                    console.log(num1)
                }
                for (j = operand1 + 1; j <= current.length; j++) {
                    num2 += (current[j])
                    console.log(num2)
                }
                var addition = (parseInt(num1) + parseInt(num2))
                console.log(addition)
                newScreen.innerHTML += ' = ' + addition
                current = []
                console.log(current)
            } else if (current[operand2] === '-') {
                for (i = 0; i < operand2; i++) {
                    num1 += (current[i])
                    console.log(num1)

                }
                for (j = operand2 + 1; j < current.length; j++) {
                    num2 += (current[j])
                    console.log(num2)
                }
                var subtract = (parseInt(num1) - parseInt(num2))
                console.log(subtract)
                newScreen.innerHTML += ' = ' + subtract
                current = []
                console.log(current)
            } else if (current[operand3] === 'x') {
                for (i = 0; i < operand3; i++) {
                    num1 += (current[i])
                    console.log(num1)
                }
                for (j = operand3 + 1; j < current.length; j++) {
                    num2 += (current[j])
                    console.log(num2)
                }
                var multiply = (parseInt(num1) * parseInt(num2))
                console.log(multiply)
                newScreen.innerHTML += ' = ' + multiply
                current = []
                console.log(current)
            } else {
                for (i = 0; i < operand4; i++) {
                    num1 += (current[i])
                    console.log(num1)
                }
                for (j = operand4 + 1; j < current.length; j++) {
                    num2 += (current[j])
                    console.log(num2)
                }
                var divide = (parseInt(num1) / parseInt(num2))
                console.log(divide)
                newScreen.innerHTML += ' = ' + divide
                current = []
                console.log(current)
            }
        } else if ($target === 'C') {
            current = []
            console.log(current)
            newScreen.innerHTML = ''
        } else if (parseInt($target) <= 9) {
            current.push($target)
            console.log(current)
            newScreen.innerHTML += $target
        } else if ($target === '+' || '-' || '/' || '*') {
            current.push($target)
            console.log(current)
            newScreen.innerHTML += $target

        }
    })
}
