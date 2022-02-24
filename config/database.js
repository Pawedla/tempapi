import { Sequelize } from "sequelize";

 
const db = new Sequelize('d2s94ef0jbngij', 'tobdtoorexjfoy', 'fc0c3fe412efdd7dd76992e423d3a794109d2b5fcf63495a863fd960bcd40e8d', {
    host: "ec2-79-125-26-60.eu-west-1.compute.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
    port: 5432,
    define: {
        timestamps: false
    }
});
 
export default db;