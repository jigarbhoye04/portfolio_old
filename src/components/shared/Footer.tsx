'use client';

export default function Footer() {
   return (
      <>
         <footer className="bg-neutral-900 text-white p-4 w-full">
            <div className="flex flex-col items-center justify-center w-full px-4">
               <div className="text-center">
                  <p className="text-sm">
                     &copy; {new Date().getFullYear()} Jigar Bhoye.
                  </p>
               </div>
            </div>
         </footer>
      </>
   );
}
