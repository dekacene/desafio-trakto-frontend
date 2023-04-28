// Parâmetros para requisição no endpoint "/document"
export interface DocumentParams {
  total_per_page?: number;
  order_by?: string;
  order_orientation?: string;
  created_between_start?: string;
  created_between_end?: string;
  nextCursor?: string;
  previousCursor?: string;
  updated_between_start?: string;
  updated_between_end?: string;
}

// Resposta do endpoint 'document'
export interface DocumentResponse {
  data: DocumentItem[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface DocumentItem {
  is_template: boolean;
  app_reference: AppReference;
  products: Product[];
  tags: string[];
  cover: Cover;
  is_deleted: boolean;
  is_premium: boolean;
  user_reference: UserReference;
  is_renamed: boolean;
  thumbs: Thumbs;
  allow_preview: boolean;
  theme_reference: ThemeReference;
  author: Author;
  module: any;
  created_at: string;
  published: boolean;
  page_format_reference: PageFormatReference;
  printable: boolean;
  pages: Page[][];
  app_demo: boolean;
  provider: string;
  price: any;
  is_printable: boolean;
  is_public: boolean;
  published_at: any;
  slug: any;
  is_featured: boolean;
  updated_at: string;
  id: string;
  title: string;
}

interface AppReference {
  id: string;
}

interface Product {
  app_product_reference: AppProductReference;
  created_at: CreatedAt;
}

interface AppProductReference {}

interface CreatedAt {}

interface Cover {
  raw: string;
  medium: string;
  high: string;
  low: string;
}

interface UserReference {
  id: string;
}

interface Thumbs {
  raw: string;
  medium: string;
  high: string;
  low: string;
}

interface ThemeReference {
  id: string;
}

interface Author {
  name: any;
}

interface PageFormatReference {
  id: string;
}

interface Page {
  page_index: number;
  page_format_id: any;
}
