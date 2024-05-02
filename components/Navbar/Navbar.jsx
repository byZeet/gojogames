import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image';
import person from '../../public/assets/icons/person.svg'
import gojogameslogo from '../../public/assets/img/gojogameslogo.svg'


export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
  <Link href="/">
      <button className="btn btn-ghost text-xl">
      <Image src={gojogameslogo} alt=' ' width={60} height={60}/>
      </button>
    </Link>
  </div>
  <div className="flex-none">

    <Link href="/sign-up">
      <button>
        <div className="avatar">
          <div className="w-8 rounded-full ring ring-neutral-content mr-10 ">
            <Image src={person} alt=' ' width={20} height={20}/>
          </div>
        </div>
      </button>
    </Link>

    <UserButton/>

  </div>
</div>
    )
}