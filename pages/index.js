import { PostonentsProvider } from 'postonents'
import {
  HeaderLogo,
  Hello,
  EmailWrapper,
  HeaderLinks,
  Banner,
  WhatToAsk,
  Article,
  FooterContacts,
  FooterLinks,
  Footer
} from '../components'

const Home = ({ data }) => {
  console.log(data)

  return (
    <PostonentsProvider theme={{ typo: { fontFamily: 'Stem, sans-serif' } }}>
      <EmailWrapper>
        <HeaderLogo />
        <HeaderLinks />
        <Banner />
        <Article />
        <FooterContacts />
        <FooterLinks />
        <Footer />
      </EmailWrapper>
    </PostonentsProvider>
  )
}

export default Home
