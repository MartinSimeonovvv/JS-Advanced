function getArticleGenerator(articles) {
    function append() {
        let article = document.createElement('article');
        let div = document.getElementById('content');
        article.textContent = articles.shift();
        
        if (article.textContent !== '') {
            div.appendChild(article);
        }
    }

    return append;
}