// app/auth/error/page.tsx
import { Suspense } from "react";
import ClientErrorContent from "./ClientErrorContent";

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<div className='text-center py-20'>Loading...</div>}>
      <ClientErrorContent />
    </Suspense>
  );
}
