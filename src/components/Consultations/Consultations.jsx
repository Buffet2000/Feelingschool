import { useMemo, useState } from 'react'
import styles from './Consultations.module.css'

import BookingModal from '../modals/Booking/BookingModal'

import freeImg from '../../assets/images/cards/free.png'
import groupImg from '../../assets/images/cards/group.png'
import individualImg from '../../assets/images/cards/individual.png'

const cards = [
  {
    id: 'individual',
    title: 'Индивидуальная консультация',
    badge: 'Дети/подростки',
    image: individualImg,
    text: 'Формат: 50–60 минут. Индивидуальная работа для детей и подростков с учётом возраста, состояния и запроса семьи.',
    points: [
      'тревожность и страхи',
      'СДВГ и трудности самоконтроля',
      'эмоциональные трудности',
      'низкая самооценка',
      'сложности в поведении',
      'навязчивые мысли и страхи',
      'трудности общения и адаптации',
    ],
    button: 'Записаться индивидуально',
  },
  {
    id: 'parents',
    title: 'Консультация для родителей',
    badge: '50–60 минут',
    image: freeImg,
    text: 'Помогаю разобраться в причинах поведения ребёнка, подобрать эффективные способы взаимодействия и получить рекомендации по поддержке ребёнка дома.',
    points: [
      'понимание причин поведения',
      'рекомендации для семьи',
      'поддержка ребёнка дома',
      'сложности в общении с ребёнком',
      'поиск спокойной стратегии действий',
    ],
    button: 'Записаться родителю',
  },
  {
    id: 'group',
    title: 'Групповые занятия для детей',
    badge: '4–6 человек',
    image: groupImg,
    text: 'Небольшие группы для детей. Группы формируются по возрасту и уровню развития, чтобы ребёнку было комфортно и безопасно.',
    points: [
      'развитие эмоциональной устойчивости',
      'уверенность в себе',
      'навыки общения',
      'управление эмоциями',
      'снижение тревожности',
      'развитие самоконтроля',
      'эмоциональная регуляция',
    ],
    button: 'Записаться в группу',
  },
]

export default function Consultations() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('individual')

  const active = useMemo(() => cards.find((c) => c.id === activeId), [activeId])

  return (
    <section className={styles.section} id="consultations">
      <div className={styles.wrap}>
        <h2 className={styles.title}>Консультации</h2>
        <p className={styles.lead}>
          Выберите подходящий формат — откроется короткая форма заявки.
        </p>

        <div className={styles.grid}>
          {cards.map((c) => (
            <article key={c.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={c.image} alt="" />
              </div>

              <div className={styles.content}>
                <div className={styles.head}>
                  <h3>{c.title}</h3>
                  <span className={styles.badge}>{c.badge}</span>
                </div>

                <p className={styles.text}>{c.text}</p>

                <ul className={styles.list}>
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                <button
                  className={styles.button}
                  onClick={() => {
                    setActiveId(c.id)
                    setOpen(true)
                  }}
                >
                  {c.button}
                </button>
              </div>
            </article>
          ))}
        </div>

        <BookingModal
          open={open}
          onClose={() => setOpen(false)}
          serviceId={activeId}
          serviceTitle={active?.title}
        />
      </div>
    </section>
  )
}
