export const getServices = async () => {
  const resp = await fetch("http://localhost:3000/services/api/get-all");
  const data = await resp.json();
  // console.log(data);
  return data || [];
};

export const getServicesDetails = async (id) => {
  const resp = await fetch(`http://localhost:3000/services/api/get-all/${id}`);
  const data = await resp.json();
  return data || {};
};
