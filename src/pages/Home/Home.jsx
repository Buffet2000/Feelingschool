import { Helmet } from 'react-helmet-async'

import Hero from '../../components/Hero/Hero.jsx'
import HelpCards from '../../components/HelpCards/HelpCards.jsx'
import WhenToAct from '../../components/WhenToAct/WhenToAct.jsx'
import Process from '../../components/Process/Process.jsx'
import GroupProgram from '../../components/GroupProgram/GroupProgram.jsx'
import IndividualProgram from '../../components/IndividualProgram/IndividualProgram.jsx'
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
      {/* <Process /> */}
      {/* <GroupProgram /> */}
      {/* <IndividualProgram /> */}
    </>
  )
}
