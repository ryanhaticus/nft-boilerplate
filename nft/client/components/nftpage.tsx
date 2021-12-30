import { NextSeo } from 'next-seo';

interface NFTPageParams {
  children: any;
  title: string;
}

const NFTPage = ({ children, title }: NFTPageParams) => {
  return (
    <>
      <NextSeo title={title} />
      {children}
    </>
  );
};

export default NFTPage;
