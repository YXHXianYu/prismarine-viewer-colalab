module.exports = {
  mineflayer: require('./lib/mineflayer'),
  // freecamera: require('./lib/freecamera'),
  freecamera: require('./lib/freecamera-base64'),
  standalone: require('./lib/standalone'),
  // headless: require('./lib/headless'),
  headless: require('./lib/headless-base64'),
  viewer: require('./viewer'),
  supportedVersions: ['1.8.8', '1.9.4', '1.10.2', '1.11.2', '1.12.2', '1.13.2', '1.14.4', '1.15.2', '1.16.1', '1.16.4', '1.17.1', '1.18.1']
}
