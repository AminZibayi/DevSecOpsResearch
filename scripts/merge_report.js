const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const sourceDir = path.join(rootDir, "content");
const outputFile = path.join(rootDir, "AI_Native_DevSecOps.md");

const chapters = [
  "Chapter0.md",
  "Chapter1.md",
  "Chapter2.md",
  "Chapter3.md",
  "Chapter4.md",
  "Chapter5.md",
  "Chapter6.md",
  "Chapter7.md",
  "Chapter8.md",
  "Appendices.md",
];

console.log(`Merging chapters from ${sourceDir}...`);

let fullContent = "";

chapters.forEach((chapter) => {
  const filePath = path.join(sourceDir, chapter);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
    fullContent += content + "\n\n---\n\n";
    console.log(`Added ${chapter}`);
  } else {
    console.warn(`Warning: ${chapter} not found in ${sourceDir}`);
  }
});

fs.writeFileSync(outputFile, fullContent);
console.log(`Successfully merged report to ${outputFile}`);
