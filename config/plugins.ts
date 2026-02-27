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
      },
    },
  },
});
