import Image from 'next/image';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-blue-500 text-white ${className}`}
    >
      <div className="flex items-center justify-center space-x-3">
        <Image src="/vercel.svg" alt="MGA" width={172} height={32} priority />
      </div>
    </footer>
  );
};

export default Footer;
