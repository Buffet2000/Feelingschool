import { Helmet } from 'react-helmet-async'

import HelpCards from '../../components/HelpCards/HelpCards.jsx'
import Process from '../../components/Process/Process.jsx'
import About from '../../components/About/About.jsx'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Детский и подростковый психолог онлайн в Хельсинки | School of Feelings</title>
        <meta
          name="description"
          content="Детский и подростковый психолог Виктория Деордиева. Онлайн-консультации для семей из Хельсинки при тревожности, страхах, СДВГ и трудностях поведения."
        />
      </Helmet>

      <About />
      <Process />
      {/* <Hero /> */}
      <HelpCards />
      {/* <GroupProgram /> */}
      {/* <IndividualProgram /> */}
    </>
  )
}
