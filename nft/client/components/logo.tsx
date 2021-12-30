import Link from 'next/link';
import { LogoConfiguration } from '../../nft.config';

const LogoComponent = () => {
  return (
    <Link href='/'>
      <a>
        <img
          src={LogoConfiguration.primary.path}
          alt={LogoConfiguration.primary.alt}
          className='h-12 w-auto'
        />
      </a>
    </Link>
  );
};

export default LogoComponent;
