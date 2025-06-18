export default function LeftLargeArea() {
  return (
    <div
      className='absolute border border-gray-300'
      style={{
        width: "737px",
        height: "765px",
        borderRadius: "20px",
      }}
    >
      {/* Isi konten di sini */}
      <div
        className='absolute flex items-center justify-center bg-white shadow-lg rounded-xl'
        style={{
          width: "550px",
          height: "186px",
        }}
      >
        {/* Konten di sini */}
        <p className='text-gray-800'>Konten rata tengah (ceritanya)</p>
      </div>
    </div>
  );
}
