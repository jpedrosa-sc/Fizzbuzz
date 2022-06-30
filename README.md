# Nuestra primera Kata: FizzBuzz


## Contexto
FizzBuzz es un juego relacionado con el aprendizaje de la división en el que un grupo de estudiantes cuentan los números por turno, reemplazando cada número divisible por tres con la palabra “Fizz” y cada número divisible por cinco con la palabra “Buzz”. Si el número es divisible por ambos, entonces se dice “FizzBuzz”.

## Objetivo
Así que nuestro objetivo será escribir un programa que imprima los números del 1 al 100 de tal manera que:

si el número es divisible por 3 devuelve Fizz.
si el número es divisible por 5 devuelve Buzz.
si el número es divisible por 3 y 5 devuelve FizzBuzz

## Ejemplo
	1
	2
	Fizz
	4
	Buzz
	Fizz
	7
	8
	Fizz
	Buzz
	11
	Fizz
	13
	14
	FizzBuzz
	16
	17
	Fizz
	19
	Buzz
	... etc hasta 100


---
## Parte 2
---


## Nuevos requisitos

 - Un número será Fizz si contiene un 3 (13, 30, ...)   
 - Un número será Buzz si contiene un 5 (25, 52,...)
 - Un número será FizzBuzz si:
 	- tiene un 3 y un 5 en el
     (35, 53,...)

 - Todo esto manteniendo los requisitos anteriores.

# Instalación node

Vamos a crear nuestro proyecto en **node** con jest desde el principio
```bash
npm init -y #la opción -y me responde automáticamente las preguntas de configuracion

npm i -D jest

npx jest --init
```

Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes




