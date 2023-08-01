import { auth } from "@clerk/nextjs";

import prismadb from "./prismadb";

const checkIfUserUsedToday = (lastUpdate: Date) => {
  const currentDate = new Date();
  return (
    lastUpdate.getFullYear() === currentDate.getFullYear() &&
    lastUpdate.getMonth() === currentDate.getMonth() &&
    lastUpdate.getDate() === currentDate.getDate()
  );
};

export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return;

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (userApiLimit) {
    const userUsedToday = checkIfUserUsedToday(userApiLimit.updatedAt);

    await prismadb.userApiLimit.update({
      where: { userId },
      data: { count: userUsedToday ? userApiLimit.count + 1 : 0 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId, count: 1 },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return Infinity;

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  return userApiLimit ? userApiLimit.count : 0;
};
