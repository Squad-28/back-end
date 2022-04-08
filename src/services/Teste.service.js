import { testeRespositories } from '../repository/Teste.repository';
import HTTP500Error from '../errors/httpErrors/HTTP500Error';

async function findAll() {
  const hasUsers = testeRespositories.hasExistsUsers();

  if (!hasUsers) {
    throw new HTTP500Error();
  }

  const users = await testeRespositories.findAll();

  return users
}

export const services = {
  findAll: async () => findAll(),
};