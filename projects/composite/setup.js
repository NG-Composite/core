#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const sourceConfigPath = path.join(__dirname, "tailwind.config.js");
const targetConfigPath = path.join(process.cwd(), "tailwind.config.js");

// Verificar si el archivo fuente existe
if (!fs.existsSync(sourceConfigPath)) {
  console.error(
    "❌ Error: No se encontró tailwind.config.js en @ng-composite/core"
  );
  process.exit(1);
}

// Verificar si ya existe un tailwind.config.js
if (fs.existsSync(targetConfigPath)) {
  console.log("⚠️  Ya existe un tailwind.config.js en tu proyecto.");
  console.log(
    "   Si quieres sobrescribirlo, ejecuta: rm tailwind.config.js && npx ng-composite-setup"
  );
  process.exit(0);
}

try {
  // Copiar el archivo
  fs.copyFileSync(sourceConfigPath, targetConfigPath);
  console.log("✅ tailwind.config.js copiado exitosamente!");
  console.log("");
  console.log("📋 Próximos pasos:");
  console.log("   1. Asegúrate de tener Tailwind CSS instalado:");
  console.log("      npm install -D tailwindcss postcss autoprefixer");
  console.log("");
  console.log("   2. Agrega las directivas de Tailwind a tu styles.css:");
  console.log("      @tailwind base;");
  console.log("      @tailwind components;");
  console.log("      @tailwind utilities;");
  console.log("");
  console.log("   3. ¡Ya puedes usar los componentes de @ng-composite/core!");
  console.log("");
} catch (error) {
  console.error("❌ Error al copiar tailwind.config.js:", error.message);
  process.exit(1);
}
