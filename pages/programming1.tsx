import Header from "../components/header"
import Link from "next/link"


export default function programming1(){
    return(
        <>
        <Header/>
        <div className="flex justify-center">
         <h1 className='text-3xl justify-center text-myWhite'>Programming 1</h1>
        </div>
        <ul className="flex justify-center py-10">
            <li className=" text-myWhite">
                <Link href = "https://github.com/czajkatony/Programming1-Projects/tree/main/Lab01">1) Hello World Lab</Link>
            </li>
        </ul>
        </>
    )
}