const Features_Tab = ({ text }: { text: string }) => {
  return (
    <div className=" rounded-xl flex gap-2  hover:bg-gray-800  items-center mb-3 w-full cursor-pointer">
      <img
        src={text == "Plagrism Check" ? "file_icon_2.png" : "file_icon.png"}
        alt=""
      />
      <h1 className="text-white">{text}</h1>
    </div>
  );
};

export default Features_Tab;
