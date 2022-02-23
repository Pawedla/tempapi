import { Sequelize } from "sequelize";

 
const db = new Sequelize('dca66vstun5di9', 'nwmpqvvxenofxa', '    b9ecb9382f235ffda326de765f57f7ed00d882084ed4ef5ee7d1cc090c5bf788', {
    host: "    ec2-52-31-217-108.eu-west-1.compute.amazonaws.com",
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