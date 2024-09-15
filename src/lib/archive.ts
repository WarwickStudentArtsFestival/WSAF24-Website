import fs from 'fs/promises';
import path from 'path';

// To create the archive, set ENABLE_ARCHIVE=false and SAVE_DATA=true then
// use NextJS to build the whole site. This should access every slug/page.

// Then the archive can be used with ENABLE_ARCHIVE=true.
const ENABLE_ARCHIVE = true;
const SAVE_DATA = true;

// If data is not saved, load and save it
const SAVE_DATA_IF_NOT_FOUND = true;

const DATA_DIRECTORY = 'data';

function getFilename<P>(name: string, params: P[]): string {
  let fileName = name;
  if (params.length > 0) fileName += `-${params.join('-')}`;
  return path.join(DATA_DIRECTORY, `${fileName}.json`);
}

export async function archivePromise<T, P>(
  name: string,
  func: (...params: P[]) => Promise<T>,
  ...params: P[]
): Promise<T | null> {
  if (ENABLE_ARCHIVE) {
    const fileName = getFilename(name, params);

    try {
      const data = await fs.readFile(fileName, 'utf-8');
      return JSON.parse(data);
    } catch (e) {
      console.error(`ARCHIVE: Couldn't read file ${fileName}:`, e);
    }
    if (!SAVE_DATA_IF_NOT_FOUND) return null;
  }

  const data = await func(...params);
  if (SAVE_DATA) {
    const fileName = getFilename(name, params);
    console.log(`ARCHIVE: Saving ${fileName}`);
    await fs.mkdir(DATA_DIRECTORY, { recursive: true });
    await fs.writeFile(
      fileName,
      JSON.stringify(
        data,
        (key, value) => (typeof value === 'bigint' ? value.toString() : value), // Handle bigints,
        2,
      ),
    );
  }

  return data;
}

export function convertArchivedDate(date: Date | string): Date {
  if (typeof date === 'string') return new Date(date);
  return date;
}
