import parseDate from './service';

class TextPost {
  constructor(postText) {
    this.postText = postText;
    this.post = undefined;

    this.create = this.create.bind(this);
    this.getGeolocation = this.getGeolocation.bind(this);
    this.geo = this.geo.bind(this);

    this.getGeolocation();
  }

  create() {
    // return `
    // <div class="post">
    //   <div class="post-title">${parseDate(Date.now())}</div>
    //   <div class="post-content">${this.postText}</div>
    //   <div class="post-geo"></div>
    // </div>
    // `;

    this.post = document.createElement('div');
    const postTitle = document.createElement('div');
    const postContent = document.createElement('div');
    const postGeo = document.createElement('div');

    this.post.classList.add('post');

    postTitle.classList.add('post-title');
    postTitle.textContent = parseDate(Date.now());
    this.post.append(postTitle);

    postContent.classList.add('post-content');
    postContent.textContent = this.postText;
    this.post.append(postContent);

    postGeo.classList.add('post-geo');
    this.post.append(postGeo);

    return this.post;
  }

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geo, this.showErrorPopup);
    } else {
      this.showErrorPopup();
    }
  }

  geo(position) {
    const geolocation = `[${position.coords.latitude}, ${position.coords.longitude}]`;
    this.post.querySelector('.post-geo').textContent = geolocation;
  }

  showErrorPopup() {
    console.log('show error');
  }
}

export default TextPost;
