enum Environments {
  LocalEnv = 'local',
  DevEnv = 'dev',
  ProdEnv = 'prod',
  QaEnv = 'qa'
}

class Environment {
  private environment: String;

  constructor(environment: String) {
    this.environment = environment;
  }

  getPort(): Number {
    switch (this.environment) {
      case Environments.ProdEnv:
        return 8081;
      case Environments.DevEnv:
        return 8082;
      case Environments.QaEnv:
        return 8083;
      default:
        return 8000;
    }
  }

  getDBName(): String {
    switch (this.environment) {
      case Environments.ProdEnv:
        return 'tProdDb';
      case Environments.DevEnv:
        return 'tDevDb';
      case Environments.QaEnv:
        return 'tQaDb';
      default:
        return 'tLocalDb';
    }
  }
}

export default new Environment(Environments.LocalEnv);