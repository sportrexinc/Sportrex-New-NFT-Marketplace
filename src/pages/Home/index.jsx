import React from 'react';
import {
  DesktopNav,
  Footer,
  MarketCategory,
  Subscribe,
  TopCollections,
  BlockhainList,
  MainHero,
  MobileNavbar
} from '../../components';
import Community from '../../components/Community/Cummunity';
import PlatformWork from '../../components/HowPlatformWorks/PlatformWork';
import Blog from '../../components/LatestBlog/Blog';
import NewNft from '../../components/NFT/newNft';
import TrendingNFT from '../../components/NFT/trandingNft';
const index = () => {
  return (
    <div className="w-full min-h-screen h-full bg-blue-body text-white">
      <DesktopNav />
      <MobileNavbar />
      <Divider size={78}>
        <MainHero />
      </Divider>
      <Divider size={78}>
        <BlockhainList />
      </Divider>
      <Divider>
        <PlatformWork />
      </Divider>
      <Divider />
      <TrendingNFT />
      <Divider />
      <div>
        <TopCollections />
      </div>
      <Divider size="150px" />

      <NewNft />
      <Divider />
      <div>
        <MarketCategory />
      </div>
      <Divider size="150px" />

      <Blog />

      <Divider size="150px" />

      <Community />
      {/* <NewNftBg /> */}
      <Divider size="150px" />
      <Subscribe />
      <Divider size="150px" />

      <Footer />
    </div>
  );
};
const Divider = ({ size, children }) => {
  return (
    <div className="w-full h-full" style={{ marginTop: size || '150px' }}>
      {children}
    </div>
  );
};

export default index;
