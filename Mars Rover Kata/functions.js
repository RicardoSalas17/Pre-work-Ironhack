// Declarando rovers
let roverUno = {
    name: "Rover Uno",
    direction: "Sur",
    x: 0,
    y: 0,
}
let roverDos = {
    name: "Rover Dos",
    direction: "Sur",
    x: 10,
    y: 0,
}
let roverTres = {
    name: "Rover Tres",
    direction: "Norte",
    x: 0,
    y: 10,
}
let roverCuatro = {
    name: "Rover Cuatro",
    direction: "Norte",
    x: 10,
    y: 10,
}

//Status del juego
let status = {
    stat: "start"
}

//Declarando obstaculos
let obstaculoUno = {
    x: 5,
    y: 5,
}
let obstaculoDos = {
    x: 5,
    y: 5,
}
let obstaculoTres = {
    x: 5,
    y: 5,
}
let obstaculoCuatro = {
    x: 5,
    y: 5,
}

//Declarando turnos
let numTurno = {
    turno: 1,
}

//Tablero
var board = [
    ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
    ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
    ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
    ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
    ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
    ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
    ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
    ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
    ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
    ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
    ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
];

//Parametros de inicio
function inicio() {
    board[0][0] = `|rovr1|`;
    board[0][10] = `|rovr2|`;
    board[10][0] = `|rovr3|`;
    board[10][10] = `|rovr4|`;

    function evitarCoincidencias1() {

        obstaculoUno.x = Math.floor((Math.random() * (11 - 0)) + 0)
        obstaculoUno.y = Math.floor((Math.random() * (11 - 0)) + 0)

        if (obstaculoUno.x === 10 && obstaculoUno.y === 10) {
            evitarCoincidencias1()
        } else if (obstaculoUno.x === 10 && obstaculoUno.y === 0) {
            evitarCoincidencias1()
        } else if (obstaculoUno.x === 0 && obstaculoUno.y === 10) {
            evitarCoincidencias1()
        } else if (obstaculoUno.x === 0 && obstaculoUno.y === 0) {
            evitarCoincidencias1()
        } else {

        }
    }
    evitarCoincidencias1()

    function evitarCoincidencias2() {

        obstaculoDos.x = Math.floor((Math.random() * (11 - 0)) + 0)
        obstaculoDos.y = Math.floor((Math.random() * (11 - 0)) + 0)

        if (obstaculoDos.x === 10 && obstaculoDos.y === 10) {
            evitarCoincidencias2()
        } else if (obstaculoDos.x === 10 && obstaculoDos.y === 0) {
            evitarCoincidencias2()
        } else if (obstaculoDos.x === 0 && obstaculoDos.y === 10) {
            evitarCoincidencias2()
        } else if (obstaculoDos.x === 0 && obstaculoDos.y === 0) {
            evitarCoincidencias2()
        } else {

        }
    }
    evitarCoincidencias2()

    function evitarCoincidencias3() {

        obstaculoTres.x = Math.floor((Math.random() * (11 - 0)) + 0)
        obstaculoTres.y = Math.floor((Math.random() * (11 - 0)) + 0)

        if (obstaculoTres.x === 10 && obstaculoTres.y === 10) {
            evitarCoincidencias3()
        } else if (obstaculoTres.x === 10 && obstaculoTres.y === 0) {
            evitarCoincidencias3()
        } else if (obstaculoTres.x === 0 && obstaculoTres.y === 10) {
            evitarCoincidencias3()
        } else if (obstaculoTres.x === 0 && obstaculoTres.y === 0) {
            evitarCoincidencias3()
        } else {

        }
    }

    evitarCoincidencias3()


    function evitarCoincidencias4() {

        obstaculoCuatro.x = Math.floor((Math.random() * (11 - 0)) + 0)
        obstaculoCuatro.y = Math.floor((Math.random() * (11 - 0)) + 0)

        if (obstaculoCuatro.x === 10 && obstaculoCuatro.y === 10) {
            evitarCoincidencias4()
        } else if (obstaculoCuatro.x === 10 && obstaculoCuatro.y === 0) {
            evitarCoincidencias4()
        } else if (obstaculoCuatro.x === 0 && obstaculoCuatro.y === 10) {
            evitarCoincidencias4()
        } else if (obstaculoCuatro.x === 0 && obstaculoCuatro.y === 0) {
            evitarCoincidencias4()
        } else {

        }
    }
    evitarCoincidencias4()


    board[obstaculoUno.y][obstaculoUno.x] = `|obstc|`
    board[obstaculoDos.y][obstaculoDos.x] = `|obstc|`
    board[obstaculoTres.y][obstaculoTres.x] = `|obstc|`
    board[obstaculoCuatro.y][obstaculoCuatro.x] = `|obstc|`
}
inicio()
console.log(board.join('\n') + '\n\n')

