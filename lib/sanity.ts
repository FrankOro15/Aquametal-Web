// Cliente ligero para Sanity usando fetch nativo de Next.js (sin dependencias adicionales)
const PROJECT_ID = 'uupou8h7'
const DATASET = 'production'
const API_VERSION = '2024-01-01'

export interface SanityPost {
  _id: string
  title: string
  slug: string
  excerpt?: string
  category?: string
  publishedAt?: string
  imageUrl?: string
  imageAlt?: string
  readTime?: string
  body?: any[]
  seoTitle?: string
  seoDescription?: string
  author?: string
  authorRole?: string
  faqs?: Array<{ _key: string; question: string; answer: string }>
}

export async function sanityFetch<T>(query: string, params: Record<string, any> = {}): Promise<T | null> {
  try {
    const url = new URL(`https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`)
    url.searchParams.set('query', query)
    
    // Serializar parámetros si existen
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(`$${key}`, JSON.stringify(value))
    })

    const res = await fetch(url.toString(), {
      // Revalidar cada 60 segundos o bajo demanda
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      console.warn('Error al consultar Sanity:', res.statusText)
      return null
    }

    const { result } = await res.json()
    return result as T
  } catch (error) {
    console.error('Error conectando con Sanity:', error)
    return null
  }
}
