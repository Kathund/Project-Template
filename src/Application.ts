import CacheHandler from './Private/CacheHandler.ts';
import DiscordManager from './Discord/DiscordManager.ts';
import RequestHandler from './Private/Requests/RequestHandler.ts';

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
