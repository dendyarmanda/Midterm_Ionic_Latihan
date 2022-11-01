import { Contact } from './../../entities/contac';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Connection, ConnectionOptions, createConnection, getConnection } from 'typeorm';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private platform: Platform) { }

  private createConnection(): Promise<Connection> {
    let dbOptions: ConnectionOptions;

    if (this.platform.is('cordova')) {
      console.log('platform', 'cordova');
      dbOptions = {
        type: 'cordova',
        database: '__maindb',
        location: 'default'
      };
    } else {
      console.log('platform', 'browser');
      dbOptions = {
        type: 'sqljs',
        location: 'browser',
        autoSave: true
      };
    }

    Object.assign(dbOptions, {
      logging: ['error', 'query', 'schema'],
      synchronize: true,
      entities: [
        Contact
      ]
    });

    return createConnection(dbOptions);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  async ready() {
    try {
      await getConnection();
    } catch (e)  {
      console.log('Connection not established!', e);
      await this.createConnection().then(connection => {
        console.log('connection', connection.name);
      }).catch(err => console.log('error', err));
    }
  }
}
