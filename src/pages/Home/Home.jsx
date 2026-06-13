import { Helmet } from 'react-helmet-async'

import HelpCards from '../../components/HelpCards/HelpCards.jsx'
import Process from '../../components/Process/Process.jsx'
import About from '../../components/About/About.jsx'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Детский и подростковый психолог онлайн | School of Feelings</title>
        <meta
          name="description"
          content="Детский и подростковый психолог Виктория Деордиева. Помощь детям 5–18 лет при тревожности, страхах, СДВГ, трудностях поведения и адаптации."
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
