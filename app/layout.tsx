import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ScrollProgress from '@/components/ScrollProgress';

const inter = localFont({
  src: [
    { path: '../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2', weight: '400' },
    { path: '../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2', weight: '500' },
    { path: '../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2', weight: '600' },
    { path: '../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2', weight: '700' },
  ],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = localFont({
  src: [
    { path: '../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2', weight: '400' },
    { path: '../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-700-normal.woff2', weight: '700' },
  ],
  variable: '--font-mono',
  display: 'swap',
});

const BASE_URL = 'https://sidharthrai.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Sidharth R. | Lead Software Engineer & GenAI Expert',
    template: '%s | Sidharth R.',
  },

  description:
    'Portfolio of Sidharth R. — Lead Software Engineer at Persistent Systems with 6+ years of experience in Generative AI, Data Engineering, MLOps, and Cloud Computing. Ex-IBM. MS in ML & AI at LJMU.',

  keywords: [
    'Sidharth R.',
    'Sidharth Rai',
    'GenAI Developer',
    'Lead Software Engineer',
    'Generative AI',
    'Agentic AI',
    'Data Engineering',
    'MLOps',
    'Machine Learning',
    'RAG',
    'LLM Fine-Tuning',
    'Databricks',
    'Vertex AI',
    'Azure OpenAI',
    'Persistent Systems',
    'IBM',
    'Healthcare AI',
    'FastAPI',
    'Python',
    'MongoDB',
    'Kubernetes',
    'Portfolio',
  ],

  authors: [{ name: 'Sidharth R.', url: 'https://linkedin.com/in/isidharthrai' }],
  creator: 'Sidharth R.',
  publisher: 'Sidharth R.',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Sidharth R. — Portfolio',
    title: 'Sidharth R. | Lead Software Engineer & GenAI Expert',
    description:
      'Lead Software Engineer at Persistent Systems specializing in Generative AI, Data Engineering, and Cloud Computing. 6+ years building enterprise-grade AI solutions in healthcare and supply chain.',
    images: [
      {
        url: '/profile_image.png',
        width: 1200,
        height: 630,
        alt: 'Sidharth R. — Lead Software Engineer & GenAI Expert',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sidharth R. | Lead Software Engineer & GenAI Expert',
    description:
      'Lead Software Engineer at Persistent Systems specializing in Generative AI, Data Engineering, and Cloud Computing. 6+ years of enterprise AI experience.',
    images: ['/profile_image.png'],
    creator: '@isidharthrai',
    site: '@isidharthrai',
  },

  icons: {
    icon: [
      { url: '/profile.png', type: 'image/png' },
    ],
    apple: '/profile.png',
    shortcut: '/profile.png',
  },

  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#09090b',
  colorScheme: 'dark',
};


const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Sidharth R.',
      alternateName: 'Sidharth Rai',
      url: BASE_URL,
      image: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/profile_image.png`,
        width: 800,
        height: 800,
      },
      jobTitle: 'Lead Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Persistent Systems',
        url: 'https://www.persistent.com',
      },
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Liverpool John Moores University',
          url: 'https://www.ljmu.ac.uk',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'International Institute of Information Technology Bangalore',
          url: 'https://www.iiitb.ac.in',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Chandigarh University',
          url: 'https://www.cuchd.in',
        },
      ],
      knowsAbout: [
        'Generative AI',
        'Agentic AI',
        'Machine Learning',
        'Data Engineering',
        'MLOps',
        'Cloud Computing',
        'LLM Fine-Tuning',
        'Retrieval-Augmented Generation',
        'Databricks',
        'FastAPI',
        'MongoDB',
        'Kubernetes',
        'Python',
        'React',
        'TypeScript',
      ],
      sameAs: [
        'https://linkedin.com/in/isidharthrai',
        'https://github.com/isidharthrai',
        'https://www.instagram.com/isidharthrai',
        'https://www.youtube.com/@isidharthrai',
      ],
      email: 'isidharthrai@gmail.com',
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Sidharth R. — Portfolio',
      description:
        'Personal portfolio of Sidharth R., Lead Software Engineer specializing in Generative AI, Data Engineering, and Cloud Computing.',
      author: { '@id': `${BASE_URL}/#person` },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="bg-zinc-950 text-zinc-50 antialiased selection:bg-zinc-800 selection:text-zinc-50">
        {/* JSON-LD structured data — placed in body, valid per spec and Google guidelines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
