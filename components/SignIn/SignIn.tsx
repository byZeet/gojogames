// Importa los estilos de DaisyUI en tu proyecto
import 'daisyui/dist/full.css';

// Importa el componente SignIn de Clerk
import { SignIn as ClerkSignIn } from "@clerk/nextjs";

// Crea tu componente personalizado de SignIn
export const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* Aquí puedes agregar tu logo o título */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"></h2>
        </div>
        <ClerkSignIn path="/sign-in" />
      </div>
    </div>
  );
};
