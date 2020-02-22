export default ({ red, green, blue, alpha }) => {
  return [
    Math.round(red * 255),
    Math.round(green * 255),
    Math.round(blue * 255),
    alpha
  ].join(',')
}
