import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Partners() {
  return (
    <>
      <h1 className="text-5xl font-normal text-center mx-4 mb-8">
        <Balancer>Nossos Parceiros</Balancer>
      </h1>
      <div className="w-full h-auto p-2 bg-light-green flex flex-row items-center justify-evenly">
        <Link href="https://bioextratus.com.br" target="_blank" rel="noopener noreferrer">
          <Image
            src="/bioextratus-logo.png"
            alt="Logo da Bio Extratus"
            width={120}
            height={364}
          />
        </Link>
        <Link href="https://kwr.com.br" target="_blank" rel="noopener noreferrer">
          <Image
            src="/logo-key-west-rays.png"
            alt="Logo da Key West Rays"
            width={120}
            height={364}
          />
        </Link>
        <Link href="https://habitatconsultorios.com.br" target="_blank" rel="noopener noreferrer">
          <Image
            src="/habitat-consultórios-logo.png"
            alt="Logo da Habitat Consultórios"
            width={120}
            height={364}
          />
        </Link>
        <Link href="https://www.twooneonetwo.com.br" target="_blank" rel="noopener noreferrer">
          <Image
            src="/onetowone-loggo.png"
            alt="Logo da One to One"
            width={120}
            height={364}
          />
        </Link>
        <Link href="http://www.grupoescriba.com.br" target="_blank" rel="noopener noreferrer">
          <Image
            src="/logo-escriba.png"
            alt="Logo da Escriba"
            width={120}
            height={364}
          />
        </Link>
      </div>
    </>
  );
}
