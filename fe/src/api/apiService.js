import axios from 'axios';

// const URL = 'https://syndicate-product-catalog.herokuapp.com';
const URL = 'http://localhost:5000';

// useEffect(() => {
//   const getPhonesAsync = async () => {
//     const receivedTodos = await getPhones(8, 4);
//     console.log('receivedTodos: ', receivedTodos);
//   };
//   getPhonesAsync();
// }, []);

export const getPhones = async (limit = 10, page = 1) => {
  const phonesResponse = await axios.get(`${URL}/products`, {
    params: {
      limit,
      page,
    },
  });

  return phonesResponse.data;
};
