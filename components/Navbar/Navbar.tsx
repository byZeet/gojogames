'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image';
import person from '../../public/assets/icons/person.svg'
import gojogameslogo from '../../public/assets/img/gojogameslogo.svg'
import './Navbar.css'

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;
      setIsTop(scrolled === 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isTop ? 'navbar-top' : 'navbar-scrolled'}`}>
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
              <div className="w-8 rounded-full ring ring-text-neutral-100 mr-10 ">
                <Image src={person} alt=' ' width={20} height={20}/>
              </div>
            </div>
          </button>
        </Link>
        <UserButton/>
      </div>
    </div>
  );
}
