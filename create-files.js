const fs = require('fs/promises');

async function main() {
  try {
    for (let index = 1; index < 10; index++) {
      await fs.mkdir(`./part-${index}`, { recursive: true });
    }
  } catch (err) {
    console.error(err);
  }
}

main()