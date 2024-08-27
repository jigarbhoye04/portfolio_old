import MainFirst from "@/components/mainpage/mainFirst";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Suspense } from "react";
import Loading from "@/app/loading"; // Import the Loading component

export default function Home() {
   return (
      <main>
         <Suspense fallback={<Loading />}>
            <Header />
            <MainFirst />
            <Footer />
         </Suspense>
      </main>
   );
}
