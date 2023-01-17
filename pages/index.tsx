import Head from "next/head"
import Header from "../components/header"

export default function Home() {
  return (
   <>
    <Head>
      <title>Tony Czajka</title>
    </Head>
    <Header />
    <div className="flex justify-center">
      <h1 className='text-3xl justify-center text-myWhite'>HELLO WORLD</h1>
    </div>
   </> 
  )
}
