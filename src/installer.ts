import * as exec from '@actions/exec'

export class Installer {
  //TODO check dotnet sdk in constructor
  async install(version: string): Promise<number> {
    // The 'update' command will install JetBrains.ReSharper.GlobalTools if it is not already installed.
    let command = `dotnet tool update --global JetBrains.ReSharper.GlobalTools` // --version 2023.3.0-eap08` // TODO: remove version once these changes are out of eap

    if (version !== '') {
      command += ` --version ${version}`
    }

    return exec.exec(command)
  }
}
