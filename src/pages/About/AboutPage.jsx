import { Helmet } from 'react-helmet-async'
import HelpCards from '../../components/HelpCards/HelpCards.jsx'
import WhenToAct from '../../components/WhenToAct/WhenToAct.jsx'
import FAQ from '../../components/FAQ/Faq.jsx'

export default function About() {
  return (
    <>
      <Helmet>
        <title>Информация о работе психолога | School of Feelings</title>

        <meta
          name="description"
          content="Как проходит работа с детским и подростковым психологом: подход, методы, опыт, образование и форматы поддержки детей, подростков и родителей."
        />

        <link rel="canonical" href="https://www.feelingschool.org/about" />

        <meta property="og:title" content="Информация о работе психолога | School of Feelings" />
        <meta
          property="og:description"
          content="Подход, методы, опыт и форматы работы с детьми, подростками и родителями. Бережная психологическая поддержка семьи."
        />
        <meta property="og:url" content="https://www.feelingschool.org/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      <HelpCards />
      <WhenToAct />
      <FAQ />
      {/* <GroupProgram /> */}
      {/* <IndividualProgram /> */}
    </>
  )
}
