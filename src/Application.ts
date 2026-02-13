import CacheHandler from './Private/CacheHandler.js';
import DiscordManager from './Discord/DiscordManager.js';
import RequestHandler from './Private/Requests/RequestHandler.js';

class Application {
  readonly cacheHandler: CacheHandler;
  readonly discord: DiscordManager;
  readonly requestHandler: RequestHandler;
  constructor() {
    this.cacheHandler = new CacheHandler();
    this.discord = new DiscordManager(this);
    this.requestHandler = new RequestHandler(this);
  }

  async connect() {
    await this.discord.connect();
  }
}

export default Application;
