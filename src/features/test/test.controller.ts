import { Request } from 'express';
import testRepository from './test.repository';

const testController = {
  algorithm: async (req: Request) => {

    // no imprime body
    console.log(req.body);
    return testRepository.algorithm(req.body);
  }
};

export default testController;