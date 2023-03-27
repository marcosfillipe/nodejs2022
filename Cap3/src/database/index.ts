import { DataSource } from "typeorm";

const appDataSource = new DataSource({
  type: "postgres",
  host: "db_rentacar",
  port: 5444,
  username: "docker",
  password: "teste",
  database: "db_rentacar",
});

appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
