const url = "https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e";
async function fetchProductData() {
  try {
    const response = await fetch(url).then((res) => res.json());
    return response;
  } catch (err) {
    return [];
  }
}
export default fetchProductData;
