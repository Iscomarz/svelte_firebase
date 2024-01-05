<script>
// @ts-nocheck

import { auth } from './firebase'
import { createUserWithEmailAndPassword, 
signInWithEmailAndPassword } from "firebase/auth"

import { push } from 'svelte-spa-router'

let email = ""
let pass = ""

function registro(email, pass) {
    createUserWithEmailAndPassword(auth, email, pass)
    .then(function (){
        console.log("Se registro con exito")
    })
    .catch(function (error){
        console.log(error)
    })
    
};

function login(email, pass) {
    signInWithEmailAndPassword(auth, email, pass)
    .then(function (){
        push("/Crud")
        console.log("Se inicio sesion")
    })
    .catch(function (error){
        console.log(error)
    })
    
};
</script>


    <h1 style="font-size: 22px;">Registro</h1>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input bind:value={email} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input bind:value={pass} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
    <button on:click={registro(email, pass)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarse</button>
    <button on:click={login(email, pass)}  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar Sesion</button>

  