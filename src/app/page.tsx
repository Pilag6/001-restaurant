import Features from '@/components/Features'
import Offers from '@/components/Offers'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Slider />
      <Features />
      <Offers />
    </main>
    
  )
}
