import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'unicorn_user'
    password: 'magical_password'
    database: 'rainbow_database'
    entities: []
}