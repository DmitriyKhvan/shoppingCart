export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Тонкое исскуство пофигизма',
      author: 'Марк Мэнсон',
      price: 32,
      coverImage: 'https://s3-goods.ozstatic.by/2000/134/614/10/10614134_0.jpg'},
    {
      id: 2,
      title: 'Все хреново',
      author: 'Марк Мэнсон',
      price: 45,
      coverImage: 'https://s1-goods.ozstatic.by/1000/980/805/10/10805980_0.jpg'}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() > 0.75) {
          reject(new Error("Something bad happend"));
        } else {
          resolve(this.data);
        }
        
      }, 1000);
    });
  }
}