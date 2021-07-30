const calcTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;

  return `${hours}h ${mins}m`;
};

const convertMoney = (money: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return formatter.format(money);
};

const isPersistedState = (stateName: string) => {
  const sessionState = sessionStorage.getItem(stateName);

  return sessionState && JSON.parse(sessionState);
};

export { calcTime, convertMoney, isPersistedState };
