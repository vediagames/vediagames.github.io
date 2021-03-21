function placeImg (imgSrc, parent, size, x_pos, y_pos, fromLeft, fromTop, flipX) {
  var parent = document.querySelector(`#${parent}`)

  const img = document.createElement('img')
  img.src = 'img/' + imgSrc
  img.width = size
  img.style.position = 'absolute'

  img.style[fromLeft ? 'left' : 'right'] = x_pos + 'px'
  img.style[fromTop ? 'top' : 'bottom'] = y_pos + 'px'

  flipX ? img.style.transform = 'scaleX(-1)' : null

  parent.append(img)
}
