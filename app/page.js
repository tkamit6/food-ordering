import Hero from '../components/layout/Hero';
import HomeMenu from '../components/layout/HomeMenu'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '../components/layout/SectionHeader'

export default function Home() {
  return (

    <>
      <div className=' max-w-7xl mx-auto'>
        <Hero />
        <HomeMenu />
        <section className='py-12'>
          <SectionHeader subHeader={'our story'} mainHeader={'About us'} />
          <div className='text-center'>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..</p>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
          </div>
        </section>
        <section className='py-12'>
          <SectionHeader subHeader={"dont't hesitate"} mainHeader={'Contat us'} />
          <div className='text-center'>
            <p className='font-extrabold text-black text-4xl'>+91 99999999</p>
          </div>
        </section>
      </div>
    </>
  )
}
