import styles from './ImageEffects.module.css'

const ImageEffects = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Продвинутые эффекты с изображениями</h2>
    <p className={styles.description}>
      Примеры комбинируют mask-image, clip-path, backdrop-filter и 3D-трансформации без сторонних
      изображений — всё построено на градиентах.
    </p>

    <div className={styles.grid}>
      <figure className={`${styles.card} ${styles.maskCard}`}>
        <div className={styles.cardContent}>
          <span>mask-image + clip-path</span>
        </div>
        <figcaption>Световые пятна создаются исключительно градиентами и маской.</figcaption>
      </figure>

      <figure className={`${styles.card} ${styles.transformCard}`}>
        <div className={styles.cardContent}>
          <span>3D + backdrop-filter</span>
        </div>
        <figcaption>Блик и глубина достигаются фильтрами и perspective.</figcaption>
      </figure>
    </div>
  </section>
)

export default ImageEffects
