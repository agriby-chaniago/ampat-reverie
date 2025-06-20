export default function LeftLowerSection() {
  return (
    <div
      className="absolute bg-white border border-black p-8"
      style={{
        width: '1044px',
        height: '318px',
        top: '1782px',
        left: '64px',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {/* Left Content Group */}
      <div className="flex flex-col gap-4" style={{ maxWidth: '45%' }}>
        {/* Logo 1 with Title */}
        <div className="flex items-center gap-4">
          <div
            style={{
              width: '42px',
              height: '42px',
              backgroundColor: '#ccc',
              borderRadius: '8px',
            }}
          />
          <h4
            style={{
              fontFamily: 'Gully, sans-serif',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '25px',
              letterSpacing: '0%',
            }}
          >
            Judul Samping Logo 1
          </h4>
        </div>

        {/* Description 1 */}
        <h3
          style={{
            fontFamily: 'Gully, sans-serif',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: '0%',
            marginLeft: '52px', // Aligns with text above
          }}
        >
          Ini adalah deskripsi detail atau narasi pendek terkait logo 1.
        </h3>
      </div>

      {/* Right Content Group */}
      <div className="flex flex-col gap-4" style={{ maxWidth: '45%' }}>
        {/* Logo 2 with Title */}
        <div className="flex items-center gap-4">
          <div
            style={{
              width: '42px',
              height: '42px',
              backgroundColor: '#ccc',
              borderRadius: '8px',
            }}
          />
          <h4
            style={{
              fontFamily: 'Gully, sans-serif',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '25px',
              letterSpacing: '0%',
            }}
          >
            Judul Samping Logo 2
          </h4>
        </div>

        {/* Description 2 */}
        <h3
          style={{
            fontFamily: 'Gully, sans-serif',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: '0%',
            marginLeft: '52px', // Aligns with text above
          }}
        >
          Ini adalah deskripsi tambahan terkait logo 2, lebih panjang dan lengkap.
        </h3>
      </div>
    </div>
  );
}