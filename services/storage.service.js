import os from 'os';
import path from 'path';
import fs from 'fs';

const filePath = path.join(os.homedir(), 'weather-data.json');

const TOKEN_DICTIONARY = {
  token: 'token',
  city: 'city'
};

const isExist = async (filePath) => {
  try {
    await fs.promises.stat(filePath);
    return true;
  } catch (error) {
    return false;
  }
};

const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await fs.promises.readFile(filePath);
    data = JSON.parse(file);
  }
  data[key] = value;
  await fs.promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await fs.promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };
