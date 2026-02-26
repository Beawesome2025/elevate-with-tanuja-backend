import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({});

export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('CF_ACCESS_KEY_ID'),
            secretAccessKey: env('CF_ACCESS_SECRET'),
          },
          endpoint: env('CF_ENDPOINT'), // e.g. https://<accountid>.r2.cloudflarestorage.com
          region: 'auto', // Cloudflare R2 uses 'auto'
          forcePathStyle: true, // Important for S3-compatible storage
        },
        params: {
          Bucket: env('CF_BUCKET'),
        },
      },
    },
  },
});
