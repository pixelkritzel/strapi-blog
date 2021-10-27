"use strict";

const marked = require("marked");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      console.log(data);
      data.html_content = marked(data.content);
    },
    beforeUpdate: async (params, data) => {
      if (data.content) {
        data.html_content = marked(data.content);
      }
    },
  },
};
