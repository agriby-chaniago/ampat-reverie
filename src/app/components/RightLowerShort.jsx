'use client';

export default function RightLowerShort() {
  return (
    <div
      className="absolute bg-white p-6"
      style={{
        width: '716px',
        height: '334px',
        top: '688px',
        left: '1140px',
        borderRadius: '20px',
      }}
    >
      <h1
        style={{
          fontFamily: 'Gully, sans-serif',
          fontWeight: 400,
          fontSize: '28px',
          lineHeight: '25px',
          letterSpacing: '0%',
        }}
      >
        Judul Utama
      </h1>

      <h2
        style={{
          fontFamily: 'Gully, sans-serif',
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: '25px',
          letterSpacing: '0%',
          marginTop: '10px',
        }}
      >
        Subjudul
      </h2>

      <button
        style={{
          width: '574px',
          height: '78px',
          borderRadius: '50px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          margin: '30px auto 0', // tombol berada di tengah horizontal
        }}
      >
        <h3
          style={{
            fontFamily: 'Gully, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '25px',
            letterSpacing: '0%',
            margin: 0,
          }}
        >
          Tombol Aksi
        </h3>
      </button>
    </div>
  );
}
