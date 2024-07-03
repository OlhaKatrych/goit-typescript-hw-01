import axios from "axios";

export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: any = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
