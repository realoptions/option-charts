import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'OptionCharts',
      fileName: 'option-charts',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'victory', 'prop-types'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          victory: 'Victory',
          'prop-types': 'PropTypes'
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
