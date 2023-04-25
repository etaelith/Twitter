export function getElapsedTime(createdAt) {
  const elapsedTime = (Date.now() - createdAt.getTime()) / 1000;

  if (elapsedTime < 60) {
    return Math.floor(elapsedTime) + "s"; // segundos
  } else if (elapsedTime < 3600) {
    return Math.floor(elapsedTime / 60) + "m"; // minutos
  } else if (elapsedTime < 86400) {
    return Math.floor(elapsedTime / 3600) + "h"; // horas
  } else {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return monthNames[createdAt.getMonth()] + " " + createdAt.getDate(); // días
  }
}
export function getTitle(createdAt) {
  return (
    createdAt.toLocaleString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    }) +
    " · " +
    createdAt.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  );
}
