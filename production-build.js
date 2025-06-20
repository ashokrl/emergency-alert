const { build } = require('vite');
const path = require('path');

async function buildForProduction() {
  try {
    // Build the client
    await build({
      root: path.resolve(__dirname, 'client'),
      build: {
        outDir: path.resolve(__dirname, 'dist/client'),
        emptyOutDir: true,
      },
    });

    console.log('✅ Client build completed successfully');
    
    // Copy server files to dist
    const fs = require('fs-extra');
    await fs.copy('server', 'dist/server');
    await fs.copy('shared', 'dist/shared');
    await fs.copy('package.json', 'dist/package.json');
    await fs.copy('package-lock.json', 'dist/package-lock.json');
    
    console.log('✅ Server files copied to dist');
    console.log('🚀 Production build ready in ./dist folder');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildForProduction();