export const fetchBenches = (bounds) =>{
  // const {northEast, southWest} = filters;
  // debugger
  return $.ajax({
    method: "GET",
    url: "/api/benches",
    data: {bounds},
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
