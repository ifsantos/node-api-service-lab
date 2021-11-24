import {Connection, createConnection, getConnectionOptions} from 'typeorm';


export default async(): Promise<Connection> => {
    const defaultOption = await getConnectionOptions();
    const dataBase = process.env.NODE_ENV === 'test' ? 'nodelab_test' : defaultOption.database;
    const objectAssign =  Object.assign(defaultOption, { database: dataBase })
    return createConnection(objectAssign)
}