import Image from "next/image"

export default function Partners() {
  return(
    <div className=" w-full h-auto p-2 bg-light-green flex flex-row items-center justify-evenly">
      <Image
        src="/logo-cocacola.svg"
        alt="Descrição da imagem"
        width={120}
        height={364}
      />
      <Image
        src="/logo-heineken.svg"
        alt="Descrição da imagem"
        width={120}
        height={364}
      />
      <Image
        src="/logo-spotify.svg"
        alt="Descrição da imagem"
        width={120}
        height={364}
      />
      <Image
        src="/logo-instagram.svg"
        alt="Descrição da imagem"
        width={120}
        height={364}
      />
    </div>
  )
}