import color from 'color'

import allColor from '../colors'

export function convertColor({ red, green, blue, alpha }) {
  return [
    Math.round(red * 255),
    Math.round(green * 255),
    Math.round(blue * 255),
    alpha
  ].join(',')
}

export function randomColor() {
  const index = Math.floor(Math.random() * allColor.colors.length)
  return allColor.colors[index]
}

export function quoteUrl(id) {
  const url = 'https://quotesondesign.com/wp-json/wp/v2/posts'
  return id ? `${url}/${id}` : `${url}/?orderby=rand&_=${Date.now()}`
}

export function getColor() {
  const textColor = `rgba(${convertColor(randomColor())})`
  const bgColor = `rgba(${convertColor(randomColor())})`

  const _textColor = color(textColor)
  const _bgColor = color(bgColor)
  const score = _textColor.contrast(_bgColor)

  if (score < 3) return getColor()

  return { text: textColor, bg: bgColor }
}
