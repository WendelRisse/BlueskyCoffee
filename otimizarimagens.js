// optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Diretórios de entrada e saída
const inputDir = path.resolve(__dirname, 'src/assets/images');
const outputDir = path.resolve(__dirname, 'dist/assets/images');

// Função para otimizar imagens
const optimizeImage = async (filePath) => {
  const outputFilePath = path.join(outputDir, path.relative(inputDir, filePath));
  const outputDirPath = path.dirname(outputFilePath);

  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }

  await sharp(filePath)
    .resize(800) // Redimensione conforme necessário
    .toFormat('webp') // Converta para WebP
    .toFile(outputFilePath);
  console.log(`Processed ${filePath}`);
};

// Processar todas as imagens no diretório
const processImages = async () => {
  const files = fs.readdirSync(inputDir).map(file => path.join(inputDir, file));
  for (const file of files) {
    if (fs.statSync(file).isFile()) {
      await optimizeImage(file);
    }
  }
};

// Executar o script
processImages().catch(console.error);
