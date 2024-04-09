import api from './api';

const usePoke = async (pokemon) => {
  const response = await api.get(`/pokemon/${pokemon}`);
  return response.data;
};

export default usePoke;
