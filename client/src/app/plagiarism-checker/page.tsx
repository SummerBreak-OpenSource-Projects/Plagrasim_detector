import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import { HiOutlineDesktopComputer } from "react-icons/hi";

export default function PlagiarismChecker() {
  return (
    <div className="w-full h-fit p-8 flex flex-col gap-10 items-center">
      <h1 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FF3CB5] to-[#4D4B98]">
        Plagiarism Checker
      </h1>
      <div className="flex justify-center w-full gap-8">
        <Button>Web Search</Button>
        <Button variant="outline">Text Comparison</Button>
        <Button variant="outline">AI Detection</Button>
      </div>
      <div className="w-full grid grid-cols-2 gap-6">
        {/* Upload File Card */}
        <Card>
          <header className="flex justify-between items-center py-2 px-4 border-b border-[#262C3D]">
            <h1 className="text-xl">Upload File</h1>
            <button className="text-[#712E9A] border border-[#712E9A] rounded-md p-1.5 hover:bg-[#712E9A] hover:text-white">
              <RiDeleteBin6Line size={25} />
            </button>
          </header>
          <div className="text-[#712E9A] p-4 flex flex-col items-center gap-4">
            <p>Insert text to find Proofread file</p>
            <div className="flex flex-col gap-4 border border-[#712E9A] border-dashed w-full px-4 py-8 rounded-xl">
              <div className="flex flex-col items-center gap-2">
                <LuDownload size={30} strokeWidth={1} />
                <p>Drag pdf, doc, docx, files here or browse</p>
              </div>
              <div className="flex items-center">
                <hr className="w-full border-[#712E9A]" />
                <p className="px-8">or</p>
                <hr className="w-full border-[#712E9A]" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <HiOutlineDesktopComputer size={30} strokeWidth={1} />
                <p>Drag pdf, doc, docx, files here or browse</p>
              </div>
            </div>
          </div>
          <footer className="border-t border-[#262C3D] p-4 flex justify-end">
            Words: 0
          </footer>
        </Card>
        {/* Report Card */}
        <Card>
          <header className="flex justify-between items-center py-[13.5px] px-4 border-b border-[#262C3D]">
            <h1 className="text-xl">Report</h1>
          </header>
        </Card>
      </div>
      <Button>Check Now</Button>
    </div>
  );
}
