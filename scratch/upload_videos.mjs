import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

const token = process.env.BLOB_READ_WRITE_TOKEN;

const videos = [
  "0509 2.MOV",
  "0218-copy(1) 2.MOV",
  "0314 2.MOV",
  "0218 (1).mov"
];

const publicDir = './public/videos';

async function uploadVideos() {
  const results = {};
  for (const video of videos) {
    const filePath = path.join(publicDir, video);
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      continue;
    }

    console.log(`Uploading ${video}...`);
    const fileBuffer = fs.readFileSync(filePath);
    const blob = await put(`videos/${video}`, fileBuffer, {
      access: 'public',
      token: token
    });
    console.log(`Uploaded ${video}: ${blob.url}`);
    results[video] = blob.url;
  }
  console.log('\n--- ALL URLS ---');
  console.log(JSON.stringify(results, null, 2));
}

uploadVideos().catch(console.error);
