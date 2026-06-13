import { Helmet } from 'react-helmet-async'
import Consultations from '../../components/Consultations/Consultations.jsx'
import Process from '../../components/Process/Process.jsx'

export default function ConsultationsPage() {
  return (
    <>
      <Helmet>
        <title>Консультации детского психолога онлайн | School of Feelings</title>

        <meta
          name="description"
          content="Индивидуальные консультации для детей и подростков, консультации для родителей и групповые занятия. Онлайн-формат, бережный подход и поддержка семьи."
        />

        <link rel="canonical" href="https://feelingschool.org/consultations" />

        <meta property="og:title" content="Консультации детского психолога онлайн | School of Feelings" />
        <meta
          property="og:description"
          content="Запись на индивидуальные консультации для детей и подростков, консультации для родителей и групповые занятия."
        />
        <meta property="og:url" content="https://feelingschool.org/consultations" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Process />
      <Consultations />
    </>
  )
}
