"use client"

import Link from "next/link";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
    return(
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/"><h3 className="text-center p-3 lg:p-[0.35rem] text-zinc-700  font-bold text-xl md:text-xl lg:text-2xl">Chat With Celestia</h3></Link>
                <div className="hidden items-center space-x-4 md:flex">
                <Link href="/" className={buttonVariants({ variant: "ghost", size: "sm" })}>
                        Home
                    </Link>
                    <Link href="/prompts" className={buttonVariants({ variant: "ghost", size: "sm" })}>
                        Prompts
                    </Link>
                </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar;