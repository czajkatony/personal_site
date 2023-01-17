import Link from "next/link"

export default function Header(){
    return(
        <div className="flex w-full px-10 bg-slate-500 justify-center bg-myWhite">
            <div className="p-10">
                <Link href='/'>Home</Link>
            </div>
            <div className="p-10">
                <Link href='/programming1'>Prog 1 Projects</Link>
            </div>
            <div className="p-10">
                <Link href='/programming2'>Prog 2 Projects</Link>
            </div>
        </div>
        
    )
}