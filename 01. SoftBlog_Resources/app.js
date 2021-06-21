function solve() {

   const createBtn = document.querySelector('aside button')
   createBtn.addEventListener('click', create)
   const archiveSection = document.querySelector('.archive-section ol')


   function create(event) {
      event.preventDefault()

      const creator = document.getElementById('creator').value
      const title = document.getElementById('title').value
      const category = document.getElementById('category').value
      const content = document.getElementById('content').value

      const article = document.createElement('article')

      const h1 = document.createElement('h1')
      h1.textContent = title

      const pCategory = document.createElement('p')
      pCategory.textContent = 'Category:' //may need a spase
      const strongCategory = document.createElement('strong')
      strongCategory.textContent = category
      pCategory.appendChild(strongCategory)

      const pCreator = document.createElement('p')
      pCreator.textContent = 'Creator:'
      const strongCreator = document.createElement('strong')
      strongCreator.textContent = creator
      pCreator.appendChild(strongCreator)

      const pContent = document.createElement('p')
      pContent.textContent = content

      const divButtons = document.createElement('div')
      divButtons.setAttribute('class', 'buttons')

      const btnDelete = document.createElement('button')
      btnDelete.textContent = 'Delete'
      btnDelete.setAttribute('class', 'btn delete')

      const btnArchive = document.createElement('button')
      btnArchive.textContent = 'Archive'
      btnArchive.setAttribute('class', 'btn archive')

      divButtons.appendChild(btnDelete)
      divButtons.appendChild(btnArchive)

      article.appendChild(h1)
      article.appendChild(pCategory)
      article.appendChild(pCreator)
      article.appendChild(pContent)
      article.appendChild(divButtons)

      document.querySelector('main section').appendChild(article)

      btnArchive.addEventListener('click', archive)
      btnDelete.addEventListener('click', deleteArticle)
   }

   function deleteArticle(e) {
      e.target.parentElement.parentElement.remove();
   }

   function archive(e) {
      let title = e.target.parentElement.parentElement.querySelector('h1').textContent;
      deleteArticle(e);

      let newLi = document.createElement('li');
      newLi.textContent = title;

      let olParent = document.querySelector('section.archive-section>ol');
      let allLis = [...document.querySelectorAll('section.archive-section>ol>li')];

      allLis.push(newLi);

      allLis = allLis.sort((a, b) => a.textContent.localeCompare(b.textContent));

      for (let i = 0; i < allLis.length; i++) {
         olParent.appendChild(allLis[i]);
      }
   }
}