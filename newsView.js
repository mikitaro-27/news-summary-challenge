class newsView {
  constructor(model) {
    this.model = model
    this.articlesDivEl = document.querySelector('#articles-main')
  }

  displayArticles() {
    let articles = this.model.getArticles();
    for (let index = 0; index < articles.length; index++) {
      this.#addDiv('article', index)
      this.#displayTitle(articles[index].webTitle, articles[index].webUrl, index)
      this.#displayImage(articles[index].fields.thumbnail, index)
    }
  }

  #displayTitle(heading, url, index) {
    let articleDiv = document.querySelector(`div#article-${index}`)
    let headlineDiv = document.createElement(`h1`)
    headlineDiv.className = 'article-headline'
    headlineDiv.id = `article-headline-${index}`
    this.#addLink(headlineDiv.id, url, index)
    aEls = document.querySelectorAll('a')
    aEls[index].append(heading)
    // headlineDiv.append(heading)
    articleDiv.append(headlineDiv)
    
  }

  #addDiv(className, index) {
    let articleDiv = document.createElement(`div`)
    articleDiv.className = className
    articleDiv.id = `${className}-${index}`
    this.articlesDivEl.append(articleDiv)
  }

  #displayImage(imageUrl, index) {
    let articleDiv = document.querySelector(`div#article-${index}`)
    let imgEl = document.createElement('img')
    imgEl.className = 'article-image'
    imgEl.id = `article-image-${index}`
    imgEl.src = imageUrl
    articleDiv.append(imgEl)
  }

  #addLink(headlineId, url, index) {
    let headline = document.querySelector('#' + headlineId)
    let aEl = document.createElement('a')
    aEl.setAttribute('href', url)
    headline.append(aEl)
  }
}

module.exports = newsView;