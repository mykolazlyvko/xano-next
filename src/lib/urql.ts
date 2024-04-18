import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
    url: `${process.env.GRAPHCMS_PROJECT_API}`,
    fetchOptions: { headers: { Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}` } },
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache };