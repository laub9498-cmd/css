import styles from './CssFunctions.module.css'

const CssFunctions = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Примеры CSS-функций</h2>

    <article className={styles.block}>
      <h3 className={styles.subheading}>:is() — единый стиль для группы тегов</h3>
      <p className={styles.description}>
        Селектор <code>:is()</code> позволяет оформить несколько элементов одним правилом.
      </p>
      <div className={styles.isDemo}>
        <button type="button">Кнопка</button>
        <a href="#" onClick={(event) => event.preventDefault()}>
          Ссылка
        </a>
        <span>Текстовый блок</span>
      </div>
    </article>

    <article className={styles.block}>
      <h3 className={styles.subheading}>:not() — исключаем элементы из выборки</h3>
      <p className={styles.description}>
        Псевдокласс <code>:not()</code> позволяет быстро исключить часть элементов из общего стиля.
      </p>
      <ul className={styles.notDemo}>
        <li className={`${styles.notItem} ${styles.notHighlight}`}>Важный пункт</li>
        <li className={styles.notItem}>Обычный пункт</li>
        <li className={styles.notItem}>Ещё один пункт</li>
      </ul>
    </article>

    <article className={styles.block}>
      <h3 className={styles.subheading}>round() — округляем вычисляемые значения</h3>
      <p className={styles.description}>
        Функция <code>round()</code> помогает округлять значения прямо в CSS. Ниже бар с 43%
        прогресса, округлённый до ближайших 10%.
      </p>
      <div className={styles.roundDemo} style={{ '--raw-progress': '43%' }}>
        <div className={styles.roundFill} />
        <div className={styles.roundLabels}>
          <span>Исходное значение: 43%</span>
          <span>После round(): 40%</span>
        </div>
      </div>
    </article>
  </section>
)

export default CssFunctions
