import { useEffect, useState } from 'react'
import styles from './RunningSlider.module.css'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const mixChannel = (start, end, ratio) => Math.round(start + (end - start) * ratio)

const mixColor = (ratio) => {
  const red = { r: 255, g: 77, b: 77 }
  const blue = { r: 79, g: 125, b: 255 }
  return `rgb(${mixChannel(red.r, blue.r, ratio)}, ${mixChannel(red.g, blue.g, ratio)}, ${mixChannel(
    red.b,
    blue.b,
    ratio,
  )})`
}

const brighten = (rgbString, amount = 0.35) => {
  const [r, g, b] = rgbString
    .replace('rgb(', '')
    .replace(')', '')
    .split(',')
    .map((channel) => parseInt(channel.trim(), 10))
  const mix = (channel) => Math.round(channel + (255 - channel) * amount)
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`
}

const RunningSlider = () => {
  const [scrollRatio, setScrollRatio] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const distance = scrollHeight - clientHeight
      const ratio = distance <= 0 ? 0 : clamp(scrollTop / distance, 0, 1)
      setScrollRatio(ratio)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const colorStart = mixColor(scrollRatio)
  const colorEnd = brighten(colorStart)

  return (
    <div className={styles.slider} aria-hidden="true">
      <div className={styles.track}>
        <span
          className={styles.thumb}
          style={{
            '--slider-color-start': colorStart,
            '--slider-color-end': colorEnd,
          }}
        />
      </div>
    </div>
  )
}

export default RunningSlider
