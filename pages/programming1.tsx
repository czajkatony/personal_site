import Header from "../components/header"
import Link from "next/link"
import Head from "next/head"


export default function programming1(){
    return(
        <>
        <Head>
            <title>Programming 1 Projects</title>
        </Head>
        <Header/>
        <div className="flex justify-center">
         <h1 className='text-3xl justify-center text-myWhite '>Programming 1</h1>
        </div>
        <ul className="flex flex-col items-center py-10 space-y-3">
            <li className=" text-myWhite bg-myRose rounded-md p-2">
                <Link href = "https://github.com/czajkatony/Programming1-Projects/tree/main/Lab01">1) Hello World Lab</Link>
            </li>
            <li className=" text-myWhite bg-myRose rounded-md p-2">
                <Link href = "https://github.com/czajkatony/Programming1-Projects/tree/main/Lab02">2) Lab2</Link>
            </li>
            <li className=" text-myWhite bg-myRose rounded-md p-2">
                <Link href = "https://github.com/czajkatony/Programming1-Projects/tree/main/Lab03">3) Lab3</Link>
            </li>
            <li className=" text-myWhite bg-myRose rounded-md p-2">
                <Link href = "https://github.com/czajkatony/Programming1-Projects/tree/main/Lab04">4) Lab4</Link>
            </li>
            <li className=" text-myWhite bg-myRose rounded-md p-2">
                <Link href = "https://github.com/czajkatony/Programming1-Projects/tree/main/Lab05">5) Lab5</Link>
            </li>
            <li className=" text-myWhite bg-myRose rounded-md p-2">
                <Link href = "https://github.com/czajkatony/Programming1-Projects/tree/main/Lab06">6) Lab6</Link>
            </li>
            <li className=" text-myWhite bg-myRose rounded-md p-2">
                <Link href = "https://github.com/czajkatony/Programming1-Projects/tree/main/Lab07">7) Lab7</Link>
            </li>
            <li className=" text-myWhite bg-myRose rounded-md p-2">
                <Link href = "https://github.com/czajkatony/Programming1-Projects/tree/main/Lab08">8) Lab8</Link>
            </li>
            <li className=" text-myWhite bg-myRose rounded-md p-2">
                <Link href = "https://github.com/czajkatony/Programming1-Projects/tree/main/Lab09">9) Lab 9</Link>
            </li>
            <li className=" text-myWhite bg-myRose rounded-md p-2">
                <Link href = "https://github.com/czajkatony/Programming1-Projects/tree/main/Lab10">10) Lab 10</Link>
            </li>
        </ul>
        </>
    )
}