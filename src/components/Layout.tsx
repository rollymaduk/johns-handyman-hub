import { ReactNode } from 'react'
import { SEO } from './SEO'
import { getLocalBusinessSchema } from '@/utils/structuredData'
import Footer from './Footer'
import Navbar from './Navbar'

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  structuredData?: Record<string, unknown>;
}

export function Layout({ 
  children, 
  title, 
  description,
  structuredData = getLocalBusinessSchema()
}: LayoutProps) {
  return (
    <>
      <SEO 
        title={title}
        description={description}
        structuredData={structuredData}
      />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout;
