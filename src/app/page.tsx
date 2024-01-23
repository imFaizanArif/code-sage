import Primary from '@/components/Button/Primary'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-background h-screen'>
      <div className='absolute w-1/4 h-1/4 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl opacity-15 '></div>
      <div className='absolute w-1/2 h-1/2 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl opacity-5 rotate-180 bottom-40 right-64 '></div>
      <div className='absolute w-1/4 h-1/4 rounded-full bg-gradient-to-r from-stext to-etext blur-3xl rotate-180 bottom-0 right-0 opacity-15  '></div>
      <div className='relative z-50 container mx-auto w-[70%] pt-32 text-center'>

        <h1 className='text-primary text-5xl sm:text-5xl md:text-7xl lg:text-9xl'> Welcome to the
          <span className='bg-gradient-to-r from-stext to-etext text-transparent bg-clip-text text-5xl sm:text-5xl md:text-7xl lg:text-9xl'> Code Sage</span>
        </h1>

        <Link href={`/problems`} className='group'>
          <Primary title={`Let's Play with Problems`} />
        </Link>
      </div>
    </div>
  )
}
