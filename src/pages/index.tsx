// src/pages/index.tsx
import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Enter Quantum"
      description="Learn quantum computing from the ground up — with code, clarity, and chapters."
    >
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 1rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', color: '#1e293b' }}>
          👋 Welcome to <span style={{ color: '#0ea5e9' }}>Enter Quantum</span>
        </h1>

        <p style={{ fontSize: '1.2rem', maxWidth: '650px', textAlign: 'center', color: '#334155', marginTop: '1rem' }}>
          Dive into quantum computing chapter-by-chapter, with rich explanations, hands-on Python code, and visual
          insights powered by <strong>Qiskit</strong> and <strong>QuTiP</strong>.
        </p>

        <a
          href="/docs/chapter-1-introduction"
          style={{
            marginTop: '2rem',
            padding: '0.8rem 1.5rem',
            fontSize: '1.1rem',
            backgroundColor: '#0ea5e9',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'background-color 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0284c7')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0ea5e9')}
        >
          🚀 Start Learning
        </a>

        <img
          src="/img/quantum-theme.png"
          alt="Quantum Theme Banner"
          style={{ maxWidth: '700px', marginTop: '3rem', borderRadius: '12px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}
        />
      </main>
    </Layout>
  );
}
