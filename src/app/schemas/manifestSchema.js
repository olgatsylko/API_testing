const manifestSchema = {
    title: "Schema for /manifest.json",
    type: "object",
    additionalProperties: false,
    properties: {
        icons: {
            type: "array",
            items: [
                {
                    type: "object",
                    properties: {
                        src: {
                            type: "string"
                        },
                        sizes: {
                            type: "string"
                        },
                        type: {
                            type: "string"
                        },
                        purpose: {
                            type: "string"
                        }
                    },
                    required: [
                        "src",
                        "sizes",
                        "type",
                        "purpose"
                    ]
                },
            ]
        },
        name: {
            type: "string"
        },
        short_name: {
            type: "string"
        },
        orientation: {
            type: "string"
        },
        display: {
            type: "string"
        },
        start_url: {
            type: "string"
        },
        scope: {
            type: "string"
        },
        description: {
            type: "string"
        },
        theme_color: {
            type: "string"
        },
        background_color: {
            type: "string"
        }
    },
    required: [
        "icons",
        "name",
        "short_name",
        "orientation",
        "display",
        "start_url",
        "scope",
        "description",
        "theme_color",
        "background_color"
    ]
};

module.exports = manifestSchema;