exports.logout = (req, res) => {
  req.logout()
  res.redirect('/')
}

exports.profile = (req, res) => {
  res.send(req.user)
}