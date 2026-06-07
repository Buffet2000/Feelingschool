import styles from './About.module.css'
import photoFallback from '../../assets/images/blocks/My-photo.jpg'
import { Link, NavLink } from 'react-router-dom'

const about = {
  name: 'Виктория Деордиева',

  intro1:
    'Я детский и подростковый психолог, педагог-психолог с более чем 15-летним опытом работы с детьми, подростками и семьями.',

  intro2:
    'Помогаю детям и подросткам лучше справляться с тревогой, страхами, эмоциональными трудностями, неуверенностью в себе и сложностями поведения. Работаю с детьми от 5 до 18 лет и поддерживаю не только ребёнка, но и родителей — помогая лучше понимать причины происходящего и находить эффективные способы помощи.',

  intro3:
    'Для меня важно создать безопасное пространство, в котором ребёнок может выражать эмоции, учиться понимать себя и постепенно справляться со своими переживаниями.',

  stats: [
    { num: '15+', text: 'лет опыта работы' },
    { num: '5–18', text: 'лет возраст детей и подростков' },
    { num: '3000+', text: 'индивидуальных консультаций' },
  ],

  badges: ['дети', 'подростки', 'родители', 'онлайн'],

  formats: [
    {
      title: 'Индивидуальная работа',
      text: 'Консультации для детей и подростков с учётом возраста, особенностей развития и запроса семьи.',
    },
    {
      title: 'Поддержка родителей',
      text: 'Помогаю лучше понимать причины поведения ребёнка и находить эффективные способы взаимодействия.',
    },
    {
      title: 'Онлайн-консультации',
      text: 'Работаю с семьями из разных городов и стран в удобном дистанционном формате.',
    },
  ],
}

const certificates = [
  'Диплом Педагога - психолога',
  'Сертификат «Арт-терапия в работе специалистов помогающих профессий»',
  'Сертификат «Как понять мир подростка и как действовать в сложных ситуациях»',
  'Сертификат «Символдрама и современный психоанализ в диагностике и психотерапии депрессии»',
  'Сертификат «Эффективное взаимодействие с семейным окружением детей с опытом травмы»',
  'Сертификат «Введение в Терапию Принятия и Ответственности (ACT)»',
  'Сертификат «Введение в методы и подходы психотерапии»',
  'Сертификат обучения гипнозу и гипнотерапии',
  'Сертификат обучения методу ДПДГ',
]

const requests = [
  'тревожность и страхи',
  'эмоциональная неустойчивость',
  'низкая самооценка и неуверенность в себе',
  'сложности в общении со сверстниками',
  'импульсивность и трудности самоконтроля',
  'СДВГ',
  'навязчивые мысли и тревожные ритуалы (ОКР)',
  'эмоциональные вспышки и раздражительность',
  'трудности адаптации в школе',
  'нарушения сна, связанные с тревожностью',
  'детско-родительские отношения',
  'подростковые кризисы',
]

const methods = [
  'арт-терапия',
  'песочная терапия',
  'когнитивно-поведенческий подход (КПТ)',
  'ДПДГ (EMDR)',
  'терапия принятия и ответственности (ACT)',
  'сенсорные упражнения',
  'методы эмоциональной регуляции',
]

export default function About() {
  const {
    name,
    intro1,
    intro2,
    intro3,
    stats,
    badges,
    formats,
  } = about

  const avatarUrl = photoFallback

  return (
    <section className={styles.section} id="about">
      <div className="container">
        <header className={styles.hero}>
          <div className={styles.heroLeft}>
            <h1 className={styles.h1}>Обо мне</h1>

            <p className={styles.sublead}>Здравствуйте! Меня зовут {name}.</p>
            <p className={styles.sublead}>{intro1}</p>
            <p className={styles.sublead}>{intro2}</p>
            <p className={styles.sublead}>{intro3}</p>

            <div className={styles.stats}>
              {stats.map((s, i) => (
                <div key={i} className={styles.stat}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statText}>{s.text}</div>
                </div>
              ))}
            </div>

            <div className={styles.badges}>
              {badges.map((b) => (
                <span key={b} className={styles.badge}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.photoCard}>
              <img className={styles.photo} src={avatarUrl} alt={name} />
            </div>
          </div>
        </header>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h2 className={styles.title}>Образование</h2>

            <div className={styles.eduBlock}>
              <div className={styles.eduTitle}>Основное образование</div>
              <div className={styles.eduText}>
                Государственный университет Республики Молдова<br />
                <b>Специальность:</b> Педагогика и психология<br />
                <b>Год окончания:</b> 2009
              </div>
            </div>

            <details className={styles.details} open>
              <summary className={styles.summary}>
                Дополнительное образование и сертификаты
                <span className={styles.summaryHint}>Нажмите, чтобы скрыть</span>
              </summary>

              <ul className={styles.list}>
                {certificates.map((t) => (
                  <li key={t} className={styles.item}>
                    <span className={styles.dot} />
                    <span className={styles.text}>{t}</span>
                  </li>
                ))}
              </ul>
            </details>
          </article>

          <article className={styles.card}>
            <h2 className={styles.title}>С какими запросами я работаю</h2>

            <ul className={styles.list}>
              {requests.map((t) => (
                <li key={t} className={styles.item}>
                  <span className={styles.dot} />
                  <span className={styles.text}>{t}</span>
                </li>
              ))}
            </ul>

            <div className={styles.note}>
              Работа строится бережно и индивидуально — с учётом возраста ребёнка,
              особенностей развития и запроса семьи.
            </div>
            <Link to="/consultations" className={styles.cardButton}>
              Перейти к консультациям
            </Link>
          </article>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h2 className={styles.title}>Подход в работе</h2>

            <p className={styles.eduText}>
              В своей работе я использую бережный и индивидуальный подход. Для меня
              важно, чтобы ребёнок чувствовал себя в безопасности, мог выражать эмоции
              и постепенно учился справляться со своими переживаниями.
            </p>

            <div className={styles.note}>
              Поддержка родителей — важная часть процесса: вместе мы ищем понятные и
              реалистичные способы помощи ребёнку в повседневной жизни.
            </div>
          </article>

          <article className={styles.card}>
            <h2 className={styles.title}>Методы</h2>

            <ul className={styles.list}>
              {methods.map((t) => (
                <li key={t} className={styles.item}>
                  <span className={styles.dot} />
                  <span className={styles.text}>{t}</span>
                </li>
              ))}
            </ul>

            <div className={styles.note}>
              Каждый ребёнок уникален, поэтому программа работы всегда подбирается
              индивидуально.
            </div>
          </article>
        </div>

        <section className={styles.formats}>
          <header className={styles.formatsHead}>
            <h2 className={styles.h2}>Форматы работы</h2>
            <p className={styles.lead}>Подберём формат под ваш запрос.</p>
          </header>

          <div className={styles.cards3}>
            {formats.map((f) => (
              <article key={f.title} className={styles.miniCard}>
                <div className={styles.miniTitle}>{f.title}</div>
                <div className={styles.miniText}>{f.text}</div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
