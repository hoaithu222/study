export const fetchApi = async (url) => {
  //  await là đợi chờ
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
