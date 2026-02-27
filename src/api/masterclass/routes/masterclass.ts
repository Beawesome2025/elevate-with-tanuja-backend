import { factories } from '@strapi/strapi';
export default factories.createCoreRouter('api::masterclass.masterclass');
```

Your final folder structure should look like this:
```
src/
├── api/
│   └── masterclass/
│       ├── content-types/
│       │   └── masterclass/
│       │       └── schema.json       ← Content type schema
│       ├── controllers/
│       │   └── masterclass.ts
│       ├── services/
│       │   └── masterclass.ts
│       └── routes/
│           └── masterclass.ts
└── components/
    └── masterclass/
        ├── text-item.json            ← Reusable component
        └── faq.json                  ← FAQ component
