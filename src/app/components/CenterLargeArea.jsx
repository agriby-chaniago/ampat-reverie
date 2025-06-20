export default function CenterLargeArea() {
  return (
    <div className="absolute top-[1278px] left-[64px] w-[1792px] h-[472px] bg-white border border-black p-12 rounded-[20px] overflow-hidden flex flex-col">
      <div className="flex h-full">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-between">
          <h2 className="font-[Gully] font-normal text-[60px] leading-none mb-5">
            H2 Text
          </h2>

          <h1 className="font-[Gully] font-normal text-[115px] leading-none mb-5">
            H1 Text
          </h1>

          <h4 className="font-[Gully] font-light text-[24px] leading-[1.3] max-w-[800px]">
            Ini adalah H4 yang menjelaskan bagian tengah dengan teks panjang di bawah heading besar.
          </h4>
        </div>

        {/* Right Side Content */}
        <div className="w-1/3 flex items-center">
          <h3 className="font-[Gully] font-light text-[40px] leading-[1.2]">
            Ini adalah H3 untuk bagian kanan dari area besar ini.
          </h3>
        </div>
      </div>
    </div>
  );
}
