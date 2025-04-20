module.exports = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true, // Genera source maps también en producción (opcional)
    webpack: (config, { dev, isServer }) => {
        if (dev) {
            // Desactiva la minimización en desarrollo
            config.optimization.minimize = false;
            // Evita nombres de archivos hasheados
            config.output.filename = 'static/js/[name].js';
            config.output.chunkFilename = 'static/js/[name].chunk.js';
        }
        return config;
    },
}