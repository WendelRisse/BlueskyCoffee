const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Diretório de entrada e saída
const inputDir = path.resolve(__dirname, './src/assets/images');
const outputDir = path.resolve(__dirname, './src/assets/optimized');

// Cria o diretório de saída, se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Processa as imagens
fs.readdirSync(inputDir).forEach(file => {
  const inputFilePath = path.join(inputDir, file);
  const outputFileName = path.parse(file).name;

  // Verifica se o arquivo é uma imagem válida
  if (/\.(jpg|jpeg|png)$/.test(file)) {
    // Converte para WebP
    sharp(inputFilePath)
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${outputFileName}.webp`))
      .then(() => console.log(`${file} convertido para WebP`))
      .catch(err => console.error(`Erro ao converter ${file} para WebP:`, err));

    // Comprimi JPEG
    sharp(inputFilePath)
      .jpeg({ quality: 85 })
      .toFile(path.join(outputDir, `${outputFileName}.jpg`))
      .then(() => console.log(`${file} comprimido para JPEG`))
      .catch(err => console.error(`Erro ao comprimir ${file}:`, err));
  }
});
