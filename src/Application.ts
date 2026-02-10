import CacheHandler from './Private/CacheHandler.js';

class Application {
  readonly cacheHandler: CacheHandler;
  constructor() {
    this.cacheHandler = new CacheHandler();
  }

  connect() {
    console.other('You have connected!');
    console.other('Use this to init stuff. Say connect to a mongodb database. Start a web server. Ect');
  }
}

export default Application;
