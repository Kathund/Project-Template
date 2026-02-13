import CacheHandler from './Private/CacheHandler.js';
import RequestHandler from './Private/Requests/RequestHandler.js';

class Application {
  readonly cacheHandler: CacheHandler;
  readonly requestHandler: RequestHandler;
  constructor() {
    this.cacheHandler = new CacheHandler();
    this.requestHandler = new RequestHandler(this);
  }

  connect() {
    console.other('You have connected!');
    console.other('Use this to init stuff. Say connect to a mongodb database. Start a web server. Ect');
  }
}

export default Application;
