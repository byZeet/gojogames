// Importa los estilos de DaisyUI
import 'daisyui/dist/full.css';

// Importa el componente SignIn de Clerk
import { SignIn as ClerkSignIn } from "@clerk/nextjs";
import gojogameslogo from '../../public/assets/img/gojogameslogo.svg';
import Image from 'next/image';
import Link from 'next/link';

export const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-customDark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image src={gojogameslogo} alt="logogojogames" width={200} height={200} />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"></h2>
        </div>
        <ClerkSignIn path="/sign-in" />
      </div>
    </div>
  );
};
