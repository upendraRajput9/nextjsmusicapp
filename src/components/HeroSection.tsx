import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full
     rounded-md flex flex-col item-center 
     justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <Spotlight
        className="top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center'>
        <h1
          className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
        >Master the art of music</h1>
        <p
          className='text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10'
        >
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <div className='mt-4'>
          <Link href='/courses'>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
             Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
