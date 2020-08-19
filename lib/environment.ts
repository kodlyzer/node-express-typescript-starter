enum Environments {
  localEnv = 'local',
  devEnv = 'dev',
  prodEnv = 'prod',
  qaEnv = 'qa'
}

class Environment {
  private environment: String;

  constructor(environment: String) {
    this.environment = environment;
  }

  getPort(): Number {
    switch (this.environment) {
      case Environments.prodEnv:
        return 8081;
      case Environments.devEnv:
        return 8082;
      case Environments.qaEnv:
        return 8083;
      default:
        return 8000;
    }
  }

  getDBName(): String {
    switch (this.environment) {
      case Environments.prodEnv:
        return 'tProdDb';
      case Environments.devEnv:
        return 'tDevDb';
      case Environments.qaEnv:
        return 'tQaDb';
      default:
        return 'tLocalDb';
    }
  }
}

export default new Environment(Environments.localEnv);