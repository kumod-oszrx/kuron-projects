// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://your-domain.com'

  // gọi API lấy dữ liệu động từ CMS (blog + gallery)
  //   const blogs = await fetch(`${baseUrl}/api/blog`).then((res) => res.json())
  //   const galleries = await fetch(`${baseUrl}/api/gallery`).then((res) => res.json())

  // Trang tĩnh
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  //   // Blog posts
  //   const blogPages: MetadataRoute.Sitemap = blogs.map((post: any) => ({
  //     url: `${baseUrl}/blog/${post.slug}`,
  //     lastModified: new Date(post.updatedAt),
  //     changeFrequency: 'weekly',
  //     priority: 0.8,
  //   }))

  //   // Gallery items
  //   const galleryPages: MetadataRoute.Sitemap = galleries.map((item: any) => ({
  //     url: `${baseUrl}/gallery/${item.id}`,
  //     lastModified: new Date(item.updatedAt),
  //     changeFrequency: 'weekly',
  //     priority: 0.6,
  //   }))

  return [
    ...staticPages,
    //  ...blogPages,
    //  ...galleryPages
  ]
}
