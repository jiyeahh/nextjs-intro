const API_KEY = process.env.API_KEY;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return[
      {
        source:"/old-blg/:path*",
        destination:"/new-blg/:path*",
        permanent: false,

      },
    ]
  },
  async rewrites(){
    return[{
      source:"/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    },
    {
      source: "/api/movies/:id",
      destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
    },
  ]
  }
};
//redirect는 source 페이지로 가면 destination으로 이동 뒤의 path는 catch를 위함
//rewirtes는 기존 페이지에서 
module.exports = nextConfig
