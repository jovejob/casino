// components/Header.tsx
import { useRouter } from 'next/router';
import database from '../../../lib/search/data.json';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/results?category=${encodeURIComponent(category)}`);
  };

  // Extract unique categories from the data
  const categories = Array.from(
    new Set(database.flatMap((game) => game.cats.map((cat) => cat.title)))
  );

  return (
    <header
      {...headerProps}
      className={`w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center ${className}`}
    >
      <div className="flex flex-col items-center space-y-6 m-5">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="inline-flex items-center justify-center border border-gray-300 py-2 px-4 sm:px-6 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

// import { useRouter } from 'next/router';
// import database from '../../../lib/search/data.json';

// export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

// const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
//   const router = useRouter();

//   // Extract unique categories from the data
//   const categories = Array.from(
//     new Set(database.flatMap((game) => game.cats.map((cat) => cat.title)))
//   );

//   const handleCategoryClick = (category: string) => {
//     const url = `/results?category=${encodeURIComponent(category)}`;
//     console.log('Navigating to URL:', url); // Log the URL being navigated to
//     router.push(url);
//   };

//   return (
//     <header
//       {...headerProps}
//       className={`w-full flex flex-col sm:flex-row justify-between items-center ${className}`}
//     >
//       <div className="flex flex-wrap justify-center sm:justify-start space-x-3 sm:space-x-5 m-5">
//         {categories.map((category) => (
//           <button
//             key={category}
//             type="button"
//             className="inline-flex items-center justify-center border border-gray-300 py-2 px-4 sm:px-6 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 h-10"
//             onClick={() => handleCategoryClick(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="space-x-5 m-5 hidden sm:flex">
//         <button className="border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white h-10">
//           Sign In
//         </button>
//         <button className="border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white h-10">
//           Create Account
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import Link from 'next/link';

// export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

// const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
//   return (
//     <header
//       {...headerProps}
//       className={`w-full flex flex-col sm:flex-row justify-between items-center ${className}`}
//     >
//       <div className="flex flex-wrap justify-center sm:justify-start space-x-3 sm:space-x-5 m-5">
//         <Link href="/">
//           <a className="inline-flex items-center justify-center border border-gray-300 py-2 px-4 sm:px-6 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 h-10">
//             Casino
//           </a>
//         </Link>
//         <Link href="/">
//           <a className="inline-flex items-center justify-center border border-gray-300 py-2 px-4 sm:px-6 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 h-10">
//             Live Casino
//           </a>
//         </Link>
//       </div>
//       <div className="space-x-5 m-5 hidden sm:flex">
//         <button className="border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white h-10">
//           Sign In
//         </button>
//         <button className="border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white h-10">
//           Create Account
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