//Instrucciones
function instrucciones() {
    if (status.stat === "start") {
        console.log(`Los rovers son robots que no se pueden despazar con facilidad, solo puede hacer un movimiento a la ves
y tienen que girar sobre su eje para poder tomar una direccion.
Estan investigando martey se encontraran con obstaculos en su camino, evita colicionar entre obstaculos y rovers.
Los rovers se moveran intercaladamente entre turnos.
para poder mover un rover usa las siguientes instucciones:

Instrucciones largas:Son instrucciones que el rover realizara una solo ves en cada turno.
roverTieneQue("girar a la izquierda"), Para girar su eje a la izquierda.
roverTieneQue("girar a la derecha"), Para girar su eje a la derecha.
roverTieneQue("avanzar"), Para avazar un cuadrante hacia la dirección que esta viendo.
roverTieneQue("retroceder"), Para retroceder un cuadrante hacia la dirección contraria que esta viendo.

Instrucciones cortas:Son instrucciones acumuladas que el rover realizara una tras otra cada que sea su turno.
comandoRover("i"), Para girar a la izquierda.
comandoRover("d"), Para girar su eje a la derecha.
comandoRover("a"), Para avazar un cuadrante hacia la dirección que esta viendo.
comandoRover("r"), Para retroceder un cuadrante hacia la dirección contraria que esta viendo.

Por ejemplo: comandoRover("adaria")
            El rover avanzara hacia delante, girara a su derecha, avanzara hacia delante,
            avanzara hacia atras, girara a su izquierda y avanzara hacia delante.

Si quieres explorar los lugares donde han estado los rovers puedes usar:
travelLogUno()
travelLogDos()
travelLogTres()
travelLogCuatro()

Si quieres volver a consultar las instrucciones mas tarde escribe: instrucciones()

                                Escribe start() para comenzar
  
   `)
    } else if (status.stat === "lose") {
        console.log(`Los rovers son robots que no se pueden despazar con facilidad, solo puede hacer un movimiento a la ves
   y tienen que girar sobre su eje para poder tomar una direccion.
   Estan investigando martey se encontraran con obstaculos en su camino, evita colicionar entre obstaculos y rovers.
   Los rovers se moveran intercaladamente entre turnos.
   para poder mover un rover usa las siguientes instucciones:
   
   Instrucciones largas:Son instrucciones que el rover realizara una solo ves en cada turno.
   roverTieneQue("girar a la izquierda"), Para girar su eje a la izquierda.
   roverTieneQue("girar a la derecha"), Para girar su eje a la derecha.
   roverTieneQue("avanzar"), Para avazar un cuadrante hacia la dirección que esta viendo.
   roverTieneQue("retroceder"), Para retroceder un cuadrante hacia la dirección contraria que esta viendo.
   
   Instrucciones cortas:Son instrucciones acumuladas que el rover realizara una tras otra cada que sea su turno.
   comandoRover("i"), Para girar a la izquierda.
   comandoRover("d"), Para girar su eje a la derecha.
   comandoRover("a"), Para avazar un cuadrante hacia la dirección que esta viendo.
   comandoRover("r"), Para retroceder un cuadrante hacia la dirección contraria que esta viendo.
   
   Por ejemplo: comandoRover("adaria")
               El rover avanzara hacia delante, girara a su derecha, avanzara hacia delante,
               avanzara hacia atras, girara a su izquierda y avanzara hacia delante.
   
   Si quieres explorar los lugares donde han estado los rovers puedes usar:
   travelLogUno()
   travelLogDos()
   travelLogTres()
   travelLogCuatro()

   Si quieres volver a consultar las instrucciones mas tarde escribe: instrucciones()
   
                                   Escribe reiniciar() para comenzar de nuevo
     
      `)
    } else if (status.stat === "play") {
        console.log(`Los rovers son robots que no se pueden despazar con facilidad, solo puede hacer un movimiento a la ves
   y tienen que girar sobre su eje para poder tomar una direccion.
   Estan investigando martey se encontraran con obstaculos en su camino, evita colicionar entre obstaculos y rovers.
   Los rovers se moveran intercaladamente entre turnos.
   para poder mover un rover usa las siguientes instucciones:
   
   Instrucciones largas:Son instrucciones que el rover realizara una solo ves en cada turno.
   roverTieneQue("girar a la izquierda"), Para girar su eje a la izquierda.
   roverTieneQue("girar a la derecha"), Para girar su eje a la derecha.
   roverTieneQue("avanzar"), Para avazar un cuadrante hacia la dirección que esta viendo.
   roverTieneQue("retroceder"), Para retroceder un cuadrante hacia la dirección contraria que esta viendo.
   
   Instrucciones cortas:Son instrucciones acumuladas que el rover realizara una tras otra cada que sea su turno.
   comandoRover("i"), Para girar a la izquierda.
   comandoRover("d"), Para girar su eje a la derecha.
   comandoRover("a"), Para avazar un cuadrante hacia la dirección que esta viendo.
   comandoRover("r"), Para retroceder un cuadrante hacia la dirección contraria que esta viendo.
   
   Por ejemplo: comandoRover("adaria")
               El rover avanzara hacia delante, girara a su derecha, avanzara hacia delante,
               avanzara hacia atras, girara a su izquierda y avanzara hacia delante.
   
   Si quieres explorar los lugares donde han estado los rovers puedes usar:
   travelLogUno()
   travelLogDos()
   travelLogTres()
   travelLogCuatro()

   Si quieres volver a consultar las instrucciones mas tarde escribe: instrucciones()
   
                                   Escribe una instruccion
     
      `)
    }
}
instrucciones()

