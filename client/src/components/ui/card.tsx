const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#111621] text-[#A0A2A6] rounded-md border border-[#262C3D]">
      {children}
    </div>
  );
};

export default Card;
