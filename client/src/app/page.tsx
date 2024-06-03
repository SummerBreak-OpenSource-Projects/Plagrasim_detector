import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { RiDeleteBin6Line } from "react-icons/ri";
import FileUpload from "@/components/input/file-upload";

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
        <FileUpload />
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
