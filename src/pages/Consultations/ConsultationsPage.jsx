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
          content="Онлайн-консультации детского и подросткового психолога для семей из Хельсинки и других городов Финляндии. Поддержка детей, подростков и родителей."
        />

        <link rel="canonical" href="https://www.feelingschool.org/consultations" />

        <meta property="og:title" content="Консультации детского психолога онлайн в Хельсинки | School of Feelings" />
        <meta
          property="og:description"
          content="Запись на индивидуальные консультации для детей и подростков, консультации для родителей и групповые занятия."
        />
        <meta property="og:url" content="https://www.feelingschool.org/consultations" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Process />
      <Consultations />
    </>
  )
}
