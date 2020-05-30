
const testRepository = {
  algorithm: (body): number => {
    // eslint-disable-next-line prefer-const
    let { a, b } = body;

    if (b == 1)
      return a;
    else {
      b = b - 1;
      return (a + testRepository.algorithm({ a, b }));
    }
  }
};

export default testRepository;