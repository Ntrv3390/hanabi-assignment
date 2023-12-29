import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Responses } from "@/static/Responses";

const Page = () => {
    const keys = Object.keys(Responses)
    return (
        <MaxWidthWrapper className="mt-12">
            <div className="bg-white grainy min-h-[calc(100vh-14vh)] max-h-[calc(100vh-14vh)] shadow-lg overflow-y-auto rounded-lg">
                <h1 className="text-center font-bold text-xl md:text-2xl lg:text-4xl mt-10 text-zinc-800">Available Prompts</h1>
                <div className="container flex flex-wrap mt-20">
                    {
                        keys.map((key,index) => {
                            if(key === "not_found") return;
                            return(
                                <div key={index} className="rounded-lg flex-1 mt-3 shadow-lg p-3 mx-40 text-center w-fit bg-white font-semibold">{key}</div>
                            )
                        })
                    }
                </div>
                <div className="container m-auto rounded-lg shadow-lg p-3 mt-10 text-center w-fit bg-white font-semibold">The above keywords must be used to get an answer from AI.</div>
            </div>
        </MaxWidthWrapper>
    )
}

export default Page;