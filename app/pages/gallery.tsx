export default function PurpleGridSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 grid-rows-6 gap-6 h-screen">
          <div className="col-span-3 row-span-2 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          <div className="col-span-5 row-span-4 col-start-4 row-start-2 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          <div className="col-span-4 row-span-3 col-start-9 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          <div className="col-span-3 row-span-3 row-start-3 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          <div className="col-span-4 row-span-2 col-start-9 row-start-4 bg-gradient-to-br from-purple-500 via-purple-700 to-purple-800 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          <div className="col-span-8 row-span-1 col-start-1 row-start-6 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          <div className="col-span-4 row-span-1 col-start-9 row-start-6 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
        </div>

      </div>
    </div>
  );
}

// "use client";
// import React, { JSX, useState } from "react";
// import { motion } from "motion/react";
// import { cn } from "@/lib/utils";

// type Card = {
//   id: number;
//   content: JSX.Element | string;
//   className?: string;
//   thumbnail: string;
//   alt?: string;
// };


// export const GlowingGridSection = ({ cards }: { cards: Card[] }) => {
//   const [selected, setSelected] = useState<Card | null>(null);
//   const [lastSelected, setLastSelected] = useState<Card | null>(null);

//   const handleClick = (card: Card) => {
//     setLastSelected(selected);
//     setSelected(card);
//   };

//   const handleOutsideClick = () => {
//     setLastSelected(selected);
//     setSelected(null);
//   };

//   return (
//     <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
//       {cards.map((card, i) => (
//         <div key={i} className={cn(card.className, "")}>
//           <motion.div
//             onClick={() => handleClick(card)}
//             className={cn(
//               card.className,
//               "relative overflow-hidden",
//               selected?.id === card.id
//                 ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
//                 : lastSelected?.id === card.id
//                 ? "z-40 bg-white rounded-xl h-full w-full"
//                 : "bg-white rounded-xl h-full w-full"
//             )}
//             layoutId={`card-${card.id}`}
//           >
//             {selected?.id === card.id && <SelectedCard selected={selected} />}
//             <ImageComponent card={card} />
//           </motion.div>
//         </div>
//       ))}
//       <motion.div
//         onClick={handleOutsideClick}
//         className={cn(
//           "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
//           selected?.id ? "pointer-events-auto" : "pointer-events-none"
//         )}
//         animate={{ opacity: selected?.id ? 0.3 : 0 }}
//       />
//     </div>
//   );
// };

// const ImageComponent = ({ card }: { card: Card }) => {
//   return (
//     <motion.img
//       layoutId={`image-${card.id}-image`}
//       src={card.thumbnail}
//       height="500"
//       width="500"
//       className={cn(
//         "object-cover object-top absolute inset-0 h-full w-full transition duration-200 z-20"
//       )}
//       alt="thumbnail"
//     />
//   );
// };

// const SelectedCard = ({ selected }: { selected: Card | null }) => {
//   return (
//     <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
//       <motion.div
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 0.6,
//         }}
//         className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
//       />
//       <motion.div
//         layoutId={`content-${selected?.id}`}
//         initial={{
//           opacity: 0,
//           y: 100,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         exit={{
//           opacity: 0,
//           y: 100,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: "easeInOut",
//         }}
//         className="relative px-8 pb-4 z-[70]"
//       >
//         {selected?.content}
//       </motion.div>
//     </div>
//   );
// };
