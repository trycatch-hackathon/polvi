"use client"
import Icon from "@/app/components/shared/icon"
import { useState } from "react"
import axios from 'axios'

export default function Example() {

  const [email, setEmail] = useState('');

  async function login() {
    var baseUrl = 'https://irregular-api.onrender.com/login'

    console.log(email)
    console.log(baseUrl)

    const result = await axios.get(baseUrl, { params: { "email": email } })

    console.log("Result:", result.data)
  }

    return (
      <>
        <div className="flex min-h-screen flex-1 bg-white">
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <span className="flex text-orange-600 text-2xl  items-center justify-center font-semibold	">
              <Icon name="logo_icon" className="flex text-orange-600 hover:text-orange-400 h-12 w-12"/>
              rregular
              </span>
                <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-orange-600">
                Iniciar sessão na sua conta
                </h2>
                <p className="mt-2 text-sm leading-6 text-orange-500">
                  Não é membro?{' '}
                  {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Start a 14 day free trial
                  </a> */}
                </p>
              </div>

              <div className="mt-10">
                <div>
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-orange-500">
                        Endereço de email
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-orange-500">
             Senha
                      </label>
                      <div className="mt-2">  
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
  
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-orange-500">
                  Lembre-se
                        </label>
                      </div>
  
                      <div className="text-sm leading-6">
                        <a href="#" className="font-semibold text-orange-600 hover:text-orange-500">
                      Esqueceu a senha?
                        </a>
                      </div>
                    </div>
  
                    <div>
                      <button
                        type="submit"
                        onClick={login}
                        className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      >
                       Acessar
                      </button>
                    </div>
                  </form>
                </div>
  
                <div className="mt-10">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm font-medium leading-6">
                      <span className="bg-white px-6 text-xl text-gray-900 font-semibold	">Continue com...</span>
                    </div>
                  </div>
  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="flex w-full rounded-lg border-orange-600 items-center justify-center gap-3 rounded-md  px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                    >
                     <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>

                    
                    </a>
  
                    <a
                      href="#"
                      className="flex w-full items-center justify-center gap-3 rounded-md  px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                    >
                      <svg className="w-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icloud"><path fill="#2196F3" d="M12.465 7A3.504 3.504 0 0 0 9 3a3.51 3.51 0 0 0-3.002 1.708A2.503 2.503 0 0 0 2.505 7.15 3.492 3.492 0 0 0 0 10.5C0 12.43 1.57 14 3.5 14h9c1.93 0 3.5-1.57 3.5-3.5A3.497 3.497 0 0 0 12.465 7z"></path></svg>
                
                      <span className="text-sm font-semibold leading-6"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Teresopolis-Prefeitura.jpg/1200px-Teresopolis-Prefeitura.jpg"
              alt=""
            />
          </div>
        </div>
      </>
    )
  }
  