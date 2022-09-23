class Blog {
  constructor(Post) {
    this.Post = Post;
    this.postsContainer = document.querySelector('.posts-container');

    this.pushPost = this.pushPost.bind(this);
  }

  init() {
    this.addListeners();
  }

  addListeners() {
    const form = document.querySelector('.textForm');

    form.addEventListener('submit', this.pushPost);
  }

  pushPost(e) {
    e.preventDefault();

    const textPost = e.target.querySelector('input').value;
    const post = new this.Post(textPost);
    const postHTMLElement = post.create();

    if (!postHTMLElement) {
      return;
    }

    this.postsContainer.insertAdjacentElement('beforeend', postHTMLElement);

    e.target.querySelector('input').value = '';
  }

  textFormOnSubmit() {

  }

  /**
   *  Отправка данных о геопозиции, которые ввели вручную.
   * Обязательная валидация введённых данных.
   */
  geoErrorFormSubmit() {

  }

  /**
   *  Показывает сообщение об ошибке получения геолокации
   */
  showGeoErrorMessage() {

  }
}

export default Blog;
