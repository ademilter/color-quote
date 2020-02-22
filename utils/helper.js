import allColor from '../colors'

export function convertColor({ red, green, blue, alpha }) {
  return [
    Math.round(red * 255),
    Math.round(green * 255),
    Math.round(blue * 255),
    alpha
  ].join(',')
}

export function randomNumber(max, min = 0) {
  return () => Math.floor(Math.random() * (max - min))
}

export function quoteUrl(id) {
  const url = 'https://quotesondesign.com/wp-json/wp/v2/posts'
  return id ? `${url}/${id}` : `${url}/?orderby=rand&_=${Date.now()}`
}
