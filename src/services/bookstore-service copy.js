export default class BookstoreService {

  _apiBase = "https://fakerestapi.azurewebsites.net/api";
  _imgBase = "";

  getResouce = async(url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}` );
    }

    return res.json();
  }


  getBooks = async() => {
    const res = await this.getResouce(`/Books/`);
   return res.map(this._transformBook).slice(0, 5);
  }

  getBook = async(id) => {
    const res = await this.getResouce(`/Books/${id}`);
    return res;
  }

  getAuthor = async(id) => {
    const res = await this.getResouce(`/Authors/${id}`);
    return res;
  }

  _transformBook = (book) => {
    const price = Math.floor(Math.random()*500)+1;
    return {
      id: book.ID,
      title: book.Title,
      price: price,
      description: book.Description,
      publishDate: book.PublishDate,
      excerpt: book.Excerpt
    }
  }

}