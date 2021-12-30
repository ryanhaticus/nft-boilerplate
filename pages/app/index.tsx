import NFTPage from '../../nft/client/components/nftpage';
import { useUserProvider } from '../../nft/client/providers/user';

const AppIndexPage = () => {
  const { user } = useUserProvider();
  return (
    <NFTPage title='App'>
      <p>
        You're currently authenticated with this email address: {user.email}!
      </p>
    </NFTPage>
  );
};

export default AppIndexPage;
