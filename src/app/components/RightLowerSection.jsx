import { Card, CardContent } from '@/components/ui/card';

export default function RightLowerSection() {
  const stats = [
    { label: 'Fish Species', value: '1,700+' },
    { label: 'Known Coral Species', value: '75 %' },
    { label: 'Small Islands', value: '1,500+' },
    { label: 'Square Kilometers', value: '40,000' },
  ];

  return (
    <div className="absolute top-[1782px] left-[1140px] w-[716px] h-[318px] rounded-[20px] p-6 backdrop-blur-xs border-1 border-white">
      <Card className="bg-transparent border-none shadow-none h-full">
        <CardContent className="flex flex-col justify-between h-full text-white font-[Gully] text-[24px]">
          {stats.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="font-bolt">{item.label}</span>
              <span className="font-bolt">{item.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
