function sortEggsInNest(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}

export const filterPrimaryTickets = (arr, filters) => {
  const activeFilter = filters.filter((e) => e.active);
  const copyArr = [...arr];
  switch (activeFilter[0].label) {
    case 'free':
      return copyArr.sort((a, b) => {
        return sortEggsInNest(a.price, b.price);
      });
    case 'fast':
      return copyArr.sort((a, b) => {
        const sumASegments = a.segments[0].duration + a.segments[1].duration;
        const sumBSegments = b.segments[0].duration + b.segments[1].duration;
        return sortEggsInNest(sumASegments, sumBSegments);
      });
    case 'Optimal':
      return arr;
  }
};
