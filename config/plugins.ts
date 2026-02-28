export default ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3', // Use the full package name
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('CF_ACCESS_KEY_ID'),
            secretAccessKey: env('CF_ACCESS_SECRET'),
          },
          endpoint: env('CF_ENDPOINT'), // Your Cloudflare R2 endpoint
          region: 'auto',
          forcePathStyle: true,
        },
        params: {
          Bucket: env('CF_BUCKET'),
        },
        // Ensure this is set to true if your provider supports it
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      // ADD THIS SECTION:
      sizeLimit: 1000000,
      breakpoints: {
        xlarge: null,
        large: null,
        medium: null,
        small: null,
        xsmall: null,
      },
    },
  },
});