//inicio
function start() {
    if (status.stat === "start") {
        status.stat = "play"
        dondeEsta()
        inicio()
        intercalar(numTurno)
    } else {}
}
//reiniciar
function reiniciar() {
    if (status.stat === "lose") {
        status.stat = "start"

        numTurno.turno = 1

        roverUno.direction = "Sur"
        roverUno.x = 0
        roverUno.y = 0

        roverDos.direction = "Sur"
        roverDos.x = 10
        roverDos.y = 0

        roverTres.direction = "Norte"
        roverTres.x = 0
        roverTres.y = 10

        roverCuatro.direction = "norte"
        roverCuatro.x = 10
        roverCuatro.y = 10


        obstaculoUno.x = Math.floor((Math.random() * (11 - 0)) + 0)
        obstaculoUno.y = Math.floor((Math.random() * (11 - 0)) + 0)

        obstaculoDos.x = Math.floor((Math.random() * (11 - 0)) + 0)
        obstaculoDos.y = Math.floor((Math.random() * (11 - 0)) + 0)

        obstaculoTres.x = Math.floor((Math.random() * (11 - 0)) + 0)
        obstaculoTres.y = Math.floor((Math.random() * (11 - 0)) + 0)

        obstaculoCuatro.x = Math.floor((Math.random() * (11 - 0)) + 0)
        obstaculoCuatro.y = Math.floor((Math.random() * (11 - 0)) + 0)


        board = [
            ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
            ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
            ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
            ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
            ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
            ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
            ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
            ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
            ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
            ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
            ['|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |', '|     |'],
        ];

        inicio()
        start()


    } else {}
}

