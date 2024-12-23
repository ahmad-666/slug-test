import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  //trailingSlash: true, //redirect urls with trailing slashes to their counterpart without a trailing slash --> /about/ will redirect to /about (can cause CORS)
  images: {
    // minimumCacheTTL: 31536000, //use 31536000 for cache images for 1year , use 0 to disable caching
    dangerouslyAllowSVG: true, //allow svg images on <Image /> component , if we don't use it we should add 'unoptimized' prop on <Image />
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", //some security policy because we add dangerouslyAllowSVG:true
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.cufinder.io",
        pathname: "**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.leadmap.ai",
        pathname: "**",
        port: "",
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"], //prevent sass deprecation warnings
  },
  //@ts-expect-error "ignore ts because of statusCode key"
  async redirects() {
    //we can use redirect(url,RedirectType.replace) , permanentRedirect(url,RedirectType.replace) , redirect from next config , redirect from middleware , redirect with route handlers
    return [
      {
        permanent: true,
        statusCode: 301,
        source: "/directory/companies/:letter",
        destination: "/directory/companies/:letter/1",
      },
      {
        permanent: true,
        statusCode: 301,
        source: "/directory/people/:letter",
        destination: "/directory/people/:letter/1",
      },
    ];
  },
  async headers() {
    //for custom headers , we can customize 'source' for specific routes like adding dynamic url param,use regex,...
    //check https://nextjs.org/docs/app/api-reference/next-config-js/headers
    return [
      {
        source: "/api/:path*", // matching all API route handlers
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: `${process.env.NEXT_PUBLIC_FRONT_URL}`, //could use '*' too
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Accept, Authorization",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Download-Options",
            value: "noopen",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Permitted-Cross-Domain-Policies",
            value: "none",
          },
        ],
      },
    ];
  },
  experimental: {
    largePageDataBytes: 20 * 128 * 1000, //2mb(default is 128kb) , tweak nextjs max allow size for props of pages
    //optimizePackageImports: ['package-name'] //only load the modules you are actually using
  },
};

export default nextConfig;
