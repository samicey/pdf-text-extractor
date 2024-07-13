
export const getDocument = jest.fn(() => ({
    promise: Promise.resolve({
      numPages: 1,
      getPage: jest.fn(() =>
        Promise.resolve({
          getTextContent: jest.fn(() =>
            Promise.resolve({
              items: [{ str: 'Mock PDF Text' }],
            })
          ),
        })
      ),
    }),
  }));
  
  export const GlobalWorkerOptions = {
    workerSrc: '', // Mock worker source to prevent loading error
  };