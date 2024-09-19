'use client'
import { Envelope, MapPin, Phone } from 'phosphor-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Balancer from 'react-wrap-balancer'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Define o esquema de validação Yup
const schema = yup.object().shape({
  firstName: yup.string().required('Primeiro nome é obrigatório'),
  lastName: yup.string().required('Sobrenome é obrigatório'),
  email: yup
    .string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  phone: yup
    .string()
    .matches(
      /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
      'Telefone inválido. Use o formato (XX)XXXXX-XXXX ou (XX)XXXX-XXXX'
    )
    .required('Telefone é obrigatório'),
  message: yup.string().required('Mensagem é obrigatória'),
})

export default function SectionContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    }

    emailjs
      .send(
        'service_25yt4or',
        'template_z4guyqp',
        templateParams,
        'ZNtoT5iD1Rm__8tOD',
      )
      .then(() => {
        toast.success('Mensagem enviada com sucesso!')
        reset()
      })
      .catch(() => {
        toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
      })
  }

  return (
    <div className="bg-white w-full h-auto flex flex-col items-center justify-center gap-5 md:gap-12 py-14">
      <div className="bg-white w-full h-auto flex flex-col items-center gap-[10px]">
        <h1 className="text-5xl font-bold">Nos Contate</h1>
        <p className="text-lg md:text-lg font-medium text-center text-gray-300">
          <Balancer>
            Alguma pergunta ou observação? Basta nos escrever uma mensagem!
          </Balancer>
        </p>
      </div>
      <div className="w-full h-auto bg-white flex flex-wrap-reverse items-center justify-center p-5 gap-12">
        <div className="h-full w-full max-w-[491px] flex flex-col items-center justify-center md:items-start bg-green rounded-[10px] gap-9 md:gap-28 px-[40px] py-[40px]">
        <div className="flex flex-col gap-[6px]">
            <h1 className="text-white font-semibold text-xl md:text-[28px] text-center">
              Informações de Contato
            </h1>
            <p className="text-gray-200 text-[11px] md:text-lg font-normal text-center md:text-start">
              Diga algo para iniciar uma conversa!
            </p>
          </div>
          <div className="flex flex-col gap-[50px] items-center justify-center md:items-start md:justify-start">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <Phone size={24} color="#ffffff" weight="fill" />
              <p className="text-gray-200 text-xs md:text-base font-normal md:text-start">
                (31)99999-9999
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <Envelope size={24} color="#ffffff" weight="fill" />
              <p className="text-gray-200 text-xs md:text-base font-normal md:text-start">
                demo@gmail.com
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <MapPin size={24} color="#ffffff" weight="fill" />
              <p className="text-gray-200 text-xs md:text-base font-normal text-center md:text-start">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>
          <div className="w-auto flex flex-row justify-start items-start gap-4">
            <FaFacebook size={30} color="white" />
            <FaInstagram size={30} color="white" />
            <FaLinkedin size={30} color="white" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-14 ">
          <form className="w-full max-w-lg flex flex-col md:gap-11" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <div className="relative">
                  <input
                    className={`appearance-none border-b-2 w-full pt-4 px-1 text-gray-700 leading-tight focus:outline-none transition-colors duration-1000 peer ${
                      errors.firstName ? 'border-red' : 'border-gray-400'
                    } focus:${errors.firstName ? 'border-red' : 'border-black'}`}
                    {...register('firstName')}
                  />
                  <label className={`absolute left-1 top-0 text-xs font-medium mb-2 peer-focus:text-black ${errors.firstName ? 'text-red' : 'text-gray-300'}`}>
                    Primeiro Nome
                  </label>
                  <p className="text-red">{errors.firstName?.message}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <div className="relative">
                  <input
                    className={`appearance-none border-b-2 w-full pt-4 px-1 text-gray-700 leading-tight focus:outline-none transition-colors duration-1000 peer ${
                      errors.lastName ? 'border-red' : 'border-gray-400'
                    } focus:${errors.lastName ? 'border-red' : 'border-black'}`}
                    {...register('lastName')}
                  />
                  <label className={`absolute left-1 top-0 text-xs font-medium mb-2 peer-focus:text-black ${errors.lastName ? 'text-red' : 'text-gray-300'}`}>
                    Sobrenome
                  </label>
                  <p className="text-red">{errors.lastName?.message}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <div className="relative">
                  <input
                    className={`appearance-none border-b-2 w-full pt-4 px-1 text-gray-700 leading-tight focus:outline-none transition-colors duration-1000 peer ${
                      errors.email ? 'border-red' : 'border-gray-400'
                    } focus:${errors.email ? 'border-red' : 'border-black'}`}
                    {...register('email')}
                  />
                  <label className={`absolute left-1 top-0 text-xs font-medium mb-2 peer-focus:text-black ${errors.email ? 'text-red' : 'text-gray-300'}`}>
                    Email
                  </label>
                  <p className="text-red">{errors.email?.message}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <div className="relative">
                  <input
                    className={`appearance-none border-b-2 w-full pt-4 px-1 text-gray-700 leading-tight focus:outline-none transition-colors duration-1000 peer ${
                      errors.phone ? 'border-red' : 'border-gray-400'
                    } focus:${errors.phone ? 'border-red' : 'border-black'}`}
                    {...register('phone')}
                  />
                  <label className={`absolute left-1 top-0 text-xs font-medium mb-2 peer-focus:text-black ${errors.phone ? 'text-red' : 'text-gray-300'}`}>
                    Telefone
                  </label>
                  <p className="text-red">{errors.phone?.message}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <div className="relative">
                  <textarea
                    className={`appearance-none border-b-2 w-full pt-4 px-1 text-gray-700 leading-tight focus:outline-none transition-colors duration-1000 peer ${
                      errors.message ? 'border-red' : 'border-gray-400'
                    } focus:${errors.message ? 'border-red' : 'border-black'}`}
                    rows={4}
                    {...register('message')}
                  ></textarea>
                  <label className={`absolute left-1 top-0 text-xs font-medium mb-2 peer-focus:text-black ${errors.message ? 'text-red' : 'text-gray-300'}`}>
                    Mensagem
                  </label>
                  <p className="text-red">{errors.message?.message}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
