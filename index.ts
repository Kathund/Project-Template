// Logger should always be imported first in your main file
// You want the logger to be loaded from the start because it changes how the built in console object works
// Not loading it first can cause issues where stuff that is expected to be defined via the logger may not exist because it not being loaded
import './src/Private/Logger.js';

// Logger should always be imported second in your main file (after the logger)
// You want to be able to load envirement variables before loading any code that might need them
// Not loading them before will cause issues where envirement variables will be undefined
import 'dotenv/config';

import Application from './src/Application.js';

const application = new Application();
application.connect();
