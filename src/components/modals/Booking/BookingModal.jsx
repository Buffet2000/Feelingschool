import { useEffect, useMemo, useState } from 'react'
import styles from './BookingModal.module.css'
import { sendBooking } from '../../../api/booking'

const initial = {
  name: '',
  contact: '',
  childAge: '',
  format: 'online',
  time: '',
  message: '',
}

export default function BookingModal({ open, onClose, serviceId, serviceTitle }) {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')

  const fields = useMemo(() => {
    if (serviceId === 'group') {
      return ['name', 'contact', 'childAge', 'format', 'time', 'message']
    }

    if (serviceId === 'parents') {
      return ['name', 'contact', 'childAge', 'format', 'time', 'message']
    }

    if (serviceId === 'individual') {
      return ['name', 'contact', 'childAge', 'format', 'time', 'message']
    }

    return ['name', 'contact', 'time', 'message']
  }, [serviceId])

  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) return

    setStatus('idle')
    setForm(initial)
  }, [open, serviceId])

  if (!open) return null

  const set = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  }

  async function submit(e) {
    e.preventDefault()

    if (status === 'sending') return

    setStatus('sending')

    try {
      await sendBooking({
        serviceId,
        serviceTitle: serviceTitle || serviceId,
        ...form,
        sourceUrl: window.location.href,
      })

      setStatus('sent')
      setForm(initial)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div
      className={styles.backdrop}
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Форма заявки"
    >
      <div className={styles.modal} onMouseDown={(e) => e.stopPropagation()}>
        <header className={styles.head}>
          <div>
            <div className={styles.kicker}>Заявка</div>
            <div className={styles.title}>{serviceTitle}</div>
          </div>

          <button
            className={styles.close}
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
          >
            ✕
          </button>
        </header>

        <form className={styles.form} onSubmit={submit}>
          {fields.includes('name') && (
            <label className={styles.field}>
              <span>Имя</span>
              <input
                value={form.name}
                onChange={set('name')}
                required
                placeholder="Как к вам обращаться?"
              />
            </label>
          )}

          {fields.includes('contact') && (
            <label className={styles.field}>
              <span>Телефон или Telegram</span>
              <input
                value={form.contact}
                onChange={set('contact')}
                required
                placeholder="+358… или @username"
              />
            </label>
          )}

          {fields.includes('childAge') && (
            <label className={styles.field}>
              <span>
                {serviceId === 'parents'
                  ? 'Возраст ребёнка / подростка'
                  : 'Возраст ребёнка'}
              </span>
              <input
                value={form.childAge}
                onChange={set('childAge')}
                placeholder="например, 8"
              />
            </label>
          )}

          {fields.includes('format') && (
            <label className={styles.field}>
              <span>Формат</span>
              <select
                className={styles.select}
                value={form.format}
                onChange={set('format')}
              >
                <option value="online">Онлайн</option>
                <option value="offline">Очно в Каласатама</option>
              </select>
            </label>
          )}

          {fields.includes('time') && (
            <label className={styles.field}>
              <span>Когда удобно</span>
              <input
                value={form.time}
                onChange={set('time')}
                placeholder="дни/время"
              />
            </label>
          )}

          {fields.includes('message') && (
            <label className={styles.field}>
              <span>Коротко о запросе</span>
              <textarea
                value={form.message}
                onChange={set('message')}
                rows={4}
                placeholder="1–3 предложения достаточно"
              />
            </label>
          )}

          <button
            className={styles.submit}
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Отправляю…' : 'Отправить заявку'}
          </button>

          {status === 'sent' && (
            <div className={styles.ok}>
              Отправлено ✅ Я скоро свяжусь с вами.
            </div>
          )}

          {status === 'error' && (
            <div className={styles.err}>
              Ошибка отправки. Попробуйте ещё раз.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
