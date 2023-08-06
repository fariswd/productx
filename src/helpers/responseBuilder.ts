const messageStatus = {
  200: "OK",
  400: "BAD REQUEST",
  500: "BAD GATEWAY",
};

export const successBuilder = ({
  status = 200,
  data,
}: {
  status?: number;
  data?: unknown;
}) => {
  return {
    status,
    message: messageStatus[status],
    data,
  };
};

export const errorBuilder = ({
  status = 400,
  data,
}: {
  status?: number;
  data?: unknown;
}) => {
  return {
    status,
    message: messageStatus[status],
    data,
  };
};
