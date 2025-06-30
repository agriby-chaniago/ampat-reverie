import { Suspense } from "react";
import SignInPageClient from "./SignInPageClient";

export default function SignInPage() {
  return (
    <Suspense
      fallback={<div className='text-center py-20'>Loading sign in...</div>}
    >
      <SignInPageClient />
    </Suspense>
  );
}
