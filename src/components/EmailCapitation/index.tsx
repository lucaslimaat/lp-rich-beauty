'use client'
import Balancer from 'react-wrap-balancer'
import { useState } from 'react'

export default function EmailCapitation() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    setError('')
    setSuccess('')

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setError('Por favor, insira um email válido.')
      return
    }

    setTimeout(() => {
      setSuccess('Email cadastrado com sucesso!')
      setEmail('')
    }, 1000)
  }

  return (
    <div className="bg-white-gray w-full h-auto flex flex-col items-center">
      <div className="bg-white-gray w-full h-auto flex flex-col items-center my-24 gap-20">
        <h1 className=' text-5xl font-normal text-center'>Pronto para Crescer Conosco?</h1>
        <Balancer>
          <p className=' text-3xl md:text-3xl font-light text-center'>Cadastre-se agora e comece a vender no melhor marketplace de beleza!</p>
        </Balancer>
        <form onSubmit={handleSubmit} className='w-full h-auto flex flex-wrap items-center justify-center gap-5'>
          <input 
            type='email' 
            className='block px-3 max-w-[283px] h-12 rounded-full border-2 border-green text-sm text-slate-500 font-semibold' 
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            type='submit'
            className='px-10 h-12 rounded-full border-2 border-green bg-green text-white font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-dark-green'
          >
            Cadastre-se
          </button>
          {error && <p className='text-red'>{error}</p>}
          {success && <p className='text-green'>{success}</p>}
        </form>
      </div>
    </div>
  )
}
