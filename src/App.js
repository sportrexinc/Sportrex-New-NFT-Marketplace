import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Market from './pages/Market';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Intro from './pages/IntroPage';
import FAQ from './pages/FAQ';
import SelectNft from './pages/NftCollections/SelectNft';
import SingleNft from './pages/NftCollections/SingleNft';
import CollectionNft from './pages/NftCollections/CollectionNft';
import BundleNft from './pages/NftCollections/BundleNft';
import EditNft from './pages/NftCollections/EditNft';
import Staking from './pages/Staking';
import LockedStake from './pages/Staking/LockedStake';
import UnlockedStake from './pages/Staking/UnlockedStake';
import NotConnectedStake from './pages/Staking/NotConnectedStake';
import Testing from './pages/Testing/Testing';
import Profile from './pages/Profile';
import MintNft from './pages/Profile/MintNft';
import EditCreatorProfile from './pages/Profile/EditCreatorProfile';
import SingleMintNft from './pages/Market/SingleMintNft';
import CollectionMintNft from './pages/Market/CollectionMintNft';
import BundleMintNft from './pages/Market/BundleMintNft';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/home" component={Home} />
      <Route path="/market" component={Market} />
      <Route path="/faq" component={FAQ} />
      <Route path="/select-nft" component={SelectNft} />
      <Route path="/single-nft" component={SingleNft} />
      <Route path="/collection-nft" component={CollectionNft} />
      <Route path="/bundle-nft" component={BundleNft} />
      <Route path="/edit-nft" component={EditNft} />
      <Route path="/staking" component={Staking} />
      <Route path="/locked-stake" component={LockedStake} />
      <Route path="/unlocked-stake" component={UnlockedStake} />
      <Route path="/not-connected-stake" component={NotConnectedStake} />
      <Route path="/testing" component={Testing} />
      <Route path="/profile" component={Profile} />
      <Route path="/mint-nft" component={MintNft} />
      <Route path="/edit-creator-profile" component={EditCreatorProfile} />
      <Route path="/mint-single-nft" component={SingleMintNft} />
      <Route path="/mint-collection-nft" component={CollectionMintNft}  />
      <Route path="/mint-bundle-nft" component={BundleMintNft}  />
      <Route path="/come" component={ComingSoon}  />
    </Switch>
  );
}

export default App;
