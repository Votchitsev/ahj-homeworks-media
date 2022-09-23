import parseDate from './service';

class TextPost {
  constructor(postText) {
    this.postText = postText;
    this.errorPopup = document.querySelector('.error-popup');
    this.errorPopupInput = this.errorPopup.querySelector('input[type="text"]');
    this.postGeo = undefined;
    this.post = undefined;

    this.create = this.create.bind(this);
    this.getGeolocation = this.getGeolocation.bind(this);
    this.geo = this.geo.bind(this);
    this.showErrorPopup = this.showErrorPopup.bind(this);
    this.validateGeoForm = this.validateGeoForm.bind(this);
    this.errorPopupOnSubmit = this.errorPopupOnSubmit.bind(this);

    this.getGeolocation();
  }

  create() {
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

    this.postGeo = this.post.querySelector('.post-geo');

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
    this.postGeo.textContent = geolocation;
  }

  showErrorPopup() {
    this.errorPopup.classList.add('show');
    this.errorPopupInput.addEventListener('input', this.validateGeoForm);
    this.errorPopup.addEventListener('submit', this.errorPopupOnSubmit);
  }

  validateGeoForm(e) {
    if (!e.target.checkValidity()) {
      throw new Error('Invalid data');
    }
  }

  errorPopupOnSubmit(e) {
    e.preventDefault();
    this.postGeo.textContent = this.errorPopup.querySelector('input[type="text"]').value;
    this.errorPopup.classList.remove('show');
    this.errorPopupInput.value = '';

    this.errorPopupInput.removeEventListener('input', this.validateGeoForm);
    this.errorPopup.removeEventListener('submit', this.errorPopupOnSubmit);
  }
}

export default TextPost;
