export default function LeftLargeArea() {
  return (
    <div
      className='absolute border border-gray-300'
      style={{
        width: "737px",
        height: "765px",
        top: "205px",
        left: "79px",
        borderRadius: "20px",
      }}
    >
      {/* Isi konten di sini */}
      <div
        className='absolute flex items-center justify-center bg-white shadow-lg rounded-xl'
        style={{
          width: "550px",
          height: "186px",
          top: "289px",
          left: "167px",
        }}
      >
        {/* Konten di sini */}
        <p className='text-gray-800'>Konten rata tengah</p>
      </div>
    </div>
  );
}
