const connection = require("../database/connection");

module.exports = {
   async index(request, response) {
      const users = await connection("users").select("*");
      response.json(users);
   },

   async create(request, response) {
      const { name, email } = request.body;

      await connection("users").insert({
         name,
         email,
      });

      return response.json({ name });
   },

   async showName(request, response) {
      const { name } = request.params;
      const users = await connection("users").where("name", name);
      response.json(users);
   },
};
