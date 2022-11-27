import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const querySchema = z.object({
  id: z
    .string()
    .refine((v) => {
      return !isNaN(Number(v));
    })
    .transform((v) => Number(v)),
});

type User = {
  id: number;
  name: string;
};

const getUser = (id: number): User | null => {
  if (0 <= id && id < 10) {
    return {
      id,
      name: id % 2 == 0 ? 'Cat' : 'Dog',
    };
  }

  return null;
};

type ResponseType = {
  data?: {
    user: User;
  };
  error?: {
    message: string;
  };
};

const getHandler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const result = querySchema.safeParse(req.query);
  if (!result.success) {
    return res.status(400).json({ error: { message: 'クエリが不正です' } });
  }
  const { id } = result.data;
  const user = await getUser(id);
  if (!user) {
    return res.status(404).json({ error: { message: 'ユーザーが見つかりません' } });
  }
  return res.status(200).json({ data: { user } });
};

export default async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  switch (req.method) {
    case 'GET':
      getHandler(req, res);
      break;

    default:
      res.status(405).json({
        error: {
          message: `Method ${req.method} Not Allowed`,
        },
      });
  }
};
