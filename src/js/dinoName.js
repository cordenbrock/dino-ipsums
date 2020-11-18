export default class DinoName {
  static getDinoName() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=2`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response); 
        } else {
          reject(request.response); 
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}


