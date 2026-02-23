import styles from './AtRulesDemo.module.css'

const featureList = [
  {
    title: '@property',
    description: 'Объявляем кастомное свойство и анимируем его без рывков.',
  },
  {
    title: '@layer',
    description: 'Группируем стили и управляем порядком их применения.',
  },
  {
    title: '@container',
    description: 'Адаптируем контент, опираясь на ширину самого блока.',
  },
]

const AtRulesDemo = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Работа с @property, @layer и @container</h2>
    <p className={styles.description}>
      Карточки ниже подсвечены градиентом, угол которого задаётся пользовательским свойством
      <code> --pulse-angle</code>. Анимация этого свойства описана через <code>@property</code>, стили
      блока вынесены в <code>@layer</code>, а текст внутри реагирует на ширину карточки благодаря
      <code> @container</code>.
    </p>

    <div className={styles.cards}>
      {featureList.map((feature) => (
        <article key={feature.title} className={styles.card}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  </section>
)

export default AtRulesDemo
