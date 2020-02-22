import colors from '../../colors'

export default (req, res) => {
  res.statusCode = 200
  res.end(JSON.stringify(colors))
}
