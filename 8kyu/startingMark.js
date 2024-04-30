
    // Remember: Body height of 1.52 m --> starting mark: 9.45 m
    //           Body height of 1.83 m --> starting mark: 10.67 m
    // All other starting marks are based on these guidelines!
    const startingMark = (bodyHeight) => {
        const minHeight = 1.52;
        const maxHeight = 1.83;
        const minMark = 9.45;
        const maxMark = 10.67;

        const rateOfChange = (maxMark - minMark) / (maxHeight - minHeight);
        const constantOffset = minMark - (rateOfChange * minHeight);

        return parseFloat((rateOfChange * bodyHeight + constantOffset).toFixed(2));
    }
  