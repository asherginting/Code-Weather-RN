# Setup

## Requirements
* A Mac, Linux, Windows computer.
* [NVM](https://github.com/creationix/nvm).
* [NodeJS](https://nodejs.org/). Install using nvm > 10: example: `nvm install v16.18.1`. Remember to add `nvm use v16.18.1` to your preferred shell startup file.
* You may need to install npm globally `npm install -g npm`.
* It is recommended you restart your shell to ensure changes added the startup file are applied.

## Developing
**Clone this repository**
```bash
$ git clone git@github.com:asherginting/Code-Weather-RN.git
```

**Install**
```bash
$ cd Code-Weather-RN
$ npm install or yarn install
```

### Running on iOS simulator
* Cd folder IOS ```cd ios``` and ```pod install```
* After install back folder ```cd ..```
* Run `yarn start` and ```yarn ios```

### Running on Android simulator
* Install depedency `yarn install`
* Run `yarn start` and ```yarn android```

### Note!!
This application still has configuration issues in redux, which causes the application to crash when it runs.