//para metros para perder el juego
function lose() {

    //Perder con obctaculo 1
    if (board[roverUno.x] === board[obstaculoUno.x] && board[roverUno.y] === board[obstaculoUno.y]) {
        board[roverUno.y][roverUno.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO UNO! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverDos.x] === board[obstaculoUno.x] && board[roverDos.y] === board[obstaculoUno.y]) {
        board[roverDos.y][roverDos.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO UNO! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverTres.x] === board[obstaculoUno.x] && board[roverTres.y] === board[obstaculoUno.y]) {
        board[roverTres.y][roverTres.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO UNO! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverCuatro.x] === board[obstaculoUno.x] && board[roverCuatro.y] === board[obstaculoUno.y]) {
        board[roverCuatro.y][roverCuatro.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO UNO! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    }

    //Perder con obctaculo 2
    else if (board[roverUno.x] === board[obstaculoDos.x] && board[roverUno.y] === board[obstaculoDos.y]) {
        board[roverUno.y][roverUno.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO DOS! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverDos.x] === board[obstaculoDos.x] && board[roverDos.y] === board[obstaculoDos.y]) {
        board[roverDos.y][roverDos.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO DOS! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverTres.x] === board[obstaculoDos.x] && board[roverTres.y] === board[obstaculoDos.y]) {
        board[roverTres.y][roverTres.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO DOS! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverCuatro.x] === board[obstaculoDos.x] && board[roverCuatro.y] === board[obstaculoDos.y]) {
        board[roverCuatro.y][roverCuatro.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO DOS! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    }

    //Perder con obctaculo 3
    else if (board[roverUno.x] === board[obstaculoTres.x] && board[roverUno.y] === board[obstaculoTres.y]) {
        board[roverUno.y][roverUno.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO TRES! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverDos.x] === board[obstaculoTres.x] && board[roverDos.y] === board[obstaculoTres.y]) {
        board[roverDos.y][roverDos.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO TRES! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverTres.x] === board[obstaculoTres.x] && board[roverTres.y] === board[obstaculoTres.y]) {
        board[roverTres.y][roverTres.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO TRES! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverCuatro.x] === board[obstaculoTres.x] && board[roverCuatro.y] === board[obstaculoTres.y]) {
        board[roverCuatro.y][roverCuatro.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO TRES! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    }

    //Perder con obctaculo 4
    else if (board[roverUno.x] === board[obstaculoCuatro.x] && board[roverUno.y] === board[obstaculoCuatro.y]) {
        board[roverUno.y][roverUno.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO CUATRO! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverDos.x] === board[obstaculoCuatro.x] && board[roverDos.y] === board[obstaculoCuatro.y]) {
        board[roverDos.y][roverDos.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO CUATRO! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverTres.x] === board[obstaculoCuatro.x] && board[roverTres.y] === board[obstaculoCuatro.y]) {
        board[roverTres.y][roverTres.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO CUATRO! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else if (board[roverCuatro.x] === board[obstaculoCuatro.x] && board[roverCuatro.y] === board[obstaculoCuatro.y]) {
        board[roverCuatro.y][roverCuatro.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`OBSTACULO CUATRO! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    }

    //Choque entre rovers 1 2
    else if (board[roverUno.x] === board[roverDos.x] && board[roverUno.y] === board[roverDos.y]) {
        board[roverUno.y][roverUno.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`CHOCARON  LOS ROVER 1 2! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"

        //Choque entre rovers 1 3
    } else if (board[roverUno.x] === board[roverTres.x] && board[roverUno.y] === board[roverTres.y]) {
        board[roverUno.y][roverUno.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`CHOCARON LOS ROVER 1 3! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    }

    //Choque entre rovers 1 4
    else if (board[roverUno.x] === board[roverCuatro.x] && board[roverUno.y] === board[roverCuatro.y]) {
        board[roverUno.y][roverUno.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`CHOCARON LOS ROVER 1 4! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    }

    //Choque entre rovers 2 3
    else if (board[roverDos.x] === board[roverTres.x] && board[roverDos.y] === board[roverTres.y]) {
        board[roverDos.y][roverDos.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`CHOCARON LOS ROVER 2 3! LO SENTIMOS PERDISTE!!,  recarga la pagina para volver a inentar, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    }

    //Choque entre rovers 2 4
    else if (board[roverDos.x] === board[roverCuatro.x] && board[roverDos.y] === board[roverCuatro.y]) {
        board[roverDos.y][roverDos.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`CHOCARON LOS ROVER 2 4! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    }

    //Choque entre rovers 3 4
    else if (board[roverTres.x] === board[roverCuatro.x] && board[roverTres.y] === board[roverCuatro.y]) {
        board[roverTres.y][roverTres.x] = `| :(  |`;
        console.log(board.join('\n'));
        console.log(`CHOCARON LOS ROVER 3 4! LO SENTIMOS PERDISTE!!, escribe reiniciar() para volver a intentarlo`)
        status.stat = "lose"
    } else {}
}

//Desplasamiento en el tablero
function position() {
    //Desplasamiento en rover1
    board[0][0] = `|     |`;
    board[roverUno.y][roverUno.x] = `|rovr1|`;
    //Desplasamiento en rover2
    board[0][10] = `|     |`;
    board[roverDos.y][roverDos.x] = `|rovr2|`;
    //Desplasamiento en rover3
    board[10][0] = `|     |`;
    board[roverTres.y][roverTres.x] = `|rovr3|`;
    //Desplasamiento en rover4
    board[10][10] = `|     |`;
    board[roverCuatro.y][roverCuatro.x] = `|rovr4|`;
    //Nuevo tablero
    console.log(board.join('\n'));
    board[roverUno.y][roverUno.x] = `|     |`;
    board[roverDos.y][roverDos.x] = `|     |`;
    board[roverTres.y][roverTres.x] = `|     |`;
    board[roverCuatro.y][roverCuatro.x] = `|     |`;
}

//Historial de rover1
let arrayUno = {
    direction: [],
    x: [],
    y: []
}

function historialUno() {
    arrayUno.direction.push(roverUno.direction)
    arrayUno.x.push(roverUno.x)
    arrayUno.y.push(roverUno.y)
}

function travelLogUno() {
    console.log(`Rover 1 ha estado viendo hacia ${arrayUno.direction} y estado en X:${arrayUno.x} Y:${arrayUno.y}`)
}

//Historial rover2
let arrayDos = {
    direction: [],
    x: [],
    y: []
}

function historialDos() {
    arrayDos.direction.push(roverDos.direction)
    arrayDos.x.push(roverDos.x)
    arrayDos.y.push(roverDos.y)
}

function travelLogDos() {
    console.log(`Rover 2 ha estado viendo hacia ${arrayDos.direction} y estado en X:${arrayDos.x} Y:${arrayDos.y}`)
}

//Hisorial rover3
let arrayTres = {
    direction: [],
    x: [],
    y: []
}

function historialTres() {
    arrayTres.direction.push(roverTres.direction)
    arrayTres.x.push(roverTres.x)
    arrayTres.y.push(roverTres.y)
}

function travelLogTres() {
    console.log(`Rover 3 ha estado viendo hacia ${arrayTres.direction} y estado en X:${arrayTres.x} Y:${arrayTres.y}`)
}

//Historial rover4
let arrayCuatro = {
    direction: [],
    x: [],
    y: []
}

function historialCuatro() {
    arrayCuatro.direction.push(roverCuatro.direction)
    arrayCuatro.x.push(roverCuatro.x)
    arrayCuatro.y.push(roverCuatro.y)
}

function travelLogCuatro() {
    console.log(`Rover 4 ha estado viendo hacia ${arrayCuatro.direction} y estado en X:${arrayCuatro.x} Y:${arrayCuatro.y}`)
}

//Giro a la izquierda
function turnLeft(roverNum) {
    if (status.stat === "play") {
        console.log(`${roverNum.name} giro a la Izquierda`)

        if (roverNum.direction === "Norte") {
            roverNum.direction = "Oeste"

        } else if (roverNum.direction === "Este") {
            roverNum.direction = "Norte"

        } else if (roverNum.direction === "Sur") {
            roverNum.direction = "Este"
        } else if (roverNum.direction === "Oeste") {
            roverNum.direction = "Sur"
        }
    } else {}
    lose()
    historialUno(roverNum)
    historialDos(roverNum)
    historialTres(roverNum)
    historialCuatro(roverNum)




}

//Giro a la Derecha
function turnRight(roverNum) {
    if (status.stat === "play") {
        console.log(`${roverNum.name} giro a la derecha`);

        if (roverNum.direction === "Norte") {
            roverNum.direction = "Este"
        } else if (roverNum.direction === "Este") {
            roverNum.direction = "Sur"
        } else if (roverNum.direction === "Sur") {
            roverNum.direction = "Oeste"
        } else if (roverNum.direction === "Oeste") {
            roverNum.direction = "Norte"
        }
    } else {}
    lose()
    historialUno(roverNum)
    historialDos(roverNum)
    historialTres(roverNum)
    historialCuatro(roverNum)

}

//Avanzar hacia delante
function moveForward(roverNum) {
    if (status.stat === "play") {
        console.log(`${roverNum.name} se movio hacia delante`)
        if (roverNum.direction === "Norte") {
            roverNum.y--
        } else if (roverNum.direction === "Este") {
            roverNum.x++
        } else if (roverNum.direction === "Sur") {
            roverNum.y++
        } else if (roverNum.direction === "Oeste") {
            roverNum.x--
        }
    } else {}
    limite(roverNum)

    lose()
    historialUno(roverNum)
    historialDos(roverNum)
    historialTres(roverNum)
    historialCuatro(roverNum)

}

//Avanzar hacia atras
function moveBackward(roverNum) {
    if (status.stat === "play") {
        console.log(`${roverNum.name} se movio hacia atras`)
        if (roverNum.direction === "Norte") {
            roverNum.y++

        } else if (roverNum.direction === "Este") {
            roverNum.x--
        } else if (roverNum.direction === "Sur") {
            roverNum.y--
        } else if (roverNum.direction === "Oeste") {
            roverNum.x++
        }
    } else {}
    limite(roverNum)
    lose()
    historialUno(roverNum)
    historialDos(roverNum)
    historialTres(roverNum)
    historialCuatro(roverNum)

}

//Posicion Actual
function dondeEsta() {
    if (status.stat === "play") {
        position()
        console.log(`  Rover 1 esta viendo hacia el ${roverUno.direction} y se encuentra en x:${roverUno.x} & y:${roverUno.y}
  Rover 2 esta viendo hacia el ${roverDos.direction} y se encuentra en x:${roverDos.x} & y:${roverDos.y}
  Rover 3 esta viendo hacia el ${roverTres.direction} y se encuentra en x:${roverTres.x} & y:${roverTres.y}
  Rover 4 esta viendo hacia el ${roverCuatro.direction} y se encuentra en x:${roverCuatro.x} & y:${roverCuatro.y}
  Obstaculo 1 X:${obstaculoUno.x} Y:${obstaculoUno.y}
  Obstaculo 2 X:${obstaculoDos.x} Y:${obstaculoDos.y}
  Obstaculo 3 X:${obstaculoTres.x} Y:${obstaculoTres.y}
  Obstaculo 4 X:${obstaculoCuatro.x} Y:${obstaculoCuatro.y}`)
    } else if (status.stat === "lose") {}
}

//Declarar limites de movimientos
function limite(roverNum) {
    if (roverNum.x > 10) {
        roverNum.x = 10
        console.log("no puedes salir del tablero!")
    } else if (roverNum.x < 0) {
        roverNum.x = 0
        console.log("no puedes salir del tablero!")
    } else if (roverNum.y > 10) {
        roverNum.y = 10
        console.log("no puedes salir del tablero!")
    } else if (roverNum.y < 0) {
        roverNum.y = 0
        console.log("no puedes salir del tablero!")
    }
}

//Definicion de comandos enteros
function roverTieneQue(order) {
    if (status.stat === "play") {
        switch (order) {
            case "girar a la izquierda": //izquierda
                turnLeft(rover, order);
                break;
            case "girar a la derecha": // derecha
                turnRight(rover, order);
                break;
            case "avanzar": // forward
                moveForward(rover, order);
                break;
            case "retroceder": // backward
                moveBackward(rover, order);
                break;
            default:
                console.log("Error!")
                break;

        }
    } else {}

    dondeEsta()
    intercalar(numTurno)
}

//Definicion de comandos cortos
function comandoRover(orders) {

    for (let i = 0; i < orders.length && status.stat === "play"; i++) {
        let order = orders[i];
        switch (order) {
            case "i": // left
                turnLeft(rover, order);
                break;
            case "d": // right
                turnRight(rover, order);
                break;
            case "a": // forward
                moveForward(rover, order);
                break;
            case "r": // backward
                moveBackward(rover, order);
                break;

            default:
                console.log("Error!")
                break;

        }
    }


    dondeEsta()
    intercalar(numTurno)
}


//Intercalacion de turnos
function intercalar(numTurno) {
    if (status.stat === "play") {
        console.log(` Turno de rover ${numTurno.turno}`);
        if (numTurno.turno === 1) {
            numTurno.turno++
            rover = roverUno

        } else if (numTurno.turno === 2) {
            numTurno.turno = 3
            rover = roverDos

        } else if (numTurno.turno === 3) {
            numTurno.turno = 4
            rover = roverTres
        } else if (numTurno.turno === 4) {
            numTurno.turno = 1
            rover = roverCuatro
        }
    } else if (status.stat === "lose") {} else if (status.stat === "start") {}
}