export default function Loading() {
   return (
      <>
         <div class="flex flex-row gap-2">
            <div class="w-4 h-4 rounded-full bg-nuetral-100 animate-bounce"></div>
            <div class="w-4 h-4 rounded-full bg-nuetral-100 animate-bounce [animation-delay:-.3s]"></div>
            <div class="w-4 h-4 rounded-full bg-nuetral-100 animate-bounce [animation-delay:-.5s]"></div>
         </div>
      </>
   );
}
