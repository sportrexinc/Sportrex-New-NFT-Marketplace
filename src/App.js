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
    </Switch>
  );
}

export default App;
