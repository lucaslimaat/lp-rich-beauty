'use client'
import Balancer from 'react-wrap-balancer'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function EmailCapitation() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setError('Por favor, insira um email válido.')
      toast.error('Por favor, insira um email válido.')
      return
    }

    const templateParams = {
      email,
    }

    emailjs.send(
      'service_25yt4or',
      'template_n9dx1tq',
      templateParams,
      'ZNtoT5iD1Rm__8tOD',
    )

    setTimeout(() => {
      setEmail('')

      toast.success('Email cadastrado com sucesso!')
      toast.info('Aguarde, você está sendo redirecionado para o nosso formulário.')

      setTimeout(() => {
        router.push('/Contato')
      }, 3000)
    }, 1000)
  }

  return (
    <div
      id="parceiro"
      className="bg-white-gray w-full h-auto flex flex-col items-center"
    >
      <div className="bg-white-gray w-full h-auto flex flex-col items-center my-24 gap-20">
        <h1 className=" text-5xl font-normal text-center">
          Vamos Crescer Juntos?
        </h1>
        <p className=" text-3xl md:text-3xl font-light text-center">
          <Balancer>
            Cadastre-se agora e faça parte de nosso marketplace!
          </Balancer>
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full h-auto flex flex-wrap items-center justify-center gap-5"
        >
          <input
            type="email"
            className="block px-3 max-w-[283px] h-12 rounded-full border-2 border-gray-300 text-sm text-slate-500 font-semibold placeholder-gray-400 focus:border-green focus:outline-none transition-colors duration-300 ease-in-out"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="px-10 h-12 rounded-full border-2 border-green bg-green text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-dark-green"
          >
            Cadastre-se
          </button>
          {error && <p className="text-red">{error}</p>}
        </form>
      </div>

      {/* Container para os toasts */}
      <ToastContainer />
    </div>
  )
}
