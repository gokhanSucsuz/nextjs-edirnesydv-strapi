module.exports = ({ env }) => ({
	upload: {
		name: "strapi::security",
		config: {
			provider: "@strapi/provider-upload-cloudinary",
			providerOptions: {
				cloud_name: env("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME"),
				api_key: env("CLOUDINARY_API_KEY"),
				api_secret: env("CLOUDINARY_API_SECRET")
			},
			actionOptions: {
				upload: {},
				delete: {}
			}
		}
	}
});
