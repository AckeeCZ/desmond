const bool = (value: any) => {
    return (value === true || value === 'true' || value === '1' || value === 1);
};

export default bool;
