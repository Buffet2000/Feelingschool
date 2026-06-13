import { NavLink, Outlet } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import styles from './AdminLayout.module.css'
import { supabase } from '../../lib/supabaseClient.js'

export default function AdminLayout() {
  const [hidden, setHidden] = useState(false)
  const lastYRef = useRef(0)
  const tickingRef = useRef(false)

  async function logout() {
    await supabase.auth.signOut()
  }

  useEffect(() => {
    lastYRef.current = window.scrollY || 0

    const onScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true

      requestAnimationFrame(() => {
        const y = window.scrollY || 0
        const last = lastYRef.current
        const delta = y - last

        // "Мёртвая зона", чтобы меню не дёргалось
        if (Math.abs(delta) > 8) {
          // Скролл вниз -> прячем, но только если уже ушли ниже начала страницы
          if (delta > 0 && y > 120) setHidden(true)

          // Скролл вверх -> показываем
          if (delta < 0) setHidden(false)

          lastYRef.current = y
        }

        // У самого верха всегда показываем
        if (y < 40) setHidden(false)

        tickingRef.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Кабинет администратора | School of Feelings</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className={styles.section}>
        <div className={`container ${styles.container}`}>
          <div className={styles.shell}>
            <header className={`${styles.topbar} ${hidden ? styles.topbarHidden : ''}`}>
              <div className={styles.brand}>
                <div className={styles.brandTitle}>Кабинет</div>
                <div className={styles.brandSub}>Администрирование сайта</div>
              </div>

              <nav className={styles.nav} aria-label="Меню админки">
                <NavLink
                  to="/admin"
                  end
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ''}`
                  }
                >
                  Обзор
                </NavLink>

                <NavLink
                  to="/admin/articles"
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ''}`
                  }
                >
                  Статьи
                </NavLink>

                <NavLink
                  to="/admin/about"
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ''}`
                  }
                >
                  Обо мне
                </NavLink>

                <button
                  className={`${styles.link} ${styles.disabled}`}
                  type="button"
                  disabled
                >
                  Настройки — скоро
                </button>
              </nav>

              <div className={styles.actions}>
                <button className={styles.logout} type="button" onClick={logout}>
                  Выйти
                </button>
              </div>
            </header>

            <main className={styles.main}>
              <Outlet />
            </main>
          </div>
        </div>
      </section>
    </>
  )
}
