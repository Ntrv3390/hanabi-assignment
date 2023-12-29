import ChatWrapper from "@/components/ChatWrapper";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mt-5">
        <ChatWrapper />
      </MaxWidthWrapper>
    </>
  )
}
