import ImageCarousel from '@/components/imageCarousel'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Responsive carousel</title>
        <meta name="description" content="Responsive carousel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <ImageCarousel/>
       
    </>
  )
}
