import express = require('express');
import path = require('path');

export default class Server {
  public app: express.Application;
  public port: number;
  private static server: Server;

  constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  static init(port: number): Server {
    if (!this.server)
      this.server = new Server(port);

    return new Server(port);
  }

  start(callback: () => void): void {
    this.app.listen(this.port, callback);
    this.publicPath();
  }

  private publicPath(): void {
    const publicPath: string = path.resolve(__dirname, '../public');
    this.app.use(express.static(publicPath));
  }
}