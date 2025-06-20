export default function CenterLargeArea() {
  return (
    <div
      className="absolute bg-white border border-black p-12"
      style={{
        width: '1792px',
        height: '472px',
        top: '1278px',
        left: '64px',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="flex h-full">
        {/* Left side content */}
        <div className="flex-1 flex flex-col justify-between">
          <h2
            style={{
              fontFamily: 'Gully, sans-serif',
              fontWeight: 400,
              fontSize: '60px',
              lineHeight: '1',
              letterSpacing: '0%',
              marginBottom: '20px',
            }}
          >
            H2 Text
          </h2>

          <h1
            style={{
              fontFamily: 'Gully, sans-serif',
              fontWeight: 400,
              fontSize: '115px',
              lineHeight: '1',
              letterSpacing: '0%',
              marginBottom: '20px',
            }}
          >
            H1 Text
          </h1>

          <h4
            style={{
              fontFamily: 'Gully, sans-serif',
              fontWeight: 300,
              fontSize: '24px',
              lineHeight: '1.3',
              letterSpacing: '0%',
              maxWidth: '800px',
            }}
          >
            Ini adalah H4 yang menjelaskan bagian tengah dengan teks panjang di bawah heading besar.
          </h4>
        </div>

        {/* Right side content */}
        <div className="w-1/3 flex items-center">
          <h3
            style={{
              fontFamily: 'Gully, sans-serif',
              fontWeight: 300,
              fontSize: '40px',
              lineHeight: '1.2',
              letterSpacing: '0%',
            }}
          >
            Ini adalah H3 untuk bagian kanan dari area besar ini.
          </h3>
        </div>
      </div>
    </div>
  );
}