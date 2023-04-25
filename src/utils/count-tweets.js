export default function formatTweetsCount(count) {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

  if (count >= 1000000) {
    const countFormatted = formatter.format(count / 1000000);

    return countFormatted + "M";
  } else if (count >= 10000) {
    const countFormatted = formatter.format(count / 1000);

    return countFormatted + "k";
  } else {
    const countFormatted = formatter.format(count);

    return countFormatted;
  }
}
