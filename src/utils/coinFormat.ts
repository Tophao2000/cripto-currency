const formatPrice = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "USD",
});

const formatPriceCompact = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "USD",
  notation: "compact",
});

export { formatPrice, formatPriceCompact };
