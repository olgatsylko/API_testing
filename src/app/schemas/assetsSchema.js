const assetsSchema = {
  title: "Schema for /page-data.json",
  type: "object",
  properties: {
      data: {
          type: "object",
          properties: {
      site: {
        type: "object",
        properties: {
          siteMetadata: {
            type: "object",
            properties: {
              title: {
                type: "string"
              },
            description: {
              type: "string"
            },
            author: {
              type: "string"
            }
          },
          required: [
            "title",
            "description",
            "author"
          ]     
        }
      },
      required: [
        "siteMetadata"
      ]
          }
      },
      required: [
          "site"
      ]
    }
  },
  required: [
      "data"
  ]
}

module.exports = assetsSchema;
  



                  
               