export const fetchBenches = (filters) =>{
  debugger
  const {northEast, southWest} = filters;
  return $.ajax({
    method: "GET",
    url: "/api/benches",
    data: {bounds: filters},
    error: error => console.log(error)
  });
};

export const createBench = (bench)=>{
  return $.ajax({
    method: "POST",
    url: "/api/benches",
    data: {bench: bench},
    error: error => console.log(error)
  });
};
