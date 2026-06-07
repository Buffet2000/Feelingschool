import styles from './HelpCards.module.css'
import individualImg from '../../assets/images/cards/individual.png'

const kids = [
  'тревожность, страхи, беспокойство',
  'эмоциональные вспышки и раздражительность',
  'низкая самооценка и неуверенность в себе',
  'сложности в общении со сверстниками',
  'импульсивность и трудности самоконтроля',
  'СДВГ',
  'навязчивые мысли и тревожные ритуалы (ОКР)',
  'трудности адаптации в школе',
  'нарушения сна на фоне тревоги и эмоционального напряжения',
  'подростковые кризисы',
]

const parents = [
  'непонимание причин поведения ребёнка',
  'детско-родительские конфликты',
  'ощущение, что «я не справляюсь»',
  'тревога за ребёнка',
  'сложности с границами, дисциплиной и договорённостями',
  'эмоциональная усталость родителей',
  'поиск спокойной стратегии поддержки дома',
]

const whenToAsk = [
  'ребёнок стал «не таким, как раньше»',
  'часто тревожится, плачет или замыкается',
  'избегает общения, школы или привычных дел',
  'часто злится, спорит или резко реагирует',
  'разговоры, уговоры и наказания не помогают',
  'напряжение в семье растёт',
  'вы устали и не понимаете, как помочь ребёнку',
]

function Card({ title, items, note, variant = 'default', faded = false, image }) {
  return (
    <article
      className={[
        styles.card,
        variant === 'large' && styles.cardLarge,
        faded && styles.cardFaded,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <header className={styles.cardHeader}>
        <span className={styles.dotTitle} aria-hidden />
        <h3 className={styles.cardTitle}>{title}</h3>
      </header>

      <ul className={styles.list}>
        {items.map((t) => (
          <li key={t} className={styles.item}>
            <span className={styles.dot} aria-hidden />
            <span className={styles.text}>{t}</span>
          </li>
        ))}
      </ul>

      {note && <p className={styles.note}>📌 {note}</p>}

      {image && (
        <div className={styles.cardImage}>
          <img src={image} alt="" />
        </div>
      )}
    </article>
  )
}

export default function HelpCards() {
  return (
    <section className={styles.section} id="help">
      <div className="container">
        <h2 className={styles.title}>С какими запросами я помогаю</h2>

        <p className={styles.lead}>
          Работаю с детьми и подростками от 5 до 18 лет, а также консультирую
          родителей по вопросам поведения, эмоций, тревоги, адаптации и отношений
          с ребёнком.
        </p>

        <div className={styles.layout}>
          <Card
            variant="large"
            title="Для детей и подростков"
            items={kids}
            image={individualImg}
            note="Работа подбирается индивидуально с учётом возраста, особенностей развития и состояния ребёнка."
          />

          <div className={styles.stack}>
            <Card
              title="Для родителей"
              items={parents}
              faded
              note="Консультация помогает лучше понять, что происходит с ребёнком, и выбрать бережные, но рабочие способы взаимодействия."
            />

            <Card
              title="Когда стоит обратиться"
              items={whenToAsk}
              faded
              note="Не обязательно ждать, пока ситуация станет тяжёлой. Иногда короткая консультация помогает быстрее понять, с чего начать."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
