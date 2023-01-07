import Head from 'next/head'
import Image from 'next/image'
import Layout from '@Components/Layout/Layout'
import { getAllFilesMetadata } from '@Lib/mdx'
import HeroSection from '@Components/Sections/Hero/HeroSection'
import WannathisSection from '@Components/Sections/Products/WannathisSection'
import SnapclipSection from '@Components/Sections/Products/SnapclipSection'
import OpenSourceSection from '@Components/Sections/OpenSource/OpenSourceSection'
import AboutMeSection from '@Components/Sections/About/AboutMeSection'
import { Main } from '@Components/Layout/Layout.styled'
import { ThemeProvider } from '@Context/ThemeContext'
import AffiliationToolsSection from '@Components/Sections/Products/AffiliationToolsSection'

export default function Home({ posts }) {
  return (
    <ThemeProvider>
      <Layout>
        <Main>
          <HeroSection />
          <WannathisSection />
          <AffiliationToolsSection />
          <SnapclipSection />
          <OpenSourceSection />
          <AboutMeSection />
        </Main>
      </Layout>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata('blog')
  console.log(posts)

  return {
    props: {
      posts,
    },
  }
}
