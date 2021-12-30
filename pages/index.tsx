import LogoComponent from '../nft/client/components/logo';
import NFTPage from '../nft/client/components/nftpage';

const IndexPage = () => {
  return (
    <NFTPage title='Welcome'>
      <div className='min-h-screen flex flex-col gap-y-8 items-center justify-center'>
        <LogoComponent />
        <div className='border bg-white overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <h1 className='text-xl font-bold'>NFT</h1>
            <p className='text-lg'>
              Not related to crypto. Instead, a fantastic NextJS, Firebase, and
              Tailwind boilerplate.
            </p>
          </div>
        </div>
      </div>
    </NFTPage>
  );
};

export default IndexPage;
