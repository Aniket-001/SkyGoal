

// Asynchronomous Error Handlling 

export const catchAsyncError = (passedFunction) => (req, res, next) => {
    Promise.resolve(passedFunction(req, res, next)).catch((err) => {
      next(err);
    });
  };