export const handlePrice = (value) =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'VND',
  });
