export const filterTicketsTransfer = (arr, filters) => {
  const activeFilter = Array.from(new Set(filters.map((e) => e.active)));
  const filterParams = filters.slice(1, 6);
  if (filters[0].active) {
    return arr;
  } else if (activeFilter.length === 1 && activeFilter[0] === false) {
    return [];
  }
  const tickketFilter = (tickets) => {
    let res = false;
    filterParams.map((e) => {
      if (e.active) {
        res =
          tickets.segments[0].stops.length === e.value ||
          tickets.segments[1].stops.length === e.value;
      }
    });
    return res;
  };
  const resArr = arr.filter((e) => {
    return tickketFilter(e);
  });
  return resArr;
};
